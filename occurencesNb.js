function occurencesNb(tab, num) {
    let count = 0;
    tab.forEach(item => {
        if (item === num) {
            count++;
        }
    });
    return count;
}

console.log(occurencesNb([1, -1, 20, -1, 5], -1));