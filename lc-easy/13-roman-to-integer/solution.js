/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    //     There are six instances where subtraction is used:

    // I can be placed before V (5) and X (10) to make 4 and 9. 
    // X can be placed before L (50) and C (100) to make 40 and 90. 
    // C can be placed before D (500) and M (1000) to make 400 and 900.

    /* Dumb approach - convert all instances of CM, XC, IX, CD, XL, IV to their respective dumber counterpart
    
    
    
    */

    let amt = 0;

    // Use 2 pointers
    for (var i = 0; i < s.length; ++i) {

        switch (s[i]) {

            case 'M':
                amt += 1000;
                break;
            case 'D':
                amt += 500;
                break;
            case 'C':
                if (s[i + 1] == 'M' || s[i + 1] == 'D') {
                    amt -= 100;
                } else {
                    amt += 100;
                }
                break;
            case 'L':
                amt += 50;
                break;
            case 'X':
                if (s[i + 1] == 'C' || s[i + 1] == 'L') {
                    amt -= 10;
                } else {
                    amt += 10;
                }
                break;
            case 'V':
                amt += 5;
                break;
            case 'I':
                if (s[i + 1] == 'X' || s[i + 1] == 'V') {
                    amt -= 1;
                } else {
                    amt += 1;
                }
                break;
        }

    }



    return amt;

};