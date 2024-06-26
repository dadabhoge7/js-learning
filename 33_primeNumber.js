
function isPrime(num) {

    for (let i = 2; i < num; i++) {

        if (num%2 == 0) {
            return false;
        }
        return true;
    }
}

const result = isPrime(7);

const array = [3,9,7,6,19,29,53];
console.log(`My Array : ${array}`);
console.log(`-------------------------------`);
let count = 0;
for (const num of array) {
    if (isPrime(num)) {
        count = count + 1;
        console.log(`${num} is prime number`);
    }else{
        console.log(`${num} is not a prime number`);
    }
}
console.log(`-------------------------------`);
console.log(`Total Prime Number : ${count}`);
console.log(`-------------------------------`);
