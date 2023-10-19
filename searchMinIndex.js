import { searchMin } from "searchMin.js";

const searchMinIndex = function(tab){
    let min = searchMin(tab);
    let trouve  = false;
    let i = 0;
    while (!trouve) {
        if (tab[i] != min) {
            minIndex = i;
            trouve = true;
        }
        i++;
    }
    return minIndex;
}

console.log(searchMinIndex([1, 0, 2, -10, -1]));