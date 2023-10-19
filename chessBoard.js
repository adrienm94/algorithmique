const chessBoard = (imageSizeInPixelNumber) => {

    if (imageSizeInPixelNumber % 8 == 0 && imageSizeInPixelNumber > 0) {

        // Empty Array creation
        let res = [];
        for (let index = 0; index < imageSizeInPixelNumber; index++) {
            res[index] = [];
        }

        // Pixel counter to manage the two different line patterns
        let countLinePixel = 0;

        for (let lin = 0; lin < imageSizeInPixelNumber; lin = lin + 1) {

            // Fill array with 255 as first element.
            if (countLinePixel < (imageSizeInPixelNumber / 8) && countLinePixel >= 0) {
                for (let col = 0; col < imageSizeInPixelNumber; col = col + ((imageSizeInPixelNumber / 8) * 2)) {
                    res[lin][col] = 255;
                    for (let index1 = 1; index1 < (imageSizeInPixelNumber / 8); index1++) {
                        res[lin][col + index1] = 255;
                    }
                    for (let index2 = imageSizeInPixelNumber / 8; index2 < (imageSizeInPixelNumber / 8) * 2; index2++) {
                        res[lin][col + index2] = 0;
                    }
                }
                countLinePixel++;
            }

            // Fill array with 0 as first element.
            else if (countLinePixel >= (imageSizeInPixelNumber / 8) && countLinePixel < (imageSizeInPixelNumber / 8) * 2) {
                for (let col = 0; col < imageSizeInPixelNumber; col = col + ((imageSizeInPixelNumber / 8) * 2)) {
                    res[lin][col] = 0;
                    for (let index1 = 1; index1 < (imageSizeInPixelNumber / 8); index1++) {
                        res[lin][col + index1] = 0;
                    }
                    for (let index2 = imageSizeInPixelNumber / 8; index2 < (imageSizeInPixelNumber / 8) * 2; index2++) {
                        res[lin][col + index2] = 255;
                    }
                }
                countLinePixel++;
                if (countLinePixel === (imageSizeInPixelNumber / 8) * 2) {
                    countLinePixel = 0;
                }
            }

        }

        return res;
    }


}


console.log(chessBoard(32));
