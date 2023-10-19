do {
    value = parseInt(prompt("Donner un entier entre 3 et 18 :"));
} while (value < 3 && value > 18);

for (let d1 = 0; d1 < 6; d1++) {
    for (let d2 = 0; d2 < 6; d2++) {
        for (let d3 = 0; d3 < 6; d3++) {
            if (d1 + d2 + d3 === value) {
                console.log(`${d1}, ${d2}, ${d3}`);
            }
        }
    }
}