/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  
    if (n == 1) {
        return "1";
    }
    
    else return countStuff()

    
    
    
    
};


function countStuff(num) {
    
    var numString = `${num}`.split(""); // array of string/chars    
    var currNum = numString[0];     // string
    var currNumCount = 1;
    var ret = "";
    
    for (var i = 1; i < numString.length; ++i){    
        if (numString[i] == currNum){
            currNumCount++;
        } else {
            switch (currNum) {
                case "1":
                    ret += `${currNumCount}1`
                    break;
                case "2":
                    ret += `${currNumCount}2`
                    break;
                case "3":
                    ret += `${currNumCount}3`
                    break;
            }

            // Reset currNum / currNumCount
            currNum = numString[i];
            currNumCount = 1;
        }
        
    }

    
    switch (currNum) {
        case "1":
            ret += `${currNumCount}1`
            break;
        case "2":
            ret += `${currNumCount}2`
            break;
        case "3":
            ret += `${currNumCount}3`
            break;
    }


    
    return ret;
    
    
}