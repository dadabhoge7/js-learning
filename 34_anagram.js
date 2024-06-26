function isAnagram(str1,str2){
   const string1 = str1.split("").sort().join("");
   const string2 = str2.split("").sort().join("");
   if (string1 == string2) {
    console.log(`'${str1}' & '${str2}' is anagram`);
   } else {
    console.log(`'${str1}' & '${str2}' is not anagram`);
   }

}
isAnagram("vile","evil");
isAnagram("silent","listen");
isAnagram("gram","aram");
isAnagram("mom","tom");
