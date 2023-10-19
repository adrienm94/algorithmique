// Compute factorial of a number

const factorial = (n) => {
    let res = 1;
    if (n == 0) {
        return res;
    }
    else {
        for (let i = 0; i < n ; i++) {
            res *= n - i;
        }
        return res;
    }
};

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));