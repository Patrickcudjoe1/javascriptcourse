// Question 1 – OR (||) Operator
let username = ""; 
let displayName = username || "Guest";
console.log( displayName);

// Question 2 – Nullish Coalescing (??)
let age = 0;
let defaultAge = age ?? 18;
console.log( defaultAge);

// Question 3 – AND (&&) Operator
let isLoggedIn = true;
isLoggedIn && console.log( "Welcome back");

// Question 4 – Ternary Operator
let score = 45;
let result = score >= 50 ? "Pass" : "Fail";
console.log( result);

// Question 5 – NOT (!) Operator
let hasPassword = false;
let noPassword = !hasPassword;
console.log( "User does not have password?", noPassword);

// Question 6 – Double NOT (!!)
let email = "";
let hasEmail = !!email;
console.log( "Email as boolean:", hasEmail);

// Question 7 – Plus (+) Operator
let price = "150";
let totalPrice = +price + 50;
console.log( totalPrice);

// Question 8 – Equality Operators
let numValue = 10;
let strValue = "10";
let looseEqual = numValue == strValue;
let strictEqual = numValue === strValue;
console.log( looseEqual);
console.log( strictEqual);

// Question 9 – typeof Operator
let numType = 123;
let strType = "Hello";
let boolType = true;
let undefType;
console.log( typeof numType);
console.log( typeof strType);
console.log( typeof boolType);
console.log( typeof undefType);

// Question 10 – Short-Circuit Execution
let token = "abc123";
token && console.log( "Access Granted");

// Bonus Question
let balance = 100;
console.log( balance > 0 && "You can withdraw");

