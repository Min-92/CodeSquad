class ArrayParser {
    constructor() {
        this.bracketStack = [];
        this.quoteStack = [];
    }
    tokenizer(inputString) {    
        const tokenArray = [];
        let value = "";
        for(let i  = 0; i< inputString.length; i++){
            if(inputString[i] === "[" || inputString[i] === "]" || inputString[i] === ","){
                if(value !== ""){
                    tokenArray.push(value);
                    tokenArray.push(inputString[i]);
                    value = "";
                }else{
                    tokenArray.push(inputString[i]);
                }
            } else {
                value += inputString[i];
            }
        }
        return tokenArray;
    }

    typeCheck(string) {
        if (string === "true" || string === "false") return "boolean";
        if (string[0] === "'" && string[string.length - 1] === "'" || string[0] === '"' && string[string.length - 1] === '"') return "string";
        if (string === ",") return "separator";
        if (string === "[") return "arrayStartOperator"
        if (string === "]") return "arrayEndOperator";
        return "number";
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
                                        
    parser(inputArray) {
        const resultArray = [];
        let inputData;
        while(inputArray.length > 0){
            inputData = inputArray.shift();
            if(inputData.type === "arrayStartOperator" ){
                this.bracketStack.push("[");
                resultArray.push({type : "array", child : this.parser(inputArray)});
            }else if(inputData.type === 'number'){
                resultArray.push({type : 'number', value : inputData.value});
            }else if(inputData.type === "arrayEndOperator" ) {
                this.bracketStack.pop();
                return resultArray;
            }
        }

        return resultArray;
    }

    parserExcuter(inputString) {
        this.inputIndex = 0;
        let result = this.parser(this.lexer(this.tokenizer(inputString)))[0];
        result = this.bracketStack.length !== 0 ? "유효하지 않은 텍스트" : result;
        return result;
    }
}


const arrParser = new ArrayParser();
const testCode = (input) => {
    return arrParser.tokenizer(input);
    // return arrParser.parserExcuter(input);
}

console.log(testCode('[123,12,[3],1]'));