function isPrimeNumber(n) {
    let isPrimeNumber = true;
    let diviseur = 2;
    while (diviseur < n && isPrimeNumber) {
        if (n % diviseur === 0) {
            isPrimeNumber = false;
        }
        diviseur++;
    }
    return isPrimeNumber;
}

// export { isPrimeNumber }; //ES
module.exports = { isPrimeNumber }; //NodeJS