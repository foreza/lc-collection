/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    // If the number is negative, return false. 
    if (x < 0) {
        return false;
    }

    // If the number is 0, return true (0 is technically the same forward/backward)
    if (x == 0) {
        return true;
    }
    
    /*

    1) Convert the number to a string.
    2) A string can be represented by a character array. Split it into individual characters (no delim passed)
    3) Reverse the array. 
    4) Join the elements of the reversed character array
    5) Parse the joined string back into an int.

    */
    const reversedNum = parseInt(x.toString().split("").reverse().join(""));

    if (reversedNum === x) {
        return true;
    } else {
        return false;
    }

    
};


    