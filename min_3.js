import { min } from "./min.js";

function min_3(n1, n2, n3) {
    return min(n1, min(n2, n3));
}

// function min_3(n1, n2, n3){
//     let min;
//     if (n1 < n2 && n1 < n3) { 
//         min = n1;
//     } else if (n2 < n3){
//         min = n2;
//     } else {
//         min = n3;
//     }
//     return min;
// }

console.log(min_3(3, 5, 2));