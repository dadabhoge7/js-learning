
const isPrepared = false;

const notePromise = new Promise((resolve,reject)=>{
    if (isPrepared) {
        resolve("Buddies, take this one and also prepare your notes");
    }
    reject("Sorry, guys...will not able to ");
});
notePromise.then((success)=>{
    console.log(success);
    console.log('thank you so much......');
}).catch((failure)=>{
    console.log(failure);
    console.log('failure the promise');
}).finally(()=>{
    console.log('Finally....Need to prepare my notes as well');
});
