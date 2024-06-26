console.log(`=================Step 01. Count the total number of vowels including small and capital vowels========================`);

// var word = "I am very Good IT Developer";
// console.log(`My String : ${word}`);

// var counter = 0;

// for (let i = 0; i < word.length; i++) {
    
//     var ch = word.charAt(i);
//     if (ch=="a" || ch=="A" || ch=="e" || ch=="E" || ch=="i" || ch=="I" || ch=="o" || ch=="O" || ch=="u" || ch=="U") {
//         counter++;
//     }
    
// }
// console.log(`Counting of vowels : ${counter}`);

var str = "I am very Good IT Developer";

console.log(`My String : ${str}`);

var vowels = 'aeiou';

var counter = 0;

for (let i = 0; i < str.length; i++) {
    
    var ch = str.charAt(i);    

    var chLowerCase = ch.toLowerCase();

    if(vowels.includes(chLowerCase)){
        counter++;
    }
}
console.log(counter);

console.log(`=================Step 02. Get the sum of cube of numbers from 1 to 5========================`);
cubeOfSum = 0;

 for (let i = 1; i <= 5; i++) {
    var cube =  i * i * i ;
    cubeOfSum = cubeOfSum + cube;
 }
 console.log(cubeOfSum);

 console.log(`=================Step 03. ========================`);
 function oddPositionChar(str){

    for (let i = 0; i < str.length; i++) {

        var ch = str.charAt(i);

        if (i%2 == 1 && ch == " ") {

            console.log(ch);
            
        }   
    }
    console.log(ch);
 }
 oddPositionChar(`Hard work always pay back`);
 oddPositionChar(`Soon I will be UT IT champ`);


