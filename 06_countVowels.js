

var word = 'javaScript';
console.log(`My String : ${word}`);

console.log(`===============Count the total No of "a" character=======================`);
var counter = 0;

for (let i = 0; i < word.length; i++) {
    
    var ch = word.charAt(i);

    if (ch == "a") {
        counter++;
    }
    
}

console.log(counter);

console.log(`===============Count the total No of vowels character=======================`);

var counter = 0;
for (let i = 0; i < word.length; i++) {
    
    var ch = word.charAt(i);

    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
        counter++;
    }
    
}

console.log(counter);