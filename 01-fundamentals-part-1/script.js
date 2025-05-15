let js = 'amazing';
console.log(40 + 3 + 28 - 10);

console.log('Ehioje');
console.log(32);

let firstName = 'Ehioje';

console.log(firstName);
let $function = 27;

let person = 'james';
let PI = 3.1451;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

// the two variables myFirstJob and myCurrentJob are more descriptive unlike the variables job1 and job2
let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

// undefined: value taken by a variable that is not yet defined (empty)
let children;
console.log(children)


// Data type
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Ehioje');

// Showing the dynamic nature of javascript
javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

// value and type is undefined
let year;
console.log(typeof year);

year = 1991;
console.log(typeof year);

// legacy bug in javascript
console.log(typeof null);

console.log(typeof undefined);
console.log(typeof Boolean);
console.log(typeof String);
console.log(typeof Number);


// variable mutation
let age = 30;
age = 31;

const birthYear = 1991;

// using var
var job = 'programmer';
job = 'teacher';

// wrong way 
lastName = 'Erabor';
console.log(lastName);

// Maths Operator
const now = 2037;
const ageVictoria = now - 1992;
const ageHenry = now - 1983;
console.log(ageHenry, ageVictoria);

console.log(ageHenry * 2, ageHenry / 10, 2 ** 3);

// showing concatenation 
const first_Name = 'Ehioje';
const last_Name = 'Erabor';
console.log(first_Name + "  " + last_Name);

// showing more operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1
console.log(x);
// is this below valid ?
++x;
console.log(x, "1: here after using a pre-increment");
console.log(x, "2: here after using a pre-increment");

--x;
console.log(x, "1: here after using a pre-decrement");
console.log(x, "2: here after using a pre-decrement");

// Comparison operators
console.log(ageHenry > ageVictoria);
console.log(ageVictoria >= 18);
const isFullAge = ageVictoria >= 18;

console.log(now - 1983 > now - 1992)



