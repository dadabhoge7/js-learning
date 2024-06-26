// nested call Back

// setTimeout(() => {
//     console.log(`1`);

//     setTimeout(() => {
//         console.log(`2`);

//         setTimeout(() => { 
//             console.log(`3`);  

//         }, 3000);

//     }, 2000);

// }, 1000);


console.log(`callBack here.......`);

setTimeout(function(){
      console.log(`Invoke after 2 second`);

      setTimeout(function() {
        console.log(`invoke after 5 second`);

        setTimeout(function() {
            console.log(`invoke after 7 second`);
        }, 7000);

      }, 5000);

}, 2000);