const array = [1,2,6,8,6,4];

const sum = array.reduce((runningTotal,value)=>{
    return runningTotal + value;
},0);
console.log(sum);
