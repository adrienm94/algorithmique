function isOrdered(tab) {
    let tabOrdered = true;
    let index = 0;
    while (tabOrdered && (index < tab.length - 1)) {
        if (tab[index] > tab[index+1]){
            tabOrdered = false;
        }
        index++;
    }

    return tabOrdered;
}

// console.log(isOrdered([20, 10, 2.4, 2.47, 10]));


// export { isOrdered }; // ES syntax
module.exports = { isOrdered }; // nodejs syntax