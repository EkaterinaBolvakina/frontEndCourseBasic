// BOOLEAN
let isLoading: boolean;
isLoading = true;
isLoading = false;

// NUMBER
// isLoading = 42; Typisierung Fehler

let num: number | string = 42; // disjunktion, logisches ODER
num = 'hello';

const str = 'hello world!';
//str = 'hello';
console.log(str);

// ARRAY
let primes1 = [2, 3, 5, 7];
const primes2 = [11, 13, 17, 19];

primes2.push(123); // [11, 13, 17, 19, 123]
primes2.forEach((e, i) => console.log(e));

// FUNCTION
const sum = (a: number, b: number): number => a + b;
console.log(sum(10, 5));

// ARRAY
let primes3: (number | string) [] = [2, 3, 5, 7, 'qwerty'];
let primes4: number [] | string [] = [2, 3, 5, 7];
const primes5: number [] = [2, 3, 5, 7];
primes5.forEach((e: number, i: number): void => console.log(e));
let primes6: number [] | string [] | {age: number} [] = [{age: 20}, {age: 15}, {age: 3}];
let primes7: (number | string | {age: number}) [] = [{age: 20}, 12, '34'];


if (typeof(primes7[0]) == "object") {
    primes7[0].age = 17;
}