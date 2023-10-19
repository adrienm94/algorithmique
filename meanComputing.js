const meanComputing = (note1, note2, note3) => {
    const coef1 = parseFloat(prompt("Coefficient de la note 1:"));
    const coef2 = parseFloat(prompt("Coefficient de la note 2:"));
    const coef3 = parseFloat(prompt("Coefficient de la note 3:"));
    const moyenne = (note1 * coef1 + note2 * coef2 + note3 * coef3) / (coef1 + coef2 + coef3);
    return moyenne;
};

console.log(meanComputing(14, 12, 16));