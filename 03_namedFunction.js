// Named function with no argument and no return value
console.log('// Named function with no argument and no return value');

function show(){
    console.log('Hey.....Dada');
}
show();

function square(){
    console.log('Finding the square of......10');
    var result = 10*10;
    console.log('result of square : ',result);
}
square();
square();   

console.log('---------------------------------------------');

// Named function with argument and no return value
console.log('// Named function with argument and no return value');

function squareNumber(num){
    console.log('Finding the square of......',num);
    var result = num*num;
    console.log('result of square : ',result);
}
squareNumber(5);
squareNumber(15); 

console.log('---------------------------------------------------------------------------------------');
// Write a program with name area of rectangle and its tow arguments namely as length and width
console.log('// Write a program with name area of rectangle and its tow arguments namely as length and width');

function areaOfRectangle(lenght, width) {
    console.log('Given length and width is : ',lenght,width);
    var result  = lenght*width;
    console.log('Area of rectangle is :- ', result);
}
areaOfRectangle(30,20);

// Named function with argument and no return value
console.log('-------------------------------------------------------');
console.log('// Named function with argument and no return value');
// WAF to find the cube given number

function cubeOfArea(num) {
    console.log('Given number is : ',num);
    var result = num * num * num;
    return result;
}
var cube = cubeOfArea(3);
console.log('cube is : ',cube);