const getCatFactBtn = document.getElementById('getCatFactBtn');
const factContainer = document.getElementById('factContainer');
const url1 = 'https://catfact.ninja/fact';

const getCatFact = async () => {
    try {
        const response = await fetch(url1);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const fact = data.fact;
        displayFact(fact);
    } catch (error) {
        displayError(error.message);
    }
};

function addEventListenerToBtn() {
    getCatFactBtn.addEventListener('click', () => getCatFact());
}

function displayFact(fact) {
    factContainer.innerHTML = `<div id="fact">${fact}</div>`;
    factContainer.style.color = '#333';
}

function displayError(message) {
    factContainer.innerHTML = `<div id="errorMsg">${message}</div>`;
}

addEventListenerToBtn();
