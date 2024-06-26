
function MonthOfYear(num){
    switch (num) {
        case 1:
            console.log(`Jan`);
            break;
            case 1:
            console.log(`Jan`);
            break;
            case 2:
            console.log(`Feb`);
            break;
            case 3:
            console.log(`Mar`);
            break;
            case 4:
            console.log(`Apr`);
            break;
            case 5:
            console.log(`May`);
            break;
            case 6:
            console.log(`Jun`);
            break;
            case 7:
            console.log(`Jul`);
            break;
            case 8:
            console.log(`Aug`);
            break;
            case 9:
            console.log(`Sep`);
            break;
            case 10:
            console.log(`Oct`);
            break;
            case 11:
            console.log(`Nov`);
            break;
            case 12:
            console.log(`Dec`);
            break;
    
        default:
            console.log(` Invalid Month number : ${num} `);
            break;
    }
}
MonthOfYear(0);
MonthOfYear(2);
MonthOfYear(5);
MonthOfYear(12);
MonthOfYear(15);
MonthOfYear(100);
MonthOfYear(null);
MonthOfYear(undefined);