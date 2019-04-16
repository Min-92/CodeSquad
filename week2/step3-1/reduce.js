const myReduce = (arr, callback, initialValue) => {
    if(initialValue === undefined){
        initialValue = 0;
    }

    arr.forEach(element => {
        initialValue = callback(initialValue,element);
    })
    return initialValue;
}   

const arr = [1,2,3,4,5];

let result = myReduce(arr, (next,prev) => next + prev,);
console.log(result);
result = myReduce(arr, (next,prev) => next + prev,3);
console.log(result);
result = myReduce(arr, (next,prev) => next*prev, 1);
console.log(result);

