// 8. Write a JavaScript program to sort the characters in a string alphabetically.
function sortStringAlphabetically(str) {
return str.split('').sort().join('');
}
const inputString = "hello world";
const sortedString = sortStringAlphabetically(inputString);
console.log("Sorted characters in the string:",
sortedString);

// 9. Write a JavaScript program to check if a numeric array is sorted or not.
function isArraySorted(arr) {
for (let i = 1; i < arr.length; i++) {
if (arr[i] < arr[i - 1]) {
return false;
}
}
return true;
}
const sortedArray = [1, 2, 3, 4, 5];

console.log(`${sortedArray ? "array is sorted": "array isnot sorted"}`);

// 10. Write a JavaScript function to validate whether a given value type is null or not.
function isNull(value) {
return value === null;
}
const value1 = null;
const value2 = 42;
console.log("Is value1 null?", isNull(value1));
console.log("Is value2 null?", isNull(value2));

// 11. Write a JavaScript function to validate whether a given value is a number or not.
function isNumber(value) {
return typeof(value) === 'number' && !isNaN(value);
}
const value3 = 42;
const value4 = "hello";
console.log("Is value1 a number?", isNumber(value3));
console.log("Is value2 a number?", isNumber(value4));

// 12. Write a JavaScript function to validate whether a given value is RegExp or not.
function isRegExp(value) {
return value instanceof RegExp;
}
const value5 = /test/;
const value6 = "hello";
console.log("Is value1 a RegExp?", isRegExp(value5));
console.log("Is value2 a RegExp?", isRegExp(value6));
