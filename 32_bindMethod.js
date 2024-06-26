const person = {
    fullName : "Bill Gates",
    company : "microsoft"
}

function greetings(greet, role, word){
    console.log(`Hii the ${role} mr. ${this.fullName} ${greet} ${word}`);
}

const newFun = greetings.bind(person);
newFun("Good morning", "CEO", "You are great");
