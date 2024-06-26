function gradeCalculate(marks){
    if (marks>=90 && marks>=90) {
        console.log(`Fancastic marks:${marks} your grde is A+`);
    }
    if (marks>=75 && marks<=90) {
        console.log(`Exellent marks :${marks} your grade is A`);
    }
    if (marks>=50 && marks<=75) {
        console.log(`good marks :${marks} your grade is B`);
    } 
    if (marks>=35 && marks<=50) {
        console.log(`marks is :${marks} yougrade is c you need improvement`);
    } 
    if (0<=0 || marks>=100) {
        console.log(`please provide valid marks`);
    }  
}
gradeCalculate(98);
gradeCalculate(80);
gradeCalculate(90);
gradeCalculate(0);
gradeCalculate(150);
gradeCalculate(-7);
gradeCalculate(35);
gradeCalculate(29);
gradeCalculate(64);
gradeCalculate(49);
gradeCalculate("91");
gradeCalculate("eigthy");
gradeCalculate(undefined);
gradeCalculate(null);