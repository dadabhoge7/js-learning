const arrayNumber = [20,11,40,25.37,49,9,90,60,2,19];
console.log(`----------------Step 1 : log number greater than 50 -------------`);
const newArray1 = arrayNumber.filter((Element)=>{
    return Element>50;
});
console.log(newArray1);
console.log(`----------------Step 2 : log even number ------------------------`);
const newArray2 = arrayNumber.filter((Element)=>{
    return Element%2 == 0;
});
console.log(newArray2);
console.log(`----------------Step 3 : log odd number -------------------------`);
const newArray3 = arrayNumber.filter((Element)=>{
    return Element%2 != 0;
});
console.log(newArray3);
console.log(`----------------Step 4 : log number which are multiple of 5 -----`);
const newArray4 = arrayNumber.filter((Element)=>{
    return Element%5 == 0;
});
console.log(newArray4);
console.log(`----------------Step 5 : log number which are between 20 to 50---`);
const newArray5 = arrayNumber.filter((Element)=>{
    return  Element >= 20 && Element <= 50;
});
console.log(newArray5);