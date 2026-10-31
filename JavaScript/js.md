# JavaScript Notes

## 1. Introduction to JavaScript

- JavaScript (JS) is a programming language.
- It is mainly used to make websites interactive.
- It runs in browsers and also outside browsers using Node.js.
- File extension: `.js`

```javascript
console.log("Hello World");
```

## 2. Basic Rules of JavaScript

1. JavaScript is case-sensitive.
2. Statements usually end with a semicolon (`;`).
3. Strings can use single quotes, double quotes or backticks.
4. Code blocks are written inside `{ }`.
5. Variable names cannot start with numbers.
6. Use meaningful variable names.
7. Comments are ignored during execution.

```javascript
// Single-line comment

/*
Multi-line
comment
*/

console.log("Hello JS");
```

## 3. Variables

Variables are used to store data.

Three ways to declare variables:

```javascript
let name = "Siddhant";
const age = 18;
var city = "Bilaspur";
```

| Keyword | Meaning |
|---|---|
| `let` | Value can be changed |
| `const` | Value cannot be reassigned |
| `var` | Older way of declaring variables |

Example:

```javascript
let age = 18;
age = 19;

const pi = 3.14;
// pi = 4; // Error
```

**Prefer `const` by default and `let` when the value needs to change. Avoid `var` in modern JS.**

## 4. Data Types

JavaScript has different types of data.

### Primitive Data Types

```javascript
let name = "Siddhant";  // String
let age = 18;           // Number
let price = 99.5;       // Number
let isStudent = true;   // Boolean
let x;                  // Undefined
let y = null;           // Null
let big = 123456789n;   // BigInt
let id = Symbol("id");  // Symbol
```

### Non-Primitive Data Types

```javascript
// Object
let student = {
    name: "Siddhant",
    age: 18
};

// Array
let numbers = [10, 20, 30];

// Function
function greet() {
    console.log("Hello");
}
```

### Check Data Type

Use `typeof`.

```javascript
console.log(typeof "Hello"); // string
console.log(typeof 10);      // number
console.log(typeof true);    // boolean
console.log(typeof undefined); // undefined
```

Note: `typeof null` returns `"object"` because of a historical JavaScript quirk.

## 5. Operators

### Arithmetic Operators

| Operator | Meaning |
|---|---|
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Modulus (remainder) |
| `**` | Power |
| `++` | Increment |
| `--` | Decrement |

```javascript
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000
```

### Assignment Operators

```javascript
let x = 10;

x += 5;  // x = x + 5
x -= 2;  // x = x - 2
x *= 2;  // x = x * 2
x /= 2;  // x = x / 2
x %= 3;  // x = x % 3
```

### Comparison Operators

```javascript
==    // Equal value (type conversion possible)
===   // Equal value and type
!=    // Not equal
!==   // Not equal value or type
>     // Greater than
<     // Less than
>=    // Greater than or equal
<=    // Less than or equal
```

**Prefer `===` and `!==` over `==` and `!=`.**

### Logical Operators

```javascript
&&  // AND
||  // OR
!   // NOT
```

Example:

```javascript
let age = 18;

console.log(age >= 18 && age <= 25); // true
console.log(age < 18 || age > 60);   // false
console.log(!(age >= 18));           // false
```

## 6. Type Conversion

Converting one data type into another.

```javascript
// String to Number
let a = Number("100");

// Number to String
let b = String(100);

// String to Integer
let c = parseInt("25");

// String to Decimal
let d = parseFloat("25.5");

// Convert to Boolean
let e = Boolean(1);

console.log(a, b, c, d, e);
```

## 7. Conditional Statements

Used to execute code based on conditions.

### If Statement

```javascript
let age = 18;

if (age >= 18) {
    console.log("Adult");
}
```

### If-Else Statement

```javascript
let age = 16;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}
```

### Else-If Statement

```javascript
let marks = 75;

if (marks >= 90) {
    console.log("A Grade");
} else if (marks >= 70) {
    console.log("B Grade");
} else if (marks >= 50) {
    console.log("C Grade");
} else {
    console.log("Fail");
}
```

### Switch Statement

Used when checking multiple possible values.

```javascript
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}
```

### Ternary Operator

Short form of if-else.

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

## 8. Loops

Loops are used to repeat code.

### For Loop

Used when the number of repetitions is known.

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### While Loop

Runs while the condition is true.

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

### Do-While Loop

Executes at least once, even if the condition is false.

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

### For...Of Loop

Used to access values of an iterable, such as an array or string.

```javascript
let numbers = [10, 20, 30];

for (let num of numbers) {
    console.log(num);
}
```

### For...In Loop

Used to access object keys.

```javascript
let student = {
    name: "Siddhant",
    age: 18
};

for (let key in student) {
    console.log(key, student[key]);
}
```

### Break and Continue

```javascript
// Break: Stops the loop
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// Continue: Skips current iteration
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
```

## 9. Strings

A string is a sequence of characters.

```javascript
let name = "Siddhant";
```

### String Methods

```javascript
let str = "Hello JavaScript";

str.length;              // Length of string
str.toUpperCase();       // HELLO JAVASCRIPT
str.toLowerCase();       // hello javascript
str.charAt(0);           // H
str.indexOf("Java");     // 6
str.includes("Hello");   // true
str.slice(0, 5);         // Hello
str.replace("Hello", "Hi"); // Hi JavaScript
str.trim();              // Removes spaces from both ends
str.split(" ");          // Converts string into array
```

### Template Literals

Use backticks to insert variables inside strings.

```javascript
let name = "Siddhant";
let age = 18;

console.log(`My name is ${name} and I am ${age} years old.`);
```

## 10. Arrays

An array stores multiple values in one variable.

```javascript
let numbers = [10, 20, 30, 40, 50];
```

### Access Array Elements

```javascript
console.log(numbers[0]); // 10
console.log(numbers[1]); // 20
console.log(numbers.length); // 5
```

Array indexing starts from `0`.

### Update Array Elements

```javascript
numbers[0] = 100;
```

### Common Array Methods

```javascript
let arr = [10, 20, 30];

arr.push(40);       // Add at end
arr.pop();          // Remove from end
arr.unshift(5);     // Add at beginning
arr.shift();        // Remove from beginning
arr.includes(20);   // Check if value exists
arr.indexOf(30);    // Find index
arr.slice(0, 2);    // Extract elements
arr.splice(1, 1);   // Remove elements
arr.join("-");      // Convert array to string
arr.reverse();      // Reverse array
```

### Loop Through an Array

```javascript
let numbers = [10, 20, 30];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

### Important Array Methods

```javascript
let numbers = [1, 2, 3, 4, 5];

// forEach: Runs a function for each element
numbers.forEach(num => {
    console.log(num);
});

// map: Creates a new array
let doubled = numbers.map(num => num * 2);

// filter: Returns elements matching a condition
let even = numbers.filter(num => num % 2 === 0);

// find: Returns the first matching element
let result = numbers.find(num => num > 3);

// reduce: Combines elements into one value
let sum = numbers.reduce((total, num) => total + num, 0);

// some: Checks if at least one element matches
let hasEven = numbers.some(num => num % 2 === 0);

// every: Checks if all elements match
let allPositive = numbers.every(num => num > 0);
```

## 11. Functions

A function is a block of code that performs a particular task.

### Function Declaration

```javascript
function greet() {
    console.log("Hello Siddhant");
}

greet(); // Function call
```

### Function with Parameters

```javascript
function greet(name) {
    console.log("Hello " + name);
}

greet("Siddhant");
```

### Function with Return

```javascript
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result); // 30
```

### Function Expression

```javascript
const greet = function() {
    console.log("Hello");
};

greet();
```

### Arrow Function

Shorter way to write functions.

```javascript
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));
```

Short arrow function:

```javascript
const square = num => num * num;

console.log(square(5)); // 25
```

### Default Parameters

```javascript
function greet(name = "User") {
    console.log("Hello " + name);
}

greet(); // Hello User
```

### Scope

Scope determines where a variable can be accessed.

- Global Scope: Accessible throughout the program.
- Function Scope: Accessible inside a function.
- Block Scope: Accessible inside a block `{ }`.

```javascript
let global = 10;

function test() {
    let local = 20;
    console.log(global);
    console.log(local);
}

test();
```

## 12. Objects

Objects store data in key-value pairs.

```javascript
let student = {
    name: "Siddhant",
    age: 18,
    course: "CS & AI"
};
```

### Access Object Properties

```javascript
console.log(student.name);
console.log(student["age"]);
```

### Update Properties

```javascript
student.age = 19;
student.city = "Bilaspur";
```

### Delete Properties

```javascript
delete student.city;
```

### Object Methods

```javascript
let student = {
    name: "Siddhant",

    greet: function() {
        console.log("Hello " + this.name);
    }
};

student.greet();
```

### Object Methods

```javascript
Object.keys(student);    // Returns keys
Object.values(student);  // Returns values
Object.entries(student); // Returns key-value pairs
```

## 13. Spread and Rest Operators

Both use three dots (`...`).

### Spread Operator

Expands elements of an array or object.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

console.log(arr2); // [1, 2, 3, 4, 5]
```

Object example:

```javascript
let user = { name: "Siddhant" };

let newUser = { ...user, age: 18 };
```

### Rest Operator

Collects multiple arguments into an array.

```javascript
function add(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(add(10, 20, 30)); // 60
```

## 14. Destructuring

Extracting values from arrays or objects.

### Array Destructuring

```javascript
let numbers = [10, 20, 30];

let [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
```

### Object Destructuring

```javascript
let student = {
    name: "Siddhant",
    age: 18
};

let { name, age } = student;

console.log(name);
console.log(age);
```

## 15. Math Object

JavaScript provides built-in mathematical methods.

```javascript
Math.PI;          // Value of PI
Math.round(4.6);  // 5
Math.floor(4.9);  // 4
Math.ceil(4.1);   // 5
Math.abs(-10);    // 10
Math.sqrt(25);    // 5
Math.pow(2, 3);   // 8
Math.max(10, 20, 30); // 30
Math.min(10, 20, 30); // 10
Math.random();    // Random number between 0 and 1
```

## 16. Date Object

Used to work with dates and time.

```javascript
let today = new Date();

console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth()); // 0-11
console.log(today.getDate());
console.log(today.getDay());   // 0-6
console.log(today.getHours());
```

## 17. Error Handling

Used to handle errors without stopping the entire program unexpectedly.

```javascript
try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log("Something went wrong");
} finally {
    console.log("Execution completed");
}
```

### Throw Error

```javascript
function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }

    return "Allowed";
}
```

## 18. DOM (Document Object Model)

DOM allows JavaScript to interact with HTML elements.

Example HTML:

```html
<h1 id="heading">Hello</h1>
<button id="btn">Click Me</button>
```

### Selecting HTML Elements

```javascript
document.getElementById("heading");

document.getElementsByClassName("box");

document.getElementsByTagName("p");

document.querySelector("#heading");

document.querySelectorAll(".box");
```

### Changing Content

```javascript
let heading = document.getElementById("heading");

heading.innerText = "Hello JavaScript";

heading.textContent = "Welcome";

heading.innerHTML = "<b>Hello</b>";
```

### Changing CSS

```javascript
heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "30px";
```

## 19. Events

Events are actions performed by users or the browser.

Examples: Click, keypress, mouseover, submit.

```javascript
let button = document.getElementById("btn");

button.addEventListener("click", function() {
    console.log("Button Clicked");
});
```

### Common Events

```javascript
click
dblclick
mouseover
mouseout
keydown
keyup
input
change
submit
```

## 20. Asynchronous JavaScript

Asynchronous JavaScript allows certain operations to run without blocking the main execution flow.

### setTimeout()

Executes code after a specified delay.

```javascript
setTimeout(function() {
    console.log("Hello");
}, 2000);
```

### setInterval()

Executes code repeatedly after a specified interval.

```javascript
setInterval(function() {
    console.log("Hello");
}, 1000);
```

### Promise

A Promise represents a future result of an asynchronous operation.

It has three states:

- Pending
- Fulfilled
- Rejected

```javascript
let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Task completed");
    } else {
        reject("Task failed");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

### Async and Await

Makes asynchronous code easier to read.

```javascript
async function getData() {
    let result = await Promise.resolve("Data received");

    console.log(result);
}

getData();
```

### Fetch API

Used to get data from an API.

```javascript
async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        let data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUsers();
```

## 21. JSON

JSON stands for JavaScript Object Notation.

It is used to store and exchange data.

```javascript
let student = {
    name: "Siddhant",
    age: 18
};
```

### Convert Object to JSON

```javascript
let jsonData = JSON.stringify(student);

console.log(jsonData);
```

### Convert JSON to Object

```javascript
let objectData = JSON.parse(jsonData);

console.log(objectData);
```

## 22. Modules

Modules allow us to divide code into separate files.

### Export

File: `math.js`

```javascript
export function add(a, b) {
    return a + b;
}

export const pi = 3.14;
```

### Import

File: `main.js`

```javascript
import { add, pi } from "./math.js";

console.log(add(10, 20));
console.log(pi);
```

## 23. Classes and OOP

A class is a blueprint for creating objects.

### Class

```javascript
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

let student1 = new Student("Siddhant", 18);

student1.greet();
```

### Inheritance

One class can inherit properties and methods from another class.

```javascript
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}

let dog = new Dog();

dog.speak();
dog.bark();
```

### Important OOP Concepts

1. Encapsulation: Keeping related data and methods together.
2. Inheritance: One class inherits from another.
3. Polymorphism: Same method name can have different behaviours.
4. Abstraction: Hiding unnecessary implementation details.

## 24. Important JavaScript Concepts

### Truthy and Falsy Values

Falsy values:

```javascript
false
0
-0
0n
""
null
undefined
NaN
```

Other values are generally truthy, including empty arrays `[]` and empty objects `{}`.

### Nullish Coalescing Operator (??)

Uses the right value only when the left value is `null` or `undefined`.

```javascript
let name = null;

console.log(name ?? "Guest"); // Guest
```

### Optional Chaining (?.)

Prevents errors when accessing properties of null or undefined values.

```javascript
let user = {};

console.log(user.address?.city); // undefined
```

### Short-Circuit Evaluation

```javascript
let age = 20;

age >= 18 && console.log("Adult");

let name = "" || "Guest";

console.log(name); // Guest
```

### Callback Function

A function passed as an argument to another function.

```javascript
function greet(callback) {
    callback();
}

greet(function() {
    console.log("Hello");
});
```

### Closures

A function remembers variables from its outer scope even after the outer function has finished executing.

```javascript
function outer() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

let counter = outer();

counter(); // 1
counter(); // 2
```

---

## 25. Quick Revision

| Concept | Meaning |
|---|---|
| `let` | Variable that can be reassigned |
| `const` | Variable that cannot be reassigned |
| `typeof` | Checks data type |
| `if-else` | Conditional execution |
| `switch` | Multiple condition checking |
| `for` | Loop |
| `while` | Loop based on condition |
| `break` | Stops loop |
| `continue` | Skips iteration |
| `function` | Reusable block of code |
| `return` | Returns a value |
| `array` | Collection of values |
| `object` | Collection of key-value pairs |
| `map()` | Creates a new array by transforming elements |
| `filter()` | Filters array elements |
| `reduce()` | Reduces array to one value |
| `DOM` | Accesses and modifies HTML |
| `addEventListener()` | Handles events |
| `Promise` | Handles asynchronous results |
| `async/await` | Simplifies asynchronous code |
| `JSON` | Data exchange format |
| `class` | Blueprint for objects |
| `extends` | Inherits a class |
| `...` | Spread or Rest operator |

## 26. Best Practices

1. Use `const` by default.
2. Use `let` when reassignment is needed.
3. Avoid `var`.
4. Use `===` instead of `==`.
5. Use meaningful variable and function names.
6. Keep functions small and focused.
7. Avoid repeating the same code.
8. Use proper indentation.
9. Handle errors using try-catch when needed.
10. Write comments when they help explain your logic.

---

**End of JavaScript Notes**