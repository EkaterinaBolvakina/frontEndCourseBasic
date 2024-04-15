const createTitleBlock = () => {
    const titleContainer = document.createElement('div');
    const title = document.createElement('h2');
    title.innerText = 'quadratic equation calculator'
    titleContainer.appendChild(title);
    document.body.appendChild(titleContainer);
}
createTitleBlock();

const createFormulaBlock = () => {
    const formulaContainer = document.createElement('div');
    const formula = document.createElement('h3');
    formula.innerText = 'ax² + bx + c = 0';
    formulaContainer.appendChild(formula);
    document.body.appendChild(formulaContainer);
}
createFormulaBlock();

const createForm = () => {
    const container = document.createElement('div');
    const form = document.createElement('form');

    const labelA = document.createElement('label');
    labelA.textContent = ' a = ';
    const inputA = document.createElement('input');
    inputA.type = 'text';
    inputA.placeholder = 'Enter coefficient a';
    labelA.appendChild(inputA);

    const labelB = document.createElement('label');
    labelB.textContent = ' b = ';
    const inputB = document.createElement('input');
    inputB.type = 'text';
    inputB.placeholder = 'Enter coefficient b';
    labelB.appendChild(inputB);

    const labelC = document.createElement('label');
    labelC.textContent = ' c = ';
    const inputC = document.createElement('input');
    inputC.type = 'text';
    inputC.placeholder = 'Enter coefficient c';
    labelC.appendChild(inputC);

    const formula = document.createElement('p');
    formula.innerText = '';

    const updateFormula = () => {
        formula.innerText = `${inputA.value}x² + ${inputB.value}x + ${inputC.value} = 0`;
    }

    inputA.addEventListener('input', updateFormula);
    inputB.addEventListener('input', updateFormula);
    inputC.addEventListener('input', updateFormula);

    // Button zum Berechnen
    const calculateButton = document.createElement('input');
    calculateButton.type = 'button';
    calculateButton.value = 'Calculate';

    calculateButton.addEventListener('click', () => {
        const resultParagraph = document.createElement('h3');

        const a = parseFloat(inputA.value);
        const b = parseFloat(inputB.value);
        const c = parseFloat(inputC.value);

        const result = calculateQuadratic(a, b, c);
        resultParagraph.innerText = result;
        container.appendChild(resultParagraph);
    });

    form.appendChild(labelA);
    form.appendChild(labelB);
    form.appendChild(labelC);
    form.appendChild(formula);
    form.appendChild(calculateButton);

    container.appendChild(form);
    document.body.appendChild(container);
}
createForm();

// Funktion zum Berechnen
function calculateQuadratic(a, b, c) {
    const discriminant = b ** 2 - 4 * a * c;

    if (discriminant < 0) {
        return 'Solution: discriminant < 0  ==>  No real roots';
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        return 'Solution: discriminant = 0  ==>  One real root: x = ' + x;
    } else {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return 'Solution: discriminant = '+ discriminant +'; (discriminant > 0)  ==>  Two real roots: x1 = ' + x1 + '; x2 = ' + x2;
    }
}