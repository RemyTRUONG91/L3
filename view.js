export function renderResults(categories) {
    const resultsContainer = document.getElementById('categoriesRes');
    resultsContainer.innerHTML = ''; // Enlève les résultats précédents

    for (const category in categories) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        categoryDiv.appendChild(categoryTitle);

        const table = document.createElement('table');

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const nameHeader = document.createElement('th');
        nameHeader.textContent = 'Name';
        const priceHeader = document.createElement('th');
        priceHeader.textContent = 'Price';
        headerRow.appendChild(nameHeader);
        headerRow.appendChild(priceHeader);
        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');

        categories[category].forEach(product => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            nameCell.textContent = product.name;
            const priceCell = document.createElement('td');
            priceCell.textContent = product.price;
            if (!product.stocked) {
                priceCell.style.color = 'red';
            }
            row.appendChild(nameCell);
            row.appendChild(priceCell);
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        categoryDiv.appendChild(table);
        resultsContainer.appendChild(categoryDiv);
    }
}