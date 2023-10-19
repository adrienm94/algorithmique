const durationConversionToSeconds = (days, hours, minutes, seconds) => {
    if (days>=0 && hours>=0 && hours<=24 
        && minutes>=0 && minutes<60 && seconds>=0 
        && seconds<60) {
        const totalSeconds = 86400*days + 3600*hours + 60*minutes + seconds;
        return totalSeconds;
    } else {
        console.error("Un des paramètres n'est pas valide.");
    }
}

console.log(durationConversionToSeconds(0, 1, 2, 5));