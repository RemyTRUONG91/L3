import * as model from './model.js';
import { renderResults } from './view.js';

const inStockCheckbox = document.getElementById('in-stock');
const searchInput = document.getElementById('recherche');

function traitementProduits(products) {
    console.log('Model: fetchProducts resolved', products);
    
    const inStockOnly = inStockCheckbox.checked;
    const searchTerm = searchInput.value;
    console.log('Controller: inStockOnly', inStockOnly);
    console.log('Controller: searchTerm', searchTerm);

    const filteredProducts = model.filterProducts(products, inStockOnly, searchTerm);
    console.log('Model: filterProducts result', filteredProducts);
    
    const categories = model.groupByCategory(filteredProducts);
    console.log('Model: groupByCategory result', categories);

    renderResults(categories);
    console.log('View: renderResults called');
}
function refreshProducts() {//S'occupe de gérer les résultats de manière asynchrone
    
    model.fetchProducts().then(traitementProduits).catch(error => {
    //Si le modèle arrive à récupérer les produits,la fonction traitementProduits est appelée pour charger les données dans la vue
        console.error('Error fetching products:', error);
    });
}

// Event listeners
inStockCheckbox.addEventListener('change', refreshProducts);
searchInput.addEventListener('input', refreshProducts);

refreshProducts();