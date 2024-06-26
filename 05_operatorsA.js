
console.log(`------------------------Step 01-------------------------------`);
// function squareOfWordLength(arg) {
//     var lengthofWord = arg.length;
//     var lenthOfSquare = lengthofWord ** 2;
//     console.log(`The Length of "${arg}" is ${lengthofWord} and its length of square is ${lenthOfSquare} `);
// }
// squareOfWordLength("JavaScript");
// squareOfWordLength("Google Chrome");
// squareOfWordLength("Developer Smart");

function squareOfWordLength(arg) {
    console.log(arg);
    var len = arg.length;
    console.log(`Length of Word : ${len}`);
    var result = len * len;
    return result;
}
var returnResult = squareOfWordLength("JavaScript");
console.log(`Square of Length : ${returnResult}`);
var returnResult = squareOfWordLength("Google Chrome");
console.log(`Square of Length : ${returnResult}`);
var returnResult = squareOfWordLength("Developer Smart");
console.log(`Square of Length : ${returnResult}`);

console.log(`-----------------------Step 02--------------------------------`);

function sentence() {
    var string1 = "I am angular developer";
    console.log(string1);

    var lengthOfString = string1.length;
    console.log(`Length of string : ${lengthOfString}`);

    var numberOfWord = string1.split(" ");
    console.log(`Total Number of word : ${numberOfWord.length}`);

    var div = lengthOfString / numberOfWord.length;
    console.log(`String Length "${lengthOfString}" divide by no of string word "${numberOfWord.length}" : "${div}"`);

    var mul = lengthOfString * numberOfWord.length;
    console.log(`String Length "${lengthOfString}" multiple by no of string word "${numberOfWord.length}" : "${mul}"`);
}
sentence();
