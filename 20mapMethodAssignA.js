const arrayNumber = [20,11,40,25,23,11,9,31,60,2,19];
console.log(`-------------- Step 1 : Add 10 each element and log --------------------`);
const newArray = arrayNumber.map((Element)=>{
    return Element + 10 ;
});
console.log(newArray);
console.log(`-------------- Step 1 : Cube the each array element and log ------------`);
const newArray1 = arrayNumber.map((Element)=>{
    return Element * Element * Element ;
});
console.log(newArray1);
console.log(`-------------- Step 1 : add element with corresponding index -----------`);
const newArray2 = arrayNumber.map((Element,index)=>{
    return Element + index ;
});
console.log(newArray2);