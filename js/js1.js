// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
function findAllIndexesOfWord(sentence, word) {
     let indexes = [];
     let index = sentence.indexOf(word);
    
     while (index !== -1) {
     indexes.push(index);
     index = sentence.indexOf(word, index + 1);
     }
    
     return indexes;
     }

     const sentence ="my name is this,your name is?";
   const word = "name";
    
     const indexes = findAllIndexesOfWord(sentence,
    word);
     console.log(`Indexes of "${word}" in the sentence:
    ${indexes}`);