export async function fetchProducts() {
    try {
        const response = await fetch('produits.txt');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; // Rejette la promesse pour que l'appelant puisse gérer l'erreur
    }
}
export function filterProducts(products, inStockOnly, searchTerm) {
    let filteredProducts = products;

    if (inStockOnly) {
        filteredProducts = filteredProducts.filter(product => product.stocked);
    }

    filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return filteredProducts;
}

export function groupByCategory(products) {
    const categories = {};

    products.forEach(product => {
        if (!categories[product.category]) {
            categories[product.category] = [];
        }
        categories[product.category].push(product);
    });

    return categories;
}