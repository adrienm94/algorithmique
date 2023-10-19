// import { isOrdered } from "./isOrdered"; // ES syntax
let f = require("./isOrdered"); // nodejs syntax

function dichotomicSearch(tab, value) {
    try {
        if (f.isOrdered(tab) === false) {
            throw new Error("Le tableau n'est pas trié.");
        }
        else {
            let deb = 0;
            let fin = tab.length - 1;
            let mid;
            while (deb <= fin) {
                mid = Math.round((fin+deb)/2);
                if (tab[mid] === value) {
                    return mid;
                }
                else if (tab[mid] < value){
                    deb = mid + 1;
                } else {
                    fin = mid - 1;
                }
            }
        }
        return -1;
    } catch (error) {
        console.log(error);
    }
}

console.log(dichotomicSearch([1,5,6,14,25,41,445,621,785,1231,5456,50000,560000], 5))