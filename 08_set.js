
const rollNum = new Set();
rollNum.add(10);//add the element
rollNum.add(20);
rollNum.add(30);
rollNum.add(40);
rollNum.add(40);
rollNum.add(50);

console.log(rollNum);

// see size of set
console.log(rollNum.size);

// see the element 
console.log(rollNum.has(50));

// traverse the set
for (const element of rollNum) {
    console.log(element);
}

// delete the element
rollNum.delete(20);
console.log(rollNum);

// all clear the element
rollNum.clear();
console.log(rollNum);


console.log(`Remove duplicate element from array`);

let array = [10,10,20,60,45,60,8,45];
console.log(array);
array = [...new Set (array)]
console.log(array);