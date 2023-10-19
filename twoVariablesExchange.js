const twoVariablesExchange = () => {
    let a = prompt("Valeur de a :");
    let b = prompt("Valeur de b :");
    let temp;
    console.log("a=" + a + " alors que b=" + b);
    temp = a;
    a = b;
    b = temp;   
    
    // a = a + b
    // b = a - b
    // a = a - b

    console.log("maintenant a=" + a + " alors que b=" + b);
};

twoVariablesExchange();
