const planeTicket = function (ptarif, age) {
    if (age > 0 && age <= 2) {
        return ptarif * 0.1;
    } else if (age > 2 && age <= 12) {
        return ptarif * 0.5;
    } else {
        return ptarif;
    }
}

console.log(100, 10);