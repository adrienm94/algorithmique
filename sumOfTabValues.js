function sumOfTAbleValues(tab) {
    let sum = 0;
    tab.forEach(element => {
        sum += element;
    });

    return sum;
}

console.log(sumOfTAbleValues([2, 4, 7]))