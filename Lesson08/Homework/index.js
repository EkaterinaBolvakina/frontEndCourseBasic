//Task 02:
console.log('--------- Task 02 ---------');

let number = 5;
let line = 'I love Java';
let hungry = true;
let notHungry = false;

console.log('Number: ' + number);
console.log('Line: ' + line);
console.log('Are you hungry?: ' + hungry);

console.log('With IF-ELSE: - Are you hungry?');

if (hungry === true) {
    console.log(' - Yes, I am.');
} else if (hungry === false) {
    console.log(" - No, I'm not.");
} else {
    console.log('Error...');
}

console.log('With SWITCH-CASE: - Are you hungry?');

switch (notHungry) {
    case true:
        console.log(' - Yes, I am.');
        break;

    case false:
        console.log(" - No, I'm not.");
        break;

    default: console.log('Error...');
        break;
}


//Task 03:
console.log('--------- Task 03 ---------');

let nameWoman = 'Kate';
let secondName = nameWoman;

console.log('First name:' + nameWoman);
console.log('Second name:' + secondName);

nameWoman = 'Sarah';
console.log('After changing value of variable nameWoman:');
console.log('First name:' + nameWoman);
console.log('Second name:' + secondName);

secondName = nameWoman;
console.log('After changing value of variable secondName:');
console.log('First name:' + nameWoman);
console.log('Second name:' + secondName);


//Optional Task 01:
console.log('--------- Optional Task 01 ---------');

let numbers = [2, 5, 8, 9, 22]
console.log('Array: ' + numbers);

console.log('Variante 1 using FOR EACH - Elements of array:');
numbers.forEach(number => { console.log(number); })

console.log('Variante 2 using FOR - Elements of array:');
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


//Optional Task 02:
console.log('--------- Optional Task 02 ---------');

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];

console.log('Elements of array: [' + numbers1 + '] in reverse direction:');
for (let i = numbers1.length - 1; i >= 0; i--) {
    console.log(numbers1[i]);
}

let reversedNumber1 = [];
for (let i = numbers1.length - 1; i >= 0; i--) {
    reversedNumber1.push(numbers1[i]);
}
console.log('Array in reverse direction: [' + reversedNumber1 + '] ');








