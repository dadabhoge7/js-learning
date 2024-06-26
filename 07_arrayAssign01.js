
const fruitsSeasonal = ['Banana',"Orange","Apple",'Mango',"Water Melon"];
console.log(`MyArray : ${fruitsSeasonal}`);

console.log(`================= Step 01 =======================`);
let firstElement = fruitsSeasonal[0];
console.log(`firstElement : ${firstElement}`);

let lastElement = fruitsSeasonal[fruitsSeasonal.length-1]
console.log(`lastElement : ${lastElement}`);

console.log(`================= Step 02 Add "Papaya" element before "Banana" =======================`);

fruitsSeasonal.unshift("Papaya");
console.log(fruitsSeasonal);

console.log(`================= Step 03 Remove Mango from the array =======================`);
fruitsSeasonal.splice(4,1);
console.log(fruitsSeasonal);

console.log(`================= Step 04 Add Element "Pineapple" at the last of array =======================`);
fruitsSeasonal.push('PineApple');
console.log(fruitsSeasonal);

console.log(`================= Step 05 Insert an element "Dragon fruit" Before "Water Melon"  =======================`);
fruitsSeasonal.splice(4,0,"Dragon Fruits")
console.log(fruitsSeasonal);

console.log(`================= Step 06 Replace an element "Orange" With ""Kiwi=======================`);
fruitsSeasonal.splice(2,1,"Kiwi");
console.log(fruitsSeasonal);

console.log(`================= Step 07 Log the element starting from index 1 to 4 =======================`);
console.log(fruitsSeasonal.slice(1,5));

console.log(`================= Step 08 Only select last three element =======================`);
console.log(`Last Three Element : ${fruitsSeasonal[fruitsSeasonal.length-1]}, ${fruitsSeasonal[fruitsSeasonal.length-2]}, ${fruitsSeasonal[fruitsSeasonal.length-3]}`); 
