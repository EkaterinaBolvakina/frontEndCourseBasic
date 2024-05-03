const productBlock = document.getElementById('products-block');
const categoriesBlock = document.getElementById('categories');

let categoryName = ''


const getAllProducts = () => {

    let prodUrl = 'https://dummyjson.com/products';

    if (categoryName && categoryName!== 'All') {
        prodUrl = `https://dummyjson.com/products/category/${categoryName}`;
    }

    return fetch(prodUrl)
        .then(res => res.json());
};



const showProducts = (proudcts = []) => {
    let strProdHtml = '';
    proudcts.forEach(item => {
        const prodItemHtml = `
        <div class="product-item">
            <img class="product-img" src="${item.thumbnail}" alt="img">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div> Price: ${item.price} $</div>
        </div>
        `

        strProdHtml += prodItemHtml
    });

    productBlock.innerHTML = strProdHtml;
};

// -----------------------

// загрузить категории
const getAllCategories = () => {
    return fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())

}

// отобразить категории
const showCategories = (data = []) => {
    let categoriesHtmlStr = `
            <div class="category-item">All</div>            
        `;
    data.forEach(item => {
        const catItemHtmlStr = `
            <div class="category-item">${item}</div>            
        `
        categoriesHtmlStr += catItemHtmlStr;
    });



    categoriesBlock.innerHTML = categoriesHtmlStr;


    const categoriElements = document.getElementsByClassName('category-item');

    for (const item of categoriElements) {
        item.addEventListener('click', (e) => {
            categoryName = e.target.innerText;
            getAllProducts().then(data => showProducts(data.products));
        });
    }



}

getAllCategories()
    .then(data => {
        showCategories(data)
    });



getAllProducts()
    .then(data => {
        showProducts(data.products)
    });