const isLeapYear = function (year) {

    let isLeap;
    if (year > 0 && year === Math.round(year)) {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            isLeap = true;
        }
        else {
            isLeap = false;
        }
        return isLeap;
    } else {
        return "year must be a positive integer.";
    }
}

console.log(isLeapYear(2004));