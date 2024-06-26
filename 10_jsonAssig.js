const string1 = `{
"name" : "Alexi Meloni",
"id" : "E00245",
"role" : ["Dev","DBA"],
"age" : 23,
"doj" : "11-12-2019",
"married" : false,
"addess" : {
       "street" : "32, Laham st",
       "city" : "innsbruck",
       "country" : "Austria"
      },
"referred" : "E0012"
}`
console.log(string1);
const string2 = JSON.parse(string1);

console.log(`-------------Step 01------------------`);
console.log(`Role :- ${string2.role[0]}`);

console.log(`-------------Step 02------------------`);
let splitName = string2.name.split(" ");
console.log(`Last Name :- ${splitName[splitName.length-1]}`);

console.log(`-------------Step 03------------------`);
let splitDate = string2.doj.split("-");
console.log(`Joining Year :- ${splitDate[splitDate.length-1]}`);
