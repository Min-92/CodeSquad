(function callModuleChecker(){
    result = new Date();
    console.log("WELCOME UTIL MODULE : " + result);
})();

function checkNum(A){
    if (typeof A == "number") {
        return true;        
    }else{
        return false;

    }
}

module.exports.sum = (arr) => {
    result =  0;

    for (let i = 0; i < arr.length; i++) {
        if (checkNum(arr[i])) result += arr[i]
        continue;
        
    }

    return result;
}