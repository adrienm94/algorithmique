const durationConversionFromSeconds = () => {
    const duration = parseInt(prompt("Donnez une durée en secondes :"));
    const seconds = duration % 60;
    const minutes = Math.floor(duration / 60) % 60;
    const hours = Math.floor((duration / 60) / 60) % 24;
    const days = Math.floor(((duration / 60) / 60) / 24);
    console.log(`${duration} secondes équivaut à ${days} J ${hours} HH ${minutes} MN et ${seconds} SEC.`)
}

durationConversionFromSeconds();