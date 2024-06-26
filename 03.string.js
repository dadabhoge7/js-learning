var greet="Good Morning"

console.log(`Find Total no of character from the string`);
var totalChar = greet.length;
console.log(`Total Character is : ${totalChar}`);

console.log(`=============== Methods in string=====================`);
// Methods
console.log(`=============== charAt()=====================`);
console.log(`Find index no 3 character from the string`);
var char = greet.charAt(3);
console.log(`char at index 3 : ${char}`);

console.log(`=============== indexOf()=====================`);
console.log(`Find index of M from the string`);
var index = greet.indexOf("M");
console.log(`Index of M is : ${index}`);

// String concat
console.log(`=============== cincat()=====================`);
console.log(`String Concat`);
var firstName='Dada';
var lastName="Bhoge";
var result = firstName.concat(lastName);
console.log(result);

console.log(`=============== toUpperCase()=====================`);
var result = firstName.toUpperCase();
console.log(result);

console.log(`=============== toLowerCase()=====================`);
var result = firstName.toLowerCase();
console.log(result);

console.log(`=============== replace()=====================`);
var fullName = "Dada Bhoge";
console.log(`Before Replace : ${fullName}`);
var result = fullName.replace("Dada","Shree")
console.log(`After Replace : ${result}`);


console.log(`=============== trim()=====================`);
var city = "  Pune  ";
console.log(`Before Trim : ${city}`);
console.log(`Before Trim length : ${city.length}`);
var result = city.trim();
console.log(`Before Trim : ${result}`);
console.log(`Before Trim length : ${result.length}`);

console.log(`=============== includes()=====================`);
var greet = "Good Morning";
console.log(`String : ${greet}`);
var result = greet.includes("nin");
console.log(`Is "nin" Includes : ${result}`);
var result = greet.includes("z");
console.log(`Is "z" Includes : ${result}`);

console.log(`=============== slice()=====================`);
console.log(greet);
var result = greet.slice(1,6);
console.log(`After slice : ${result}`);

console.log(`=============== substr()=====================`);
console.log(greet);
var result = greet.substr(1,6);
console.log(`After slice : ${result}`);

console.log(`=============== substring()=====================`);
console.log(greet);
var result = greet.substring(1,6);
console.log(`After slice : ${result}`);

console.log(`=============== split()=====================`);

var word ="My life My rule";
console.log(word);
var result = word.split(" ");
console.log(`After Split : ${result}`);
console.log(result);
console.log(`Total No of word : ${result.length}`);



