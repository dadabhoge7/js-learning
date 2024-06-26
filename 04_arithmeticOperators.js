console.log(`===========addition Operator + ===============`);
var result = 10 + 20;
console.log(result);
var num1 = 20;
var num2 = 30;
var addition = num1 + num2;
console.log(`Addition of ${num1} and ${num2} : ${addition}`);

var addNum = function(arg1,arg2,arg3){
    var result = arg1 + arg2 + arg3 ;
    console.log(`Addition of ${arg1} and ${arg2} and ${arg3} : ${result}`);   
}
addNum(10,20,30,40);

console.log(`===========subtraction Operator - ===============`);
var result = 10-20;
console.log(result);
var sub = function(arg1,arg2){
     var sub = arg1 - arg2 ;
     return sub;
}
var subResult = sub(10,5)
console.log(`Sub Result : ${subResult}`);


console.log(`===========multiple Operator * ===============`);
var result = 10*20;
console.log(result);
var mul = function(arg1,arg2){
     var mul = arg1 * arg2 ;
     return mul;
}
var mulResult = mul(10,5)
console.log(`Sub Result : ${mulResult}`);

console.log(`===========Exponential Operator ** ===============`);
var result = 8**2;
console.log(result);

var exponential = function(arg){
    var expo = arg ** 2;
    // console.log(`Exponential of ${arg} : ${expo}`);
    return expo;
}
var expoResult = exponential(4);
console.log(`Exponential of  : ${expoResult}`);



console.log(`===========Division Operator / ===============`);
var result = 8/2;
console.log(result);


console.log(`===========Modulus Operator % ( Always Return you Reminder)===============`);
var result = 8%2;
console.log(result);
var result = 11%4;
console.log(result);

console.log(`===========Increment Operator ++ (Unary operator) ===============`);
    // ++
    // 01. preFix  ++10
    // 02. postFix  10++
var num4 = 10;
var result = ++num4
console.log(result);

console.log(`===========Decrement Operator -- (Unary operator)===============`);
// ++
// 01. preFix  --10
// 02. postFix  10--
var num4 = 10;
var result = --num4
console.log(result);




