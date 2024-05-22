// BOOLEAN
var isLoading;
isLoading = true;
isLoading = false;
// NUMBER
// isLoading = 42; Typisierung Fehler
var num = 42; // disjunktion, logisches ODER
num = 'hello';
var str = 'hello world!';
//str = 'hello';
console.log(str);
// ARRAY
var primes1 = [2, 3, 5, 7];
var primes2 = [11, 13, 17, 19];
primes2.push(123); // [11, 13, 17, 19, 123]
primes2.forEach(function (e, i) { return console.log(e); });
// FUNCTION
var sum = function (a, b) { return a + b; };
console.log(sum(10, 5));
// ARRAY
var primes3 = [2, 3, 5, 7, 'qwerty'];
var primes4 = [2, 3, 5, 7];
var primes5 = [2, 3, 5, 7];
primes5.forEach(function (e, i) { return console.log(e); });
