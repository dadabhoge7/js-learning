console.log(`----------------Step 01--------------------`);
var greaterNum = function (num1, num2) {
    var result = num1>=num2 ? num1 : num2 ;
    console.log(`Greater number from numbers "${num1}, ${num2}" is ${result}`);
}
greaterNum(10,-10);
greaterNum(800,899);

console.log(`----------------Step 02--------------------`);
function isEvenOrOddNum(arg1) {
    var result = arg1%2==0 ? "true" : "false" ;
    return result;
}
var resultVal = isEvenOrOddNum(29);
console.log(`is Even 29 : ${resultVal}`);
var resultVal = isEvenOrOddNum(44);
console.log(`is Even 44 : ${resultVal}`);
var resultVal = isEvenOrOddNum(0);
console.log(`is Even 0 : ${resultVal}`);
var resultVal = isEvenOrOddNum(101);
console.log(`is Even 101 : ${resultVal}`);


console.log(`----------------Step 03--------------------`);

function wordLength(string1) {
    console.log(`String : ${string1}`);
    var lengthOfString = string1.length; 
    console.log(`Length Of String : ${lengthOfString}`);
    var result = lengthOfString % 2 == 0 ? "Even" : "Odd";
    return result;
}
var returnResult = wordLength("JavaScript");
console.log(`A length of String even or Odd : ${returnResult}`);
var returnResult = wordLength("Developer");
console.log(`A length of String even or Odd : ${returnResult}`);
var returnResult = wordLength("Google");
console.log(`A length of String even or Odd : ${returnResult}`);
console.log(`-------------------------------------------`);
