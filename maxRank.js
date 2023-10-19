function maxRank(nStr, digit) {
    console.log(nStr, digit);

    let rank = -1;
    let i = 0;
    let isFound = false;
    console.log(nStr.length, rank, i, isFound);

    while (i < nStr.length && !(isFound)) {
        console.log(i, nStr[i]);
        console.log(nStr[i] === digit);
        if (nStr[i] === digit) {
            rank = nStr.length - i;
            isFound = true;
        }
        i = i + 1;
    }
    return rank;
}


console.log(maxRank("4561", "5"));