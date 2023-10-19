const doubleMaxTab = (tab1, tab2) => {

    let res = [];

    for (let index = 0; index < tab1.length; index++) {
        if (tab1[index] <= tab2[index]) {
            res[index] = tab2[index];
        } else {
            res[index] = tab1[index];
        }
        
    }

    return res;
}

console.log(doubleMaxTab([1, 5, 3], [2, 3, 4]))