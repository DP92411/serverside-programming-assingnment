// 16. Write a JavaScript function to parse an URL.
const urlString = "https://www.google.com/index";
const url = new URL(urlString);
const hostname = url.hostname;
const pathname = url.pathname;
console.log(`Hostname: ${hostname}`);
console.log(`Pathname: ${pathname}`);
// 17. Write a JavaScript function to split a string and convert it into an array of words.
function splitStringIntoWords(str) {
return str.split(" ").filter(word => word !== '');
}
const sentence = "Splitting the sentence.";
console.log(splitStringIntoWords(sentence));

// 18. Write a JavaScript function that takes a string with both lowercase and upper case letters as a
// parameter. It converts upper case letters to lower case, and lower case letters to upper case.
function convertCase(str) {
return str.replace(/[a-z]/ig, function(match) {
return match === match.toLowerCase() ?
match.toUpperCase() : match.toLowerCase();
});
}
const upperCase= "uppercase";
const lowerCase="LOWERCASE";
console.log("Converted string:", convertCase(upperCase));
console.log("Converted string:", convertCase(lowerCase));
