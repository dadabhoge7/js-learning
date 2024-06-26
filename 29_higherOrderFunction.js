

function greet(callBack){
    console.log(`Good Morning`);
    callBack();
    return function(){
        console.log(`see you soon`);
    }
}
function sayBye(){
    console.log(`Bye...`);
}
// let result = greet(sayBye);
// result();
greet(sayBye)();