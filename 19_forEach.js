let array = [10,20,30,40,50,15];

array.forEach((currentValue,index,array)=>{
    console.log(currentValue,index,array);
})

array.forEach((currentValue)=>{
    console.log(currentValue);
})

console.log(`============= sum the array================`);
let sum = 0;
array.forEach((Element)=>{
    sum = sum + Element;
});
console.log(sum);


console.log(`============== log the only even array element===============`);
array.forEach((value)=>{
     if (value%2 == 0) {
        console.log(value);
     }
});


console.log(`=============== log the array element wich is multiple of 3==============`);
array.forEach((element) => {
    if (element%3 == 0) {
        console.log(element);
    }
});
console.log(`=============Traversing set================`);
const rollNum = new Set();
rollNum.add(12);
rollNum.add(45);
rollNum.add(56);
rollNum.add(14);
rollNum.add(45);
console.log(rollNum);
rollNum.forEach((rollNumber)=>{
         console.log(rollNumber);
});

console.log(`=============Traversing Map================`);

const map = new Map();
map.set("Dada",10);
map.set("Shree",10);
map.set("Suraj",87);
map.set("Suraj",65);
map.set("Amar",87);
console.log(map);
map.forEach((value,key)=>{
    // console.log(value,key);
    console.log(key,value);

});
