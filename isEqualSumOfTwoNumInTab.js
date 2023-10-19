const isEqualSumOfTwoNumInTab = (tab, value) => {
    let sumFound = false;
    let i = 0;
    let j;
    while (i < tab.length && !sumFound) {
        j = i + 1;
        while (j < tab.length && !sumFound) {
            if (tab[i] + tab[j] === value) {
                sumFound = true;
            }
            j++;
        }
        i++;
    }
    return sumFound;
}

console.log(isEqualSumOfTwoNumInTab([4,5,6,8,3], 10));