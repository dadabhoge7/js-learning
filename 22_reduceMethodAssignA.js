const arrayNumber = [20,11,40,25,37,49,9,90,60,2,19];

console.log(`---------------Step 1 : log the sum of all element in array----------------------`);
const sum = arrayNumber.reduce((runningTotal,value)=>{
    return runningTotal + value;
},0);
console.log(sum);

console.log(`---------------Step 1 : log the numbers multiple of 5 and then sum----------------`);
const newArray = arrayNumber.filter((element)=>{
    return element%5 == 0;
});
console.log(newArray);
const sumNewAray = newArray.reduce((runningTotal,value)=>{
    return runningTotal + value;
},0);
console.log(sumNewAray);
