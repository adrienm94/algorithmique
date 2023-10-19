function discountCard(age, sexe) {
    if ((sexe = 'M' && age >= 65) ||  (sexe = 'F' && age >= 60)){
        console.log("Vous avez droit à la carte vermeil.");
    } else {
        console.log("Vous n'avez pas droit à la carte vermeil.");
    }
}