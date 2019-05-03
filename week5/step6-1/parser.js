class ArrayParser {
    constructor() {
        this.bracketStack = [];
    }
    tokenizer(inputString) {
        const tokenArray = [];
        for (let i in inputString) {
            if (inputString[i] !== ' ' && inputString[i] !== "\n") {
                tokenArray.push(inputString[i]);
            }
        }
        return tokenArray;
    }

    typeCheck(string) {
        if (string === "true" || string === "false") return this.validationCheck(string, "boolean");
        if (string[0] === "'" && string[string.length - 1] === "'") return this.validationCheck(string, "string");
        if (string === ",") return this.validationCheck(string, "separator");
        if (string === "[") return this.validationCheck(string, "arrayStartOperator");
        if (string === "]") return this.validationCheck(string, "arrayEndOperator");
        return this.validationCheck(string, "number");
    }

    removeQuotes(string) {
        return string.slice(1, string.length - 1);
    }

    validationCheck(element, type) {
        if (type === "number") {
            if (isNaN(Number(element))) throw new Error(`${element}는 알수 없는 타입입니다.`);
            return type;
        }
        if (type === "string") {
            if (this.removeQuotes(element).includes("'")) throw new Error(`${element}는 올바른 문자열이 아닙니다.`);
            return type;
        }
        return type;
    }


    lexer(inputArray) {
        const lexerArray = [];
        inputArray.reduce((acc, value) => {
            if (value === "[" || value === "]" || value === ",") {
                if (acc !== "") {
                    lexerArray.push({
                        "value": acc,
                        "type": this.typeCheck(acc)
                    });
                    lexerArray.push({
                        "value": value,
                        "type": this.typeCheck(value)
                    });
                    acc = "";
                } else {
                    lexerArray.push({
                        "value": value,
                        "type": this.typeCheck(value)
                    });
                }
            } else {
                acc += value;
            }
            return acc
        }, "");
        return lexerArray;
    }


    parser(inputArray, resultArray = []) {
        let inputData;
        while (inputArray.length > 0) {
            inputData = inputArray.shift();
            if (inputData.type === "arrayStartOperator") {
                this.bracketStack.push("[");
                resultArray.push({
                    type: "array",
                    child: this.parser(inputArray, [])
                });
            } else if (inputData.type === 'number') {
                resultArray.push({
                    type: 'number',
                    value: Number(inputData.value)
                });
            } else if (inputData.type === 'boolean') {
                resultArray.push({
                    type: 'boolean',
                    value: Boolean(inputData.value)
                });
            } else if (inputData.type === 'string') {
                resultArray.push({
                    type: 'string',
                    value: String(this.removeQuotes((inputData.value)))
                });
            } else if (inputData.type === "arrayEndOperator") {
                this.bracketStack.pop();
                return resultArray;
            }
        }

        return resultArray;
    }

    parserExcuter(inputString) {
        try{
        this.inputIndex = 0;
        let result = this.parser(this.lexer(this.tokenizer(inputString)))[0];
        this.bracketStack.length !== 0 ? result = '"유효하지 않은 텍스트 입니다."' : 0;
        return result;
        }catch(error){
        console.log(error.message);
        }
    }
}



const arrParser = new ArrayParser();
const testCode = (input) => {
    return arrParser.parserExcuter(input);
}

// console.log(testCode('[123,12,[3],1]'));
console.log(testCode("['123',true,[3,2,[1]],2,1]"));