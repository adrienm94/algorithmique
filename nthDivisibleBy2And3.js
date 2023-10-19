const nthDivisibleBy2And3 = (n) => {
    let compt = 0;
    let i = 2;
    let res;
    while (compt<n) {
        if (i%2==0 && i%3==0) {
            res = i;
            compt++;
        }
        i++;
    }
    console.log(res);
};

nthDivisibleBy2And3(1);