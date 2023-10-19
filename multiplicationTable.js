// Prints the multiplication table of n

const multiplicationTable = function (n) {
    console.log(`Table de multiplication de ${n} :`);
    for (let i = 1; i <= n; i++) {
        console.log(`${n} * ${i} = ${n*i}`);
    }
}

multiplicationTable(5);