
let arrayRollNumber = [10,20,30,40,50];
console.log(arrayRollNumber);
console.log(`Length of array, it means total number of value : ${arrayRollNumber.length}`);

console.log(`Accessing array Value using index`);
const element2nd = arrayRollNumber[2];
console.log(`element2nd : ${element2nd}`);

console.log(`Update array value using index`);
arrayRollNumber[3]=100;
console.log(arrayRollNumber);

console.log(`add last of element`);
arrayRollNumber.push(99)
console.log(arrayRollNumber);;

console.log(`Remove last element in array`);
arrayRollNumber.pop();
console.log(arrayRollNumber);

console.log(`Add start of element in array`);
arrayRollNumber.unshift(77);
console.log(arrayRollNumber);


console.log(`Remove first element of array`);
arrayRollNumber.shift();
console.log(arrayRollNumber);
