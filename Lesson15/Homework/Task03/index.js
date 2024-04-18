const products = [
    { group: 'Laptop', name: 'Dell Inspiron 15', price: 799.99, manufacturer: 'Dell' },
    { group: 'Smartphone', name: 'iPhone 12', price: 999.00, manufacturer: 'Apple' },
    { group: 'Television', name: 'Samsung QLED 4K TV', price: 1499.99, manufacturer: 'Samsung' },
    { group: 'Watch', name: 'Rolex Submariner', price: 8000.00, manufacturer: 'Rolex' },
    { group: 'Headphones', name: 'Sony WH-1000XM4', price: 349.99, manufacturer: 'Sony' },
    { group: 'Car', name: 'Toyota Camry', price: 26000.00, manufacturer: 'Toyota' },
    { group: 'Camera', name: 'Canon EOS Rebel T7i', price: 749.00, manufacturer: 'Canon' },
    { group: 'Sneakers', name: 'Nike Air Max 270', price: 150.00, manufacturer: 'Nike' },
    { group: 'Refrigerator', name: 'LG French Door Refrigerator', price: 1999.99, manufacturer: 'LG' },
    { group: 'Blender', name: 'Vitamix 5200', price: 449.95, manufacturer: 'Vitamix' }
];

createProducts(products);
function createProducts(productsObject) {
    const container = document.querySelector('.products-container');

    productsObject.forEach(product => {
        const divProduct = document.createElement('div');

        divProduct.innerHTML = `
        <div class="product-group">${product.group}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-price">${product.price} EUR</div>
        <div >______________________</div>
        <div >Details:</div>
        <div >Manufacturer: ${product.manufacturer}</div>
        `;
        container.appendChild(divProduct);
        divProduct.classList.add('divProduct');
    });
};

const filterProducts = (productsObject) => {
    const btnFilter = document.getElementById('btnForPriceFilterId');
    btnFilter.addEventListener('click', () => {
        const inputPriceFrom = parseFloat(document.getElementById('inputForPriceFilterFromId').value);
        const inputPriceUpTo = parseFloat(document.getElementById('inputForPriceFilterUpToId').value);

        let filteredProducts = productsObject;

        if (!isNaN(inputPriceFrom)) {
            filteredProducts = filteredProducts.filter(item => item.price >= inputPriceFrom);
        }

        if (!isNaN(inputPriceUpTo)) {
            filteredProducts = filteredProducts.filter(item => item.price <= inputPriceUpTo);
        }

        document.querySelector('.products-container').innerHTML = '';
        createProducts(filteredProducts);
    });
};

filterProducts(products);

const resetPriceFilter = () => {
    const btnResetPriceFilter = document.getElementById('btnForPriceFilterResetId');
    btnResetPriceFilter.addEventListener('click', () => {

        document.querySelector('.products-container').innerHTML = '';
        createProducts(products);

        document.getElementById('inputForPriceFilterFromId').value = '';
        document.getElementById('inputForPriceFilterUpToId').value = '';
    });
};

resetPriceFilter();