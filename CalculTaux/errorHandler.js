// errorHandler.js
export function validateInputs({ montant, annee, taux }) {
  if (isNaN(montant) || montant <= 0) {
    throw new Error("Le montant doit être un nombre positif.");
  }
  if (isNaN(annee) || annee <= 0) {
    throw new Error("L'année doit être un nombre positif.");
  }
  if (isNaN(taux) || taux <= 0) {
    throw new Error("Le taux doit être un nombre positif.");
  }
}
