//Task 01:
console.log('--------- Task 01 ---------');

const lines = ['-----------------------------------', 'I count to 5:', 'one', 'two', 'three', 'four', '...', 'Off to the weekend! Enjoy your books :-)'];

const createLines = (arrayString) => {
    for (let i = 0; i < arrayString.length; i++) {
        const div = document.createElement('div');
        div.innerText = arrayString[i];
        document.body.appendChild(div);
    }
}
console.log(createLines(lines));

//Task 02:
console.log('--------- Task 02 ---------');

const colourText = () => {
    document.getElementById('question-id').classList.add('colourText');
}

//Task 03:
console.log('--------- Task 03 ---------');

const authors = ['Anne Freytag', 'Barbi Marković', 'Marc Raabe'];
const titles = ['Lügen, die wir uns erzählen', 'Minihorror', 'Die Dämmerung'];
const imagePaths = ['./img/Freytag.png', './img/Markovic.png', './img/Raabe.png'];

let currentBookIndex = 0;

const addCard = () => {

    if (currentBookIndex < authors.length) {

        const productCard = document.createElement('div');
        const divHeader = document.createElement('div');
        const divText = document.createElement('div');
        const divImage = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const image = document.createElement('img');

        h3.innerText = authors[currentBookIndex];
        p.innerText = titles[currentBookIndex];
        image.src = imagePaths[currentBookIndex];

        divHeader.appendChild(h3);
        divText.appendChild(p);
        divImage.appendChild(image);

        productCard.appendChild(divHeader);
        productCard.appendChild(divText);
        productCard.appendChild(divImage);

        productCard.classList.add('productCard');

        const productCardContainer = document.getElementById('productCardContainer-id');
        productCardContainer.classList.add('productCardContainer');

        document.getElementById('productCardContainer-id').appendChild(productCard);

        currentBookIndex++;
    }
}


