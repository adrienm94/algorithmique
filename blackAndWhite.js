const blackAndWhite = (mat, seuil) => {
    for (let lin = 0; lin < mat.length; lin++) {
        for (let col = 0; col < mat[lin].length; col++) {
            if (mat[lin][col] < seuil) {
                mat[lin][col] = 0;
            } else {
                mat[lin][col] = 255;
            }
        }
    }
    return mat;
};

console.log(blackAndWhite([[1, 2, 3, 4, 5]
    , [6, 7, 8, 9, 10]], 5));