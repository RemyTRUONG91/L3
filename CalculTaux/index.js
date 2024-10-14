// index.js
import { calculAmortissement } from './calculs.js';
import { ajouterEcouteurs, remplirTableau } from './dom.js';

/**
 * Récupère les valeurs des inputs du DOM.
 * @returns {Object} Les valeurs des inputs.
 * @throws {Error} Si une valeur d'input est invalide.
 */
function getValues() {
  const {
    inputMontant,
    inputTaux,
    inputAnnee
  } = window;

  // Vérification de l'existence des inputs
  if (!inputMontant || !inputTaux || !inputAnnee) {
    throw new Error("Les éléments d'input ne sont pas trouvés dans le DOM.");
  }

  // Récupération et traitement des valeurs des inputs
  let montant = Math.abs(inputMontant.valueAsNumber);
  let annee = Math.abs(inputAnnee.valueAsNumber);
  let taux = Math.abs(inputTaux.valueAsNumber);

  // Vérification des valeurs des inputs
  if (isNaN(montant) || montant <= 0) {
    throw new Error("Le montant doit être un nombre positif.");
  }
  if (isNaN(annee) || annee <= 0) {
    throw new Error("L'année doit être un nombre positif.");
  }
  if (isNaN(taux) || taux <= 0) {
    throw new Error("Le taux doit être un nombre positif.");
  }

  let mois = annee * 12;
  let tauxMensuel = taux / 100 / 12;

  return {
    montant,
    annee,
    mois,
    taux,
    tauxMensuel
  };
}

/**
 * Gère les changements des inputs et met à jour le tableau d'amortissement.
 */
function handleInputChange() {
  try {
    const { montant, tauxMensuel, mois, annee } = getValues();
    const { amortissementM } = calculAmortissement(montant, tauxMensuel, mois, annee);
    remplirTableau(amortissementM);
  } catch (error) {
    console.error("Erreur lors du calcul de l'amortissement : ", error);
    alert(error.message); // Affiche un message d'erreur à l'utilisateur
  }
}

// Initialisation de l'application
ajouterEcouteurs(handleInputChange);