// 1) Recursion
function getRecursionArithmeticSeries(number) {
    return (number === 1) ? number : (number + getRecursionArithmeticSeries(number - 1));
}
console.log("1) Recursion", getRecursionArithmeticSeries(100));

// 2) Loop
function getLoopArithmeticSeries(number) {
    let result = 1;

    for (let i = number; i > 1; i--) {
        result += i;
    }

    return result;
}
console.log("2) Loop", getLoopArithmeticSeries(100));

// 3) Arithmetic Series
// Formula: n * (a_1 + a_n) / 2
function getArithmeticSeries(n) {
    return n * (1 + n) / 2;
}
console.log("3) Arithmetic Series",getArithmeticSeries(100));
