const person = {
    fullName : "Bill Gates",
    company : "microsoft"
}

function greetings(message, role){
    console.log(`Hii the ${role} mr. ${this.fullName} ${message}`);
}

greetings.apply(person, ["Good Morning","CEO"]);