const categoriesWrapper = document.getElementById('categories-wrapper');
const productCardsWrapper = document.getElementById('product-cards-wrapper');
const searchBtn = document.getElementById('imgBtn');
const searchInput = document.getElementById('input-form-search')
let categories = [];
let products = [];

function getAllCategories() {
    return fetch('https://dummyjson.com/products/categories')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            categories = data;
            return categories;
        })
        .catch(error => {
            console.log(error.message);
            return [];
        });
}

function displayAllCategories(categories) {
    categories.forEach(category =>
        categoriesWrapper.innerHTML += `
        <div class="categoryDiv" id="${category}">${category}</div>
        `
    )
}

function getAllProducts() {
    return fetch('https://dummyjson.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            products = data.products;
            return products;
        })
        .catch(error => {
            console.log(error.message);
            return [];
        });
}

function displayProducts(products) {
    productCardsWrapper.innerHTML = '';
    products.forEach(product => {
        productCardsWrapper.innerHTML += `
        <div class="productCard" id="${product.id}">
            <div id="productBrand">${product.brand}</div>
            <div id="productTitle">${product.title}</div>
            <img class="productImg" src="${product.thumbnail}" alt="${product.title}" > 
            <div id="productPrice">${product.price} €</div>
            <div id="productDesc">${product.description}</div>
        </div>`;
    });
}

function getProductsByCategory(category) {
    return fetch(`https://dummyjson.com/products/category/${category}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            products = data.products;
            return products;
        })
        .catch(error => {
            console.log(error.message);
            return [];
        });
}

function categoryDivSubscribeEvent(categories) {
    categories.forEach(category =>

        document.getElementById(`${category}`).addEventListener('click', async () => {
            showSpinner();
            try {
                products = await getProductsByCategory(category);
                displayProducts(products)
            } catch (error) {
                console.error('Error loading data:', error);
                contentBlock.textContent = 'Error loading data.';
            } finally {
                hideSpinner();
            }
        })
    )
}

function allProductsDivSubscribeEvent(products) {
    document.getElementById("allProducts").addEventListener('click', async () => {
        showSpinner();
        try {
            displayProducts(products);

        } catch (error) {
            console.error('Error loading data:', error);
            contentBlock.textContent = 'Error loading data.';
        } finally {
            hideSpinner();
        }
    })
}

function showSpinner() {
    spinner.style.display = 'block';
}

function hideSpinner() {
    spinner.style.display = 'none';
}

const start = async () => {
    showSpinner();
    try {
        categories = await getAllCategories();
        displayAllCategories(categories)
        products = await getAllProducts();
        displayProducts(products);
        categoryDivSubscribeEvent(categories);
        allProductsDivSubscribeEvent(products);

    } catch (error) {
        console.error('Error loading data:', error);
        contentBlock.textContent = 'Error loading data.';
    } finally {
        hideSpinner();
    }
}

async function searchProducts(query) {
    showSpinner();
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        products = data.products;
        displayProducts(products);
    } catch (error) {
        console.error('Error searching products:', error);
        contentBlock.textContent = 'Error searching products.';
    } finally {
        hideSpinner();
    }
}

function searchBtnSubscribeEvent() {
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query !== '') {
            searchProducts(query);
        } else {
            alert("Please enter a product.")
        }
    });
}



start();
searchBtnSubscribeEvent();


