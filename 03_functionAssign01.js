// Function with no arguments and no return type
console.log('// Function with no arguments and no return type');
function myDetails(){
    var myName = 'Dada';
    var myAddress = 'Pune';
    console.log('My Name :',myName);
    console.log('my Address :',myAddress);
}
myDetails();

// Function with  arguments and no return type
console.log('-------------------------------------------------');
console.log('// Function with arguments and no return type');
function personalDetails(firstName, lastName, collegeName){
    console.log('My First Name : ',firstName);
    console.log('My Last Name : ',lastName);
    console.log('My College Name : ',collegeName);
}

personalDetails('Dada','Bhoge', 'S. B. Patil College of Engineering');

// Addition
console.log('-------------------------------------------------');
console.log('//Addition');

function addThreeValue(num1,num2,num3){
    var result = num1 + num2 + num3;
    console.log('Addition of Three Value ',result);
    console.log('Hello Good Morning');
}
addThreeValue(10.23,600,40);
addThreeValue('Hello','Good','Morning');