import { isOrdered } from "./isOrdered";

const naiveSearch = (tab, value) => {
    try {
        if (!isOrdered(tab)) {
            throw new Error("Tableau non trié");
        }
        else {
            let valueIndex = -1;
            let i = 0;
            while (i < tab.length && (valueIndex === -1)) {
                if (tab[i] === value) {
                    valueIndex = i;
                }
                i++;
            }
            return valueIndex;
        }

    } catch (error) {
        console.log(error);
    }
};

console.log(naiveSearch([0, 1, 2, 4, 7, 10], 7));