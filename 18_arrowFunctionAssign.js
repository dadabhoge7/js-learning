
console.log(`-----------------Step 01----------------------`);
let morning = ()=>{

    console.log(`Good Morning, Today is Friday`);
}
morning();

console.log(`-----------------Step 02----------------------`);

let value1 = (num1, num2, num3 = 1) =>{
    console.log(`Value 1 : ${num1}, Value2 : ${num2}, Value 3 : ${num3}`);
}
value1(5,5,2);
value1(10,1);

console.log(`-----------------Step 03----------------------`);

let addition = (a,b,c,d,e) =>{

    const result = a+b+c+d+e;
    return result;
}
const addNum = addition(100,100,200,349,756);
console.log(`Addition Values of 100,100,200,349,756 :- ${addNum}`);
const stringAddition = addition("I am", " learning", " ES6", ' features', " in depth.");
console.log(`Addition string Values of "I am", " learning", " ES6", ' features', " in depth." :-  ${stringAddition}`);
