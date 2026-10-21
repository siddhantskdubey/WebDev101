
---

# 📘 JavaScript Practice Sheet (25 Problems)

---

## 🔹 Section 1: Variables, Hoisting & Execution Context

**Q1. Default to Zero**
Write a function `safeAdd(a, b)` that adds two numbers but if either is `undefined`, treat it as `0`. Use `let` and `const` only.

**Q2. Block Scope Test**
Inside a function, declare `count = 5` with `var`. Inside an `if` block, declare another `count = 10` with `let`. Return both values in an array.

**Q3. Const Object Mutation**
Create a constant object `settings` with `{theme:"light"}`. Change `theme` to `"dark"` and return the object.

**Q4. Hoisting with Multiple Vars**
Inside a function, assign `x = 1` before declaring it with `var`. Then declare `var x = 2`. Return `x`.

**Q5. Function Expression Hoisting**
Declare a variable `sayHi` as a function expression that returns `"Hi"`. Try to call it before it’s defined, wrap in try/catch, and return `"Not available"` if it fails.

---

## 🔹 Section 2: Arrays

**Q6. Odd Squares**
Given an array of numbers, return a new array of only odd numbers squared.

**Q7. Average of Numbers**
Return the average of numbers in an array using `reduce`.

**Q8. Flatten to Single Level**
Write a function that takes a nested array (only one level deep, e.g. `[1,[2,3],4]`) and flattens it into `[1,2,3,4]`.

**Q9. Unique Even Numbers**
From an array, return only unique even numbers in sorted order.

**Q10. Count Greater Than X**
Write a function that counts how many numbers in an array are greater than a given value `x`.

---

## 🔹 Section 3: Functional Programming

**Q11. Extract Names of Adults**
Given an array of user objects `{name, age}`, return an array of names of users age ≥ 18.

**Q12. Multiply All by Factor**
Write a function that multiplies every number in an array by a given factor.

**Q13. Find First Premium User**
Given an array of users `{name, plan}`, return the first user whose plan is `"premium"`.

**Q14. Any Inactive Users?**
Return `true` if any user in the array has `active:false`.

**Q15. All Numbers Positive?**
Check if all numbers in an array are positive.

---

## 🔹 Section 4: Objects

**Q16. Invert Object**
Write a function that inverts an object’s keys and values. Example: `{x:"y"}` → `{y:"x"}`.

**Q17. Shallow Copy**
Return a shallow copy of an object using the spread operator.

**Q18. Merge with Priority**
Merge two objects but if both have the same key, keep the one from the **first** object.

**Q19. Property List**
Return an array of strings in format `"key:value"` for each property of an object.

**Q20. Deep Property Default**
Given an object and a path string like `"a.b.c"`, return the value if it exists, otherwise return `"Not Found"`.

---

## 🔹 Section 5: Strings

**Q21. Reverse Words**
Reverse the **order of words** in a sentence.
`"hello world from js"` → `"js from world hello"`.

**Q22. Count Vowels**
Count how many vowels are in a string.

**Q23. Remove Extra Spaces**
Trim a string and replace multiple spaces with a single space.

**Q24. Check Substring**
Return `true` if one string is a substring of another (don’t use `.includes`).

**Q25. Initials from Name**
Given `"John Doe Smith"`, return `"J.D.S"`.

---

# ✅ Solutions + Explanations

---

### Q1 Solution

```js
function safeAdd(a, b) {
  let x = a ?? 0; // if a is undefined → 0
  let y = b ?? 0; // if b is undefined → 0
  return x + y;
}
```

🔎 **Explanation**: `??` is the nullish coalescing operator. It replaces `undefined` (or `null`) with a default value.

---

### Q2 Solution

```js
function blockScopeTest() {
  var count = 5; // function scoped
  let blockCount;
  if (true) {
    let count = 10; // block scoped
    blockCount = count;
  }
  return [blockCount, count];
}
```

🔎 **Explanation**: `var` leaks outside the block; `let` is limited to block scope.

---

### Q3 Solution

```js
function mutateSettings() {
  const settings = { theme: "light" };
  settings.theme = "dark"; // allowed, we didn’t reassign the whole object
  return settings;
}
```

🔎 **Explanation**: `const` prevents reassignment, but object properties can still be modified.

---

### Q4 Solution

```js
function hoistVars() {
  x = 1;    // works because var x is hoisted
  var x = 2;
  return x; // final value is 2
}
```

🔎 **Explanation**: `var` is hoisted, so assignment before declaration doesn’t throw error.

---

### Q5 Solution

```js
function funcExprTest() {
  try {
    return sayHi();
    var sayHi = function() { return "Hi"; };
  } catch {
    return "Not available";
  }
}
```

🔎 **Explanation**: function expressions are not hoisted with definitions, only the variable is hoisted → so calling it before assignment throws.

---

### Q6 Solution

```js
function oddSquares(arr) {
  return arr.filter(n => n % 2 !== 0).map(n => n * n);
}
```

🔎 **Explanation**: first filter odds, then square each.

---

### Q7 Solution

```js
function average(nums) {
  if (nums.length === 0) return 0;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}
```

🔎 **Explanation**: `reduce` accumulates sum, then divide by length.

---

### Q8 Solution

```js
function flattenOneLevel(arr) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}
```

🔎 **Explanation**: Concatenate nested arrays into a flat one.

---

### Q9 Solution

```js
function uniqueEvens(arr) {
  return [...new Set(arr.filter(n => n % 2 === 0))].sort((a, b) => a - b);
}
```

🔎 **Explanation**: `Set` removes duplicates, filter keeps evens, sort arranges ascending.

---

### Q10 Solution

```js
function countGreater(nums, x) {
  return nums.filter(n => n > x).length;
}
```

🔎 **Explanation**: Filter numbers greater than `x`, then count them.

---

### Q11 Solution

```js
function adultNames(users) {
  return users.filter(u => u.age >= 18).map(u => u.name);
}
```

🔎 **Explanation**: Filter by age, then map names.

---

### Q12 Solution

```js
function multiplyBy(nums, factor) {
  return nums.map(n => n * factor);
}
```

🔎 **Explanation**: Apply transformation to all numbers.

---

### Q13 Solution

```js
function firstPremium(users) {
  return users.find(u => u.plan === "premium") || null;
}
```

🔎 **Explanation**: `find` returns first match, or undefined → replaced with null.

---

### Q14 Solution

```js
function hasInactive(users) {
  return users.some(u => !u.active);
}
```

🔎 **Explanation**: `some` checks if any user fails active condition.

---

### Q15 Solution

```js
function allPositive(nums) {
  return nums.every(n => n > 0);
}
```

🔎 **Explanation**: `every` checks all numbers are positive.

---

### Q16 Solution

```js
function invertObject(obj) {
  const res = {};
  for (let key in obj) res[obj[key]] = key;
  return res;
}
```

🔎 **Explanation**: Flip keys and values.

---

### Q17 Solution

```js
function shallowCopy(obj) {
  return { ...obj };
}
```

🔎 **Explanation**: Spread creates a shallow clone.

---

### Q18 Solution

```js
function mergePriority(obj1, obj2) {
  return { ...obj2, ...obj1 };
}
```

🔎 **Explanation**: Last spread overwrites → so obj1 takes priority.

---

### Q19 Solution

```js
function propertyList(obj) {
  return Object.entries(obj).map(([k, v]) => `${k}:${v}`);
}
```

🔎 **Explanation**: `Object.entries` gives `[key,value]` pairs, then format as strings.

---

### Q20 Solution

```js
function deepGet(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj) ?? "Not Found";
}
```

🔎 **Explanation**: Traverse keys safely using `reduce` + optional chaining.

---

### Q21 Solution

```js
function reverseWords(str) {
  return str.trim().split(/\s+/).reverse().join(" ");
}
```

🔎 **Explanation**: Split into words, reverse order, join back.

---

### Q22 Solution

```js
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
```

🔎 **Explanation**: Use regex to match vowels.

---

### Q23 Solution

```js
function cleanSpaces(str) {
  return str.trim().replace(/\s+/g, " ");
}
```

🔎 **Explanation**: Trim ends, replace multiple spaces with one.

---

### Q24 Solution

```js
function isSubstring(s1, s2) {
  return s1.indexOf(s2) !== -1;
}
```

🔎 **Explanation**: `.indexOf` checks if substring exists.

---

### Q25 Solution

```js
function getInitials(name) {
  return name.trim().split(/\s+/).map(w => w[0].toUpperCase()).join(".");
}
```

🔎 **Explanation**: Split by spaces, take first character of each, join with dots.

---


