class Vehicle {

    constructor(companyName,model,color,year,price){
        this.companyName = companyName;
        this.model = model;
        this.color = color;
        this.year = year;
        this.price = price;
    }

    details(){
        console.log(`Vehicle Details :`);
        console.log(`Company : ${this.companyName}, Model : ${this.model}, Color : ${this.color}, Year : ${this.year}, Price : ${this.price}`);
    }

}

const tata = new Vehicle("Tata","Punch","White",2019,700000);
tata.details();
const mahendra = new Vehicle("Mahendra","XUV","Black",2017,1400000);
mahendra.details();
const suzuki = new Vehicle("suzuki","Swift","White",2018,750000);
suzuki.details();
const kia = new Vehicle("KIA","Seltos","Gray",2020,950000);
kia.details();
const toyota = new Vehicle("TOYOTA","Fortuner","Black",2020,2400000);
toyota.details();

console.log(`============================================================================================================`);

class Collage {

    constructor(clgName, location, noOfBranch, totalStudent){
        this.clgName = clgName;
        this.location = location;
        this.noOfBranch = noOfBranch;
        this.totalStudent = totalStudent;
    }

    details(){
        console.log(`College Details`);
        console.log(`College Name : ${this.clgName}, Location : ${this.location}, Total BranchS : ${this.noOfBranch}, Total Student : ${this.totalStudent}`);
    }
}
const sbPatil = new Collage("S B Patil Collage of Engineering", "Indapur",6,5300);
sbPatil.details();
const jspm = new Collage("JSPM", "Wagholi",5,7000);
jspm.details();
const rajgad = new Collage("Rajgad Institute", "Bhor",6,4500);
rajgad.details();
const zil = new Collage("Zil College of Engineering", "Narhe",7,7500);
zil.details();