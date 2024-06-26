console.log(`============ Reverse The String =============`);

var word = "JavaScript";

result = "";
for (let i = word.length-1 ; i >= 0 ; i--) {
    
   var ch = word.charAt(i);
   result = result + ch;

}
console.log(result);