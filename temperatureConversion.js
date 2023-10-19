const temperatureConversion = () => {
    const tempC = parseFloat(prompt("Donner une température en degrés Celsius :"));
    const tempF = (tempC*1.8)+32;
    console.log(`${tempC} degrés Celsius équivaut à ${tempF} degrés Fahrenheit.`);
};

temperatureConversion();