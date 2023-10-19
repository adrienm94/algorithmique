const searchMin = function (tab) {
    let min = tab[0];
    for (let i = 0; i < tab.length - 1; i++) {
        if (tab[i + 1] < min) {
            min = tab[i + 1];
        }
    }
    return min;
}

export { searchMin };

console.log(searchMin([1, 0, 2, -10, -1]));