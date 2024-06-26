const person = {
    name : "shree",
    num : 152565,
    display : function(){
        console.log(`Name : ${this.name} and Number : ${this.num}`);
    }
}
person.display();
Object.freeze(person);
person.num = 952712;
person.display();
