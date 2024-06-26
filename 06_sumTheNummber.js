 console.log(`============ Sum the number 1 to 5 =============`);

 sum = 0;
 for (let i = 0; i <= 5; i++) {
    
    sum = sum + i;
 }
 console.log(sum);

 console.log(`============ Sum the Even Number 0 to 15 =============`);

 sumEven = 0;
 for (let i = 0; i <= 10; i=i+2) {
    
    sumEven = sumEven + i;
 }
 console.log(sumEven);

 console.log(`============ sum of cube of number 1 to 5 =============`);

 cubeOfSum = 0;

 for (let i = 1; i <= 5; i++) {
    var cube =  i * i * i ;
    cubeOfSum = cubeOfSum + cube;
 }
 console.log(cubeOfSum);


 console.log(`============ find out odd position character =============`);

 function oddPositionChar(str){

    for (let i = 0; i < str.length; i++) {

        var ch = str.charAt(i);

        if (i%2 == 1 && ch == " ") {

            console.log(ch);
            
        }   
    }
 }
 oddPositionChar(`Hard work always pay back`);
 oddPositionChar(`Soon I will be UT IT champ`);

