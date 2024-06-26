
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];

console.log(`--------------Step 01. Find total available element------------------`);
console.log(`MyArrayNumbers : ${arrayNumbers}`);
console.log(arrayNumbers.length);

console.log(`--------------Step 02. Log the first and last element ------------------`);
console.log(`MyArrayNumbers : ${arrayNumbers}`);
console.log(`First Element : ${arrayNumbers[0]}`);
console.log(`Last Element : ${arrayNumbers[arrayNumbers.length-1]}`);

console.log(`--------------Step 03. Log the third last element by using length property  ------------------`);
console.log(`MyArrayNumbers : ${arrayNumbers}`);
console.log(arrayNumbers[arrayNumbers.length-3]);

console.log(`--------------Step 04. Find the all even number by using for of loop ------------------`);
console.log(`MyArrayNumbers : ${arrayNumbers}`);
for (const element of arrayNumbers) {
    
    if (element%2==0) {
        console.log(element);
    }
}

console.log(`--------------Step 05. Find the odd number by using for of loop------------------`);
console.log(`MyArrayNumbers : ${arrayNumbers}`);
for (const element of arrayNumbers) {
    if (element%2!=0) {
        console.log(element);
    }
}

console.log(`--------------Step 06. Find Even Positioned Element and Sum it------------------`);
console.log(`MyArrayNumbers : ${arrayNumbers}`);
sum = 0;
for (const key in arrayNumbers) {
    if (key%2!=0) {
        let element = arrayNumbers[key];
        console.log(element);
        sum = sum + element;
    }
}
console.log(`Sum of Even positioned value : ${sum}`);

console.log(`--------------Step 07. Find odd Positioned Element and Sum it------------------`);
console.log(`MyArrayNumbers : ${arrayNumbers}`);
sum = 0;
for (const key in arrayNumbers) {

    if (key%2 == 0) {
         let element = arrayNumbers[key];
         console.log(element);
         sum = sum + element;
        }
}
console.log(`Sum of odd positioned value : ${sum}`);

console.log(`--------------Step 08.  Find the sum of all element ------------------`);
console.log(`MyArrayNumbers : ${arrayNumbers}`);

sum = 0;
for (const element of arrayNumbers) {
    sum = sum + element;
}
console.log(`Sum of all element : ${sum}`);

console.log(`--------------Step 09.  Find the Number which are multiple of 5 ------------------`);
console.log(`MyArrayNumbers : ${arrayNumbers}`);
for (const element of arrayNumbers) {
    if (element%5 == 0) {
        console.log(element);
    }
}

console.log(`--------------Step 10. is 115 available in array list ? ------------------`);
console.log(arrayNumbers.includes(115));

console.log(`--------------Step 11. is 23 available in array list ? ------------------`);
console.log(arrayNumbers.includes(23));

console.log(`--------------Step 12. Insert number 55, 66 at Index 3 ------------------`);
console.log(`MyArrayNumbers : ${arrayNumbers}`);
arrayNumbers.splice(3,0,55,66)
console.log(`Updated Array : ${arrayNumbers}`);

console.log(`--------------Step 13. Delete three element starting from index 4 ------------------`);
console.log(`MyArrayNumbers : ${arrayNumbers}`);
arrayNumbers.splice(0,3)
console.log(`Updated Array : ${arrayNumbers}`);


