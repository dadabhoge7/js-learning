console.log(`Deprecated DOM API`);
const headingElement = document.getElementById("heading");
console.log(headingElement);

console.log(`New DOM API`);
console.log(`===== Query Selector with element name=======`);
const elementH2 = document.querySelector("h2");
console.log(elementH2);

console.log(`===== Query Selector with id=======`);
const elementH2ByID = document.querySelector("#heading");
console.log(elementH2);
console.log(elementH2.innerHTML);

console.log(`===== Query Selector with class=======`);
const elementLearning = document.querySelector(".learning");
console.log(elementLearning);
console.log(elementLearning.innerHTML);

console.log(`======= Modifying element using QuerySelector ========`);
const elementH2Heading = document.querySelector("h2");
elementH2Heading.innerHTML = "Introduction of Dom - Document Object Model";

console.log(`===== Query Selector ALL with element name =======`);
const liElements = document.querySelectorAll("li");
console.log(liElements);
for (const element of liElements) {
    console.log(element.innerHTML);
}

console.log(`===== Query Selector ALL with class name =======`);
const learningElements = document.querySelectorAll(".learning");
for (const element of learningElements) {
    console.log(element.innerHTML);
}

console.log(`===== Changing an attribute =======`);
const linkGoogleEle = document.querySelector("#linkGoogle");
linkGoogleEle.setAttribute("href", "https://www.google.com/");

console.log(`===== Changing an attribute style =======`);

const addressElement = document.querySelector("#address");
addressElement.style.color = "red";

console.log(`===== remove element =======`);
const skillElement = document.querySelector("#skill");
const childElement = document.querySelector("#agile");
skillElement.removeChild(childElement);

console.log(`===== creating / insert new element =======`);
const elementP = document.createElement("p");
const textNodeElement = document.createTextNode("MahadevNagar, Hadapsar, Pune");
elementP.appendChild(textNodeElement);
const divElement = document.querySelector("#address-content")
divElement.appendChild(elementP);


function techFunction(){
    console.log('Hey you click - H3');
}

const subButton = document.querySelector("#submit-button");
subButton.addEventListener('click', ()=>{
    console.log("Hey you clicked");
    alert('');
});

// mouse-hover
const add = document.querySelector("#address");
add.addEventListener('mouseover', ()=>{
    alert('mouseover performed');
});

const numberSq = document.querySelector('#enter-number-one');
numberSq.addEventListener('click',()=>{
    const num = prompt('Enter Number',1);
    const areSure = confirm(`are you sure.. you want to get square of number ${num}`)
    if (areSure) {
        result = num * num ;
        alert(`Square of Number is ${result}`)
    }
});







