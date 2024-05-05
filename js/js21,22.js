// 21. Write a JavaScript program to check whether a single linked list is empty or not. Return true
// otherwise false.
class Node {
constructor(data) {
this.data = data;
this.next = null;
}
}
class LinkedList {
constructor() {
this.head = null;
}
isEmpty() {
return this.head === null;
}
}
const list = new LinkedList();
console.log("Is the list empty?", list.isEmpty());

// 22. Write a JavaScript program to create a class called 'Rectangle' with properties for width and
// height. Include two methods to calculate rectangle area and perimeter. Create an instance of the
// 'Rectangle' class and calculate its area and perimeter.
class Rectangle {
constructor(width, height) {
this.width = width;
this.height = height;
}
area() {
return this.width * this.height;
}
perimeter() {
return 2 * (this.width + this.height);

}
}
const rectangle = new Rectangle(5, 3);
console.log("Area:", rectangle.area());
console.log("Perimeter:", rectangle.perimeter());
