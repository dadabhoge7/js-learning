function gradeCalculation(marks){

    // var marks = +marks;
   // Invalid Scenario
    if (marks<=0 || marks > 100 || marks == undefined || typeof marks != "number" ) {
        console.log(`Entered Mark is : ${marks} - pls enter valid mark`);
    } else{
        // Valid Scenario
        if (marks >= 90   ) {
            console.log(`Fantastic Marks : ${marks} your grade is "A+"`);
        } 
        if (marks >= 75 && marks <= 90) {
            console.log(`Excellent Marks : ${marks} your grade is "A"`);
        }
        if (marks >= 50 && marks <= 75) {
            console.log(`Good Marks : ${marks} your grade is "B"`);
        }
        if (marks >= 35 && marks <= 50 ) {
            console.log(`Marks is : ${marks} your grade is "c" and need Improvement`);
        }
    }
}

gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);
