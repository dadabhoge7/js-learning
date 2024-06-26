console.log(`=================== Include() Method========================`);
let arrayA = [1,2,3,4,5,6];
console.log(arrayA.includes(2));//true
console.log(arrayA.includes(15));//false

console.log(`=================== indexOf() Method========================`);
let arrayB = [1,2,3,4,5,6];
const indexOf2 = arrayA.indexOf(2);
console.log(indexOf2);//1
const indexOf5 = arrayA.indexOf(3);
console.log(indexOf5);//2
const indexOf12 = arrayA.indexOf(12);
console.log(indexOf12);//-1

console.log(`=================== Traverse Of Array ========================`);
let arrC = [10,20,30,40,50,60]
console.log(arrC[2]);//30
console.log(arrC[4]);//50
console.log(arrC[1]);//20
console.log(`Traverse of Array`);
for (let i = 0; i < arrC.length; i++) {
    const element = arrC[i];
    console.log(element); // 10 20 30 40 50 60
}

console.log(`Reverse Traversing of array`);
for (let index = arrC.length-1; index >= 0; index--) {
    let element = arrC[index];
    console.log(element);// 50 40 30 20 10
    
}


console.log(`============== Get sum of array Element =====================`);
let arraya1 = [10,20,30,40,50];

sum = 0;
for (let i = 0; i < arraya1.length; i++) {
    const element = arraya1[i];
    sum = sum + element;
}
console.log(sum);    // 150

console.log(`=================== Log Only EvenNumber od Number =============================`);

let array2 = [1,2,3,4,5,6,7,8,9];
console.log(`Log Even number`);
for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    if (element%2==0) {
        console.log(element);// 2 4 6 8
    }
}
console.log(`log odd Number`);
for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    if (element%2!=0) {
        console.log(element);
    }
    
}