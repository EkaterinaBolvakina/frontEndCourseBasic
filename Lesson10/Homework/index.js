//Task 01:
console.log('--------- Task 01 ---------');

function getBiggestNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

//Variant 1:
const n1 = 109;
const n2 = 3;
const resultBiggestNumber1 = getBiggestNumber(n1, n2);
console.log(`The biggest number of ${n1} and ${n2}: `, resultBiggestNumber1);

//Variant 2:
const resultBiggestNumber2 = getBiggestNumber(45, 123);
console.log(`The biggest number of 45 and 123: `, resultBiggestNumber2);

//Task 02:
console.log('--------- Task 02 ---------');

function getFirstNelementsFromLine(textForSubstring, numForSubstring) {
    const cuttedText = textForSubstring.substring(0, numForSubstring);
    return cuttedText;
}

const line1 = `Selbst wenn Sie sich für ein günstiges E-Bike entscheiden sollten, 
ist es oft ganz nützlich, zu wissen, worauf Sie beim Kauf achten sollten. 
In unserer CHIP-Kaufberatung zum Thema E-Bike stellen wir Ihnen 
die besten E-Bike Allrounder der Stiftung Warentest vor und geben Tipps für den Kauf.`

const line2 = 'Es gibt keine funktionelle Rechtfertigung für die Herstellung eines Autos,' +
    'das grundsätzlich weniger stabil ist als ein Vierrad, so dass ein dreigleisiger Ansatz heutzutage ein Novum ist. '

const num1 = 5;
const num2 = 100;

const cuttedText1FirstSymbols5 = getFirstNelementsFromLine(line1, num1);
const cuttedText1FirstSymbols100 = getFirstNelementsFromLine(line1, num2);
const cuttedText2FirstSymbols5 = getFirstNelementsFromLine(line2, num1);

console.log('Text with first symbols (5): ', cuttedText1FirstSymbols5);
console.log('Text with first symbols (100): ', cuttedText1FirstSymbols100);
console.log('Text with first symbols (5): ', cuttedText2FirstSymbols5);

//Task 03:
console.log('--------- Task 03 ---------');

function isElementInArray(array, element) {
    let isContain = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return isContain = true;
        }
    } return isContain;
}

const fruits = ['Apple', 'Banana', 'Orange'];

const kiwi = 'Kiwi';
const isKiwiInFruits = isElementInArray(fruits, kiwi);
console.log(`Fruits contain kiwi: ${isKiwiInFruits}`);

const orange = 'Orange';
const isOrangeInFruits = isElementInArray(fruits, 'Orange');
console.log('Fruits contain orage: ' + isOrangeInFruits);

const numbers = [1, 2, 3, 4, 5];
const isNumberInArray = isElementInArray(numbers, 10);
console.log(`Numbers contain 10: ${isNumberInArray}`);

//Task 04*:
console.log('--------- Task 04* ---------');

function bubbleSortAscending(arrayToSort) {  // using WHILE
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < arrayToSort.length - 1; i++) {
            if (arrayToSort[i] > arrayToSort[i + 1]) {     // sign '>' here for ASCENDING 
                const temp = arrayToSort[i];
                arrayToSort[i] = arrayToSort[i + 1];
                arrayToSort[i + 1] = temp;
                swapped = true;
            }
        }
    }
    return arrayToSort;
}

function bubbleSortDescending(arrayToSort) {  // using DO-WHILE
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arrayToSort.length - 1; i++) {
            if (arrayToSort[i] < arrayToSort[i + 1]) {     // sign '<' here for DESCENDING 
                const temp = arrayToSort[i];
                arrayToSort[i] = arrayToSort[i + 1];
                arrayToSort[i + 1] = temp;
                swapped = true;
            }
        }

    } while (swapped);
    return arrayToSort;
}

const arrayToSort = [24, 100, 3, 56, 23, 1];
console.log('Numbers before sorting: ', arrayToSort);
console.log('Numbers after sorting ascending: ', bubbleSortAscending(arrayToSort));
console.log('Numbers after sorting descending: ', bubbleSortDescending(arrayToSort));





