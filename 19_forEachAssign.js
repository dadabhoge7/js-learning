const arrayNumber = [1,-7,40,502,-77,91,0,108,89,-601];

console.log(`------------------ Step 01 : log the array element with its index -----------------------`);
arrayNumber.forEach((element,index)=>{
    console.log(`Index : ${index} & Element : ${element}`);
});
console.log(`-----------------------------------------------------------------------------------------------------------`);
console.log(`------------------ Step 02 : Log the positive number -----------------------`);
arrayNumber.forEach((element)=>{
    if (element >= 0) {
        console.log(element);
    }
});
console.log(`-----------------------------------------------------------------------------------------------------------`);
console.log(`------------------ Step 03 : log negative number -----------------------`);
arrayNumber.forEach((element)=>{
    if (element <= 0) {
        console.log(element);
    }
});
console.log(`-----------------------------------------------------------------------------------------------------------`);
console.log(`------------------ Step 04 : log the even number -----------------------`);
arrayNumber.forEach((element)=>{
    if (element%2 == 0) {
        console.log(element);
    }
});
console.log(`-----------------------------------------------------------------------------------------------------------`);
console.log(`------------------ Step 05 : log sum of array value -----------------------`);
let sum = 0;
arrayNumber.forEach((element)=>{
        sum = sum + element;
});
console.log(`Sum of element : ${sum}`);
console.log(`-----------------------------------------------------------------------------------------------------------`);
console.log(`------------------ Step 06 : log the even indexed array value-----------------------`);
arrayNumber.forEach((element,index)=>{
    if (index%2 == 0) {
        console.log(element);
    }
});




















