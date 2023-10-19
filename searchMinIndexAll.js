import { searchMin } from "searchMin.js";

const searchMinIndexAll = function(tab){
    let res = [];
    let min = searchMin(tab);
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] === min) {
            res.push(i);
        } 
    }
    return res;
};

console.log(searchMinIndexAll([1, -10, 2, -10, -1]));