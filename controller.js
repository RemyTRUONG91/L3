import * as model from './model.js';
import { renderResults } from './view.js';

const inStockCheckbox = document.getElementById('in-stock');
const searchInput = document.getElementById('recherche');

export async function updateResults() {
    console.log('Controller: updateResults called');
    
    const products = await model.fetchProducts();
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

// Event listeners
inStockCheckbox.addEventListener('change', updateResults);
searchInput.addEventListener('input', updateResults);
updateResults();