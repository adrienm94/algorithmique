const salaryComputing = (N, TH) => {
    let salary;
    if (N > 35) {
        salary = 35 * TH + (N - 35) * 1.5 * TH;
    } else {
        salary = N * TH;
    }
    return salary;
}

console.log(salaryComputing(35, 9));