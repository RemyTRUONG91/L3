export function calculMensualite(montant, tauxMensuel, mois) {
    let remboursementMensuel;
    if (tauxMensuel) {
        remboursementMensuel = montant * tauxMensuel / (1 - (Math.pow(1 / (1 + tauxMensuel), mois)));
    } else {
        remboursementMensuel = montant / mois;
    }
    return remboursementMensuel;
}

export function calculAmortissement(montant, tauxMensuel, mois, annee) {
    let remboursementMensuel = calculMensualite(montant, tauxMensuel, mois);
    let balance = montant;
    let amortissementY = [];
    let amortissementM = [];
    for (let y = 0; y < annee; y++) {
        let interestY = 0;
        let montantY = 0;
        for (let m = 0; m < 12; m++) {
            let interestM = balance * tauxMensuel;
            let montantM = remboursementMensuel - interestM;
            interestY += interestM;
            montantY += montantM;
            balance -= montantM;
            amortissementM.push({remboursementMensuel, capitalAmorti: montantM, interet: interestM, capitalRestantDu: balance});
        }
        amortissementY.push({remboursementMensuel, capitalAmorti: montantY, interet: interestY, capitalRestantDu: balance});
    }
    return {remboursementMensuel, amortissementY, amortissementM};
}