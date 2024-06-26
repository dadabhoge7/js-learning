console.log(`---------------------------Step 01-----------------------------------------`);
var isEvenOrOdd = function(num){
    if (num%2 == 0) {
        return "Even";
    } else {
        return "Odd";
        }
 }
 var givenNumber = isEvenOrOdd(45);
 console.log(`Given Number 45 is Even or Odd : ${givenNumber}`);
 var givenNumber = isEvenOrOdd(70);
 console.log(`Given Number 70 is Even or Odd : ${givenNumber}`);
 var givenNumber = isEvenOrOdd(67);
 console.log(`Given Number 67 is Even or Odd : ${givenNumber}`);
 var givenNumber = isEvenOrOdd(98);
 console.log(`Given Number 98 is Even or Odd : ${givenNumber}`);

 console.log(`---------------------------Step 02-----------------------------------------`);
 var voteEligibility = function(age){
    if (age >= 18) {
        console.log(`Your age is ${age} and you "eligible" for vote`);
    } else {
        console.log(`Your age is ${age} and you "not eligible" for vote`);
    }
 }
 voteEligibility(18);
 voteEligibility(20);
 voteEligibility(17);
 voteEligibility(40);

 console.log(`---------------------------Step 03-----------------------------------------`);
 var stringContain = function(string1){
    console.log(`String : ${string1}`);
    var lengthOfString = string1.length;
    if (lengthOfString > 10) {
        console.log(`Yes, this string  "more than 10" Character `);
    } else {
        console.log(`Yes, this string "not a more than" 10 Character `);
    }
 }
 stringContain("JavaScript-ES6");

 console.log(`---------------------------Step 04-----------------------------------------`);

 var strStartWith = function(str){
    if (str.startsWith("Java")) {
        console.log(`Given String "${str}" start with word "Java"`);
    } else {
        console.log(`Given String "${str}" does not start with word "Java"`);
    }   
 }
 strStartWith("JavaScript Language");
 strStartWith("Programming Language");



