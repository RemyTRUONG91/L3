
/**
 * Génère une ligne de tableau HTML pour une période donnée.
 * @param {number} index - L'index de la période.
 * @param {number} capitalAmorti - Le capital amorti pour la période.
 * @param {number} interet - Les intérêts pour la période.
 * @param {number} capitalRestantDu - Le capital restant dû pour la période.
 * @param {number} remboursementMensuel - Le remboursement mensuel pour la période.
 * @returns {string} La ligne de tableau HTML.
 */
export function genererLigneTableau(index, capitalAmorti, interet, capitalRestantDu, remboursementMensuel) {
    const classe = Math.round(capitalAmorti) < Math.round(interet) ? "warning" : "";
    return `
      <tr class="${classe}">
        <td>${index + 1}</td>
        <td>${Math.round(capitalAmorti)}</td>
        <td>${Math.round(interet)}</td>
        <td>${Math.round(capitalRestantDu)}</td>
        <td>${Math.round(remboursementMensuel)}</td>
      </tr>
    `;
  }
  
  /**
   * Remplit le tableau HTML avec les données d'amortissement.
   * @param {Array} amortissement - Les données d'amortissement.
   */
  export function remplirTableau(amortissement) {
    let html = `<thead>
      <tr>
        <th>Période</th>
        <th>Capital Amorti</th>
        <th>Intérêts</th>
        <th>Capital restant dû</th>
        <th>Mensualité</th>
      </tr>
    </thead>`;
    
    // Utilisation de la fonction genererLigneTableau pour chaque période
    amortissement.forEach(({ remboursementMensuel, capitalAmorti, interet, capitalRestantDu }, index) => {
      html += genererLigneTableau(index, capitalAmorti, interet, capitalRestantDu, remboursementMensuel);
    });
    
    // Mise à jour du contenu du tableau dans le DOM
    document.getElementById("inputMensualite").innerHTML = html;
  }
  
  /**
   * Ajoute des écouteurs d'événements aux inputs pour recalculer et afficher les résultats.
   * @param {Function} handleInputChange - La fonction à appeler lors d'un changement d'input.
   */
  export function ajouterEcouteurs(handleInputChange) {
    const inputs = document.querySelectorAll('input');
    
    // Ajout d'un écouteur d'événement "input" à chaque input
    inputs.forEach(input => {
      input.addEventListener("input", handleInputChange, false);
    });
  }