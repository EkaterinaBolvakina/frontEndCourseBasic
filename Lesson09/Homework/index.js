//Task 01:
console.log('--------- Task 01 ---------');

const array = [2, 4, 6, 8, 10];
const arrayDoubled = [];

for (let i = 0; i < array.length; i++) {
    arrayDoubled.push(array[i] * 2);
}

console.log(arrayDoubled);

//Task 02:
console.log('--------- Task 02 ---------');

const numbers = [2, 4, 6, 8, 10];

let lastIndex = numbers.length - 1;

for (let i = 0; i < numbers.length / 2; i++) {
    if (i === 0) {
        let temp = numbers[i];
        numbers[i] = numbers[lastIndex];
        numbers[lastIndex] = temp;
    }
}

console.log(numbers);

//Task 03:
console.log('--------- Task 03 ---------');

const numbersFive = [2, 4, 5, 8, 10];

let found = false;
for (let i = 0; i < numbersFive.length; i++) {
    if (numbersFive[i] === 5) {
        found = true;
        break;
    }
}

if (found) {
    console.log(' 5 is found');
} else {
    console.log(' 5 is NOT found');
}

//Task 04*:
console.log('--------- Task 04* ---------');

const numArray = [10, 15, 20, 25, 30];

let sum = 0;
for (let i=0; i < numArray.length; i++) {
    sum = numArray[i] + sum;
}

let average = sum / numArray.length;
console.log('Average of elements in array: ', average);
