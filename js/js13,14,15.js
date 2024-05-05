// 13. Write a JavaScript program to delete the rollno property from the following object. Also print the
// object before or after deleting the property. 
// Sample object: var student = { name : "David Rayy",
// sclass : "VI", rollno : 12 };
var student = {
name: "David Rayy",
sclass: "VI",
rollno: 12
};
console.log("Before deleting rollno property:", student);
delete student.rollno;
console.log("After deleting rollno property:", student);
// 14. Write a JavaScript program to display the reading status (i.e. display book name, author name
//     and reading status) of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead',
//     readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author:
//     'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
    var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    
    }
    ];
    library.forEach(book => {
    console.log(`"${book.title}" by ${book.author} - Reading
    status: ${book.readingStatus ? 'Read' : 'Not read'}`);
    });
//     15. Write a JavaScript program to create a clock. Note: The output will come every second. Expected
// Console Output : "14:37:42" "14:37:43" "14:37:44" "14:37:45" "14:37:46" "14:37:47"
function updateClock() {
const now = new Date();
console.log(`${(now.getHours()).toFixed(0)}:${now.getMinutes()}:${now.getSeconds()}`);
}
setInterval(updateClock, 1000);

