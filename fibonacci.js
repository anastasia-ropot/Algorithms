// 1) Recursion
function getRecursionFibonacci(number) {
    return number <= 2 ? 1 : getRecursionFibonacci(number - 1) + getRecursionFibonacci(number - 2);
}
console.log("1) Recursion", getRecursionFibonacci(7));

// 2) Loop
function geLoopFibonacci(number) {
        let firstNumber = 0;
        let secondNumber = 1;
        let result = 1;

        for (let i = 2; i <= number; i++) {
            result = firstNumber + secondNumber;
            firstNumber = secondNumber;
            secondNumber = result;
        }
        return result;
}
console.log("2) Loop", geLoopFibonacci(7));

// 3) Memoization
// Memoization is the programmatic practice of making long recursive/iterative functions run much faster.
function geMemoizationFibonacci(number) {
    let memoization = [];

    if (memoization[number] !== undefined) {
        return memoization[number];
    }
    let current = 0;
    let next = 1;

    for (let i = 0; i < number; i++) {
        memoization[i] = current;
        [current, next] = [next, current + next];
    }

    return current;
}
console.log("3) Memoization", geMemoizationFibonacci(7));
