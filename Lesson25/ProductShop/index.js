document.addEventListener('DOMContentLoaded', () => {

    const categoriesWrapper = document.getElementById('categories-wrapper');
    const productCardsWrapper = document.getElementById('product-cards-wrapper');
    const searchBtn = document.getElementById('imgBtn');
    const searchInput = document.getElementById('input-form-search')
    const addProductForm = document.getElementById('add-product-form');


    let currentValue = 1;
    let categories = [];
    let products = [];

    function getAllCategories() {
        return fetch('https://dummyjson.com/products/category-list')
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
            <div class="btnDivProductShowMore">
                <button id="${product.id}" type="button">Show more...</button>
            </div>
        </div>`;
        });

        addShowMoreEventListeners();
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

    function showProductDetails(product) {
        productCardsWrapper.innerHTML = '';
        productCardsWrapper.innerHTML = `
        <div class="divProductDetailsForm">
        <div class="images-wrapper">
            
            <div class="carousel-content">
                    ${product.images.map(image => `
                        <img class="productThumbnail" src="${image}" alt="${product.title}" >
                    `).join('')}
            </div>
            <div class="main-image">
                <img class="productImg" src="${product.thumbnail}" alt="${product.title}" >
            </div>
        </div>
            <div class="productCardWrapper">
                <div class="productCard" id="${product.id}">
                    <div id="productBrand">${product.brand}</div>
                    <div id="productTitle">${product.title}</div>
                    <div id="productDesc">${product.description}</div>
                    <div id="productPrice">${product.price} €</div>
                </div>
                <div id="divAddProductToBag">
                    <div>
                        <input id="inputQuantityAddToBag" type="text" name="inputQuantity" value="1">
                        <button id="increaseQuantityBtn" type="button">+</button>
                    </div>
                    <div>
                        <button id="btnAddToBag" type="submit">Add to bag</button>
                    </div>
                </div>
            </div>
        </div>
        `;

        addQuantityBtnEventListener();

        // Event Listener für Klicks auf die Miniaturbilder hinzufügen
        const thumbnailImages = document.querySelectorAll('.productThumbnail');
        thumbnailImages.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                const mainImage = document.querySelector('.main-image img');
                mainImage.src = thumbnail.src;
                mainImage.alt = thumbnail.alt;
            });
        });
    }

    function addQuantityBtnEventListener() {
        const quantityInput = document.getElementById('inputQuantityAddToBag');
        const increaseQuantityBtn = document.getElementById('increaseQuantityBtn');
        // Event Listener für den Button hinzufügen
        increaseQuantityBtn.addEventListener('click', () => {
            // Den aktuellen Wert des Textfelds abrufen, um eins erhöhen und aktualisieren
            currentValue = parseInt(quantityInput.value); // Wert aktualisieren
            currentValue++; // Inkrementieren
            quantityInput.value = currentValue; // Wert im Eingabefeld aktualisieren
        });
    }

    // Event Listener für "Show more..." Buttons hinzufügen
    function addShowMoreEventListeners() {
        const showMoreButtons = document.querySelectorAll('.btnDivProductShowMore button');
        showMoreButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.id; // Get the product ID from the button's ID
                const product = products.find(prod => prod.id == productId);
                if (product) {
                    showProductDetails(product);
                } else {
                    console.error('Product not found for ID:', productId);
                }
            });
        });
    }



    start();
    searchBtnSubscribeEvent();
});


