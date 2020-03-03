// 1) Recursion
function getRecursionFactorial(number) {
    return (number === 1) ? number : (number * getRecursionFactorial(number - 1));
}
console.log("1) Recursion", getRecursionFactorial(5));

// 2) Loop 1
function getFirstLoopFactorial(number) {
    let result = 1;

    for (let i = number; i > 1; i--) {
        result *= i;
    }

    return result;
}
console.log("2) Loop 1", getFirstLoopFactorial(5));

// 3) Loop 2
function getSecondLoopFactorial(number){
    let result = 1;

    while(number){
        result *= number--;
    }

    return result;
}
console.log("2) Loop 2", getSecondLoopFactorial(5));
