const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
console.log(arrayRollNumbers);

console.log(`----------------- Step 01 : Reverse the array------------------------`);
console.log(arrayRollNumbers.reverse());
console.log(`----------------- Step 02 : without any custom sorting and log-------`);
arrayRollNumbers.sort();
console.log(arrayRollNumbers);
console.log(`----------------- Step 03 : sort the array in ascending order -------`);
arrayRollNumbers.sort((n1,n2)=>{
    return n1 > n2 ? 1 : -1 ;
});
console.log(arrayRollNumbers);
console.log(`----------------- Step 04 : log the greatest number for array -------`);
console.log(arrayRollNumbers[arrayRollNumbers.length-1]);
console.log(`----------------- Step 05 : log the smallest number for array -------`);
console.log(arrayRollNumbers[0]);
console.log(`----------------- Step 06 : remove duplicate from array -------------`);
let array = [...new Set(arrayRollNumbers)]; 
console.log(array);
