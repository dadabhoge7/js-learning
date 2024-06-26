const emp = {
    name : "Shree",
    company : "Citi"
}

const empAddress = {
    city : "Pune",
    pin : 123456
}

console.log(emp);
console.log(empAddress);

const mergeObject = Object.assign({},emp,empAddress);
console.log(mergeObject);