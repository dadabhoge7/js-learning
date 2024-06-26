let array1 = [10,20,30,40,50];
console.log(`MyArray = ${array1}`);

console.log(`Log Perticular element by using slice() method`);
console.log(array1.slice(2));

console.log(`Log Index 1 to Index 4`);
console.log(array1.slice(1,4));
console.log(`Log Index 1 to Index 2`);
console.log(array1.slice(1,2));

console.log(`Removing and inserting of element by using splice() method`);

console.log(`MyArray : ${array1}`);

var r1 = array1.splice(2);
console.log(`Remove element after index of 2 : ${r1}`);
console.log(`My Array : ${array1}`);

console.log(`---------- Remove middle element from array ---------------`);
let arr1 = [1,2,3,4,5,6,7,8,9];
arr1.splice(2,2);
console.log(arr1);

console.log(`Insert element on middle`);
arr1.splice(2,0,100,200);
console.log(arr1);

console.log(`Remove element and add element`);
arr1.splice(2,2,900,500,1000);
console.log(arr1);

console.log(`Remove multiple element`);
arr1.splice(1,3,800);
console.log(arr1);



