const person = {
    fullName : "Bill Gates",
    company : "microsoft"
}

function greetings(message) {
    console.log(`Hii ${this.fullName} ${message}`);
}

greetings.call(person, "Good Morning");