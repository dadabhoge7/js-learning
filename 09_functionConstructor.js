function player (fullName , totalRun){
    this.fullName = fullName;
    this.totalRun = totalRun;
}

const kohli = new player("Virat",20000);
const rohit = new player("rohit",30000);
const rishab = new player("rishab",10000);
const shami = new player("shami",1000);

player.prototype.country = "India"; // with help the prototype share the property across object

console.log(kohli.fullName,kohli.totalRun,kohli.country);
console.log(rohit.fullName,rohit.totalRun,rohit.country);
console.log(rishab.fullName,rishab.totalRun,rishab.country);
console.log(shami.fullName,shami.totalRun,shami.country);




