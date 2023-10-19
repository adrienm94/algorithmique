// import { isPrimeNumber } from "./isPrimeNumber"; //ES
let f = require("./isPrimeNumber"); // NodeJS

const firstPrimeNumbers = (num) => {

    for (let i = 2; i < num; i++) {
        if (f.isPrimeNumber(i)) {
            console.log(`${i} is a prime number lesser than ${num}.`);
        } else {
            continue;
        }
        
    }

}

firstPrimeNumbers(12);