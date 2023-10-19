// Merge two ordered arrays

import { isOrdered } from "./isOrdered";

const fusion = (tab1, tab2) => {
    try {
        const unOrderedTab = Error("L'un ou les deux tableaux sont non triés.");
        if (!isOrdered(tab1) || !isOrdered(tab2)) {
            throw unOrderedTab;
        }
        console.log("tableaux triés");
        let i1 = 0;
        let i2 = 0;
        let tab3 = [];
        for (let i3 = 0; i3 < n + m; i3 = i3 + 1) {
            if (i1 < n && i2 < m) {
                if (tab1[i1] < tab2[i2]) {
                    tab3[i3] = tab1[i1];
                    i1++;
                } else {
                    tab3[i3] = tab2[i2];
                    i2++;
                }
            } else if (i1 < n) {
                tab3[i3] = tab1[i1];
                i1++;
            } else {
                tab3[i3] = tab2[i2];
                i2++;
            }
        }
        return tab3;
    }

    catch (error) {
        console.log(error);
    }

};

fusion([0.2, 1., 2.4, 2.47, 10.], [2.46, 3.4, 11.])