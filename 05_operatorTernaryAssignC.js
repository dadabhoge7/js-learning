console.log(`-----------------Step 01----------------------`);

function maleMarriageEligibility(gender,age,boyName){
    var result = ( gender == "Male" && age>=21 ) ? `${boyName}, Hey you are Eligible for Marriage` : `${boyName}, Hey you are Not Eligible for Marriage` ;
    return result;

}
var returnResult = maleMarriageEligibility("Male",25,"BillGates");
console.log(returnResult);
var returnResult = maleMarriageEligibility("Male",17,"StewJobs");
console.log(returnResult);


console.log(`-----------------Step 02----------------------`);

function femaleMarriageEligibility(gender,age,girlName){

    var result = gender == "Female" && age>=18 ? `${girlName}, Hey you are Eligible for Marriage` : `${girlName}, Hey you are  not Eligible for Marriage`;
    return result;

}
var returnResult = femaleMarriageEligibility("Female",16,"Jenifer");
console.log(returnResult);
var returnResult = femaleMarriageEligibility("Female",27,"MalindaGates");
console.log(returnResult);
