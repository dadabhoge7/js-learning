const array = [1,2,[4,5,6],7,5,9,[5,8,[2,5,6]]];
const flatArray = array.flat();
console.log(flatArray);

const deepArray = [1,[2,[3,[4,[5,6]]]]];
const flatDeepArray = deepArray.flat(3);
console.log(flatDeepArray);

console.log(`Handling empty slot`);
const arrayWithEmptySlot = [1,2,,4,,5];
const flatArrayNoHole = arrayWithEmptySlot.flat();
console.log(flatArrayNoHole);