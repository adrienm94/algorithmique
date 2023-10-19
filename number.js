function number() {
    let num;
    do {
        num = parseFloat(prompt("Tapez un nombre :"));
        console.log(num);
    } while (num != 0);
    return num;
}


console.log(number());