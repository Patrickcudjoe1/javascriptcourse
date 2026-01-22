  /*  * JavaScript Assignment: Data Types (Beginner)* Topic: JavaScript Data Types*/

// 1. What is a data type in JavaScript?
//    Answer: A data type is a classification that determines what kind of value 
//    a variable can hold and what operations can be performed on it.

// 2. List six (6) primitive data types in JavaScript:
//    Answer: 
//    1. String
//    2. Number
//    3. Boolean
//    4. Undefined
//    5. Null
//    6. Symbol

// 3. What is the difference between null and undefined?
//    Answer: 
//    - undefined: A variable that has been declared but not assigned a value
//    - null: An intentional absence of value, explicitly assigned by the programmer.



// 4. What does the typeof operator do?
//    Answer: The typeof operator returns a string indicating the type of a value or variable.

// 5. What is a Symbol in JavaScript?
//    Answer: A Symbol is a unique and immutable primitive data type used to create 
//    unique identifiers. Each Symbol is guaranteed to be unique, even if created with 
//    the same description.
// `);



// Write the data type of each value below
console.log('"JavaScript"', typeof "JavaScript");
console.log("100", typeof 100);
console.log("false", typeof false);
console.log("undefined", typeof undefined);
console.log("null", typeof null);
console.log('{ name: "Ama", age: 20 }', typeof { name: "Ama", age: 20 });
console.log("[1, 2, 3]", typeof [1, 2, 3]);
console.log("10n", typeof 10n);
console.log('Symbol("id")', typeof Symbol("id"));


// Declare variables with different data types
let str = "Hello";
let num = 42;
let bool = true;
let undef = undefined;
let nul = null;
let obj = { key: "value" };
let arr = [1, 2, 3];
let sym = Symbol("test");
let bigInt = 123n;



// Comparing data types

let x = 5;
let y = "5";

console.log("x =", x, typeof x);
console.log("y =", y, typeof y);
//  No, x is a Number (5), y is a String ('5')



// Working with Symbol
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log("id1 === id2:", id1 === id2);
//  No, id1 and id2 are not equal because each Symbol() call creates a unique Symbol, even with the same description.




// 1. JavaScript is a strongly typed language.
//    Answer: False
//    Explanation: JavaScript is a dynamically typed language, not strongly typed.

// 2. typeof null returns "object".
//    Answer: True
//    Explanation: This is a known bug in JavaScript. null is a primitive data type, 
//   

// 3. Arrays are objects in JavaScript.
//    Answer: True
//    Explanation: Arrays are a special type of object in JavaScript.

// 4. Two Symbols with the same description are equal.
//    Answer: False
//    Explanation: Each Symbol is unique, even if created with the same description.

// 5. BigInt is used for very large numbers.
//    Answer: True
//    Explanation: BigInt is used to represent integers larger than the safe integer limit.


// Write a program that stores name, age, and Symbol ID
let name = "Edward";
let age = 25;
let symbol = Symbol("id");

// Print a sentence
console.log(`My name is ${name}, I am ${age} years old, and my ID is unique`);


