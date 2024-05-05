// 19. Write a JavaScript function that returns the number of minutes in hours and minutes. Input :
// console.log(timeConvert(200)); Output : "200 minutes = 3 hour(s) and 20 minute(s)."
function timeConvert(minutes) {
const hours = Math.floor(minutes / 60);
const remainingMinutes = minutes % 60;
return `${minutes} minutes = ${hours} hour(s) and
${remainingMinutes} minute(s).`;
}
console.log(timeConvert(200));

// 20. Write a JavaScript program to implement a stack that checks if a given element is present or not
// in the stack.
 class Stack {
constructor() {
this.items = [];
}
push(element) {
this.items.push(element);
}
pop() {
if (this.isEmpty()) {
return "Underflow";
}
return this.items.pop();
}
peek() {
return this.items[this.items.length - 1];
}
isEmpty() {
return this.items.length === 0;
}
contains(element) {
return this.items.includes(element);
}
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Is 2 present in the stack?",
stack.contains(2));
console.log("Is 4 present in the stack?",
stack.contains(4));

