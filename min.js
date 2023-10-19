const min = (n1, n2) => {
    let res;
    if (n1 < n2) {
        res = n1;
    } else {
        res = n2;
    }
    return res;
};

console.log(min(2,5));

export { min };