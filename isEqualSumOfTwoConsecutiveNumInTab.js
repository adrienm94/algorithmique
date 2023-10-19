const isEqualSumOfTwoConsecutiveNumInTab = (tab, value) => {
    let equalityFound = false;
    let index = 0;
    while (!equalityFound && index < tab.length - 1) {
        if (tab[index] + tab[index + 1] == value) {
            equalityFound = true;
        }
        index++;
    }
    return equalityFound
};

console.log(`The sum of two consecutive numbers is equal to a value in tab : ${isEqualSumOfTwoConsecutiveNumInTab([3,4,5], 9)}.`)