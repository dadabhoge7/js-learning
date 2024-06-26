const array = [15,76,751,787,78,52,5,6,875];

const newArray = array.filter((element)=>{
    return element%2 == 0;
});
console.log(newArray);