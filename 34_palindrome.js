function isPalindrome(str){
    let reversStr = str.split("").reverse().join("");
    if (str == reversStr) {
        console.log(`${str} : is Palindrome`);
    } else {
        console.log(`${str} : not palindrome`);
    }
}
isPalindrome("javaScript");
isPalindrome("madam");
isPalindrome("141");
isPalindrome("sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");