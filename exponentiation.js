// 1) Recursion
// Recursion is simply when a function calls itself
function getRecursionPow(x, n) {
    return (n === 1) ? x : (x * getRecursionPow(x, n - 1));
}
console.log("1) Recursion", getRecursionPow(2, 3));

// 2) Loop
// Loops are a way to repeat the same code multiple times.
function getLoopPow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}
console.log("2) Loop", getLoopPow(2, 3));

// 3) Math
// Math is a built-in object that has properties and methods for mathematical constants and functions. Not a function object.
const mathPow = Math.pow(2, 3);
console.log("3) Math", mathPow);

// 4) Exponentiation operator
// We know many operators from school. They are things like addition +, multiplication *, subtraction -, and so on.
const operatorPow = 2 ** 3;
console.log("4) Operator", operatorPow);
