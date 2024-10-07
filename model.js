export async function fetchProducts() {
    const response = await fetch('produits.txt');
    const products = await response.json();
    return products;
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