/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    // Handle easy case of 0:
    if (s.length == 0){
        return true;
    }

    // All odd length strings should be false (including 1)
    if (s.length % 2 == 1) {
        return false;
    }

    // If the first element is a closed brace, we can also return false
    if (!isOpenCharacter(s[0])){
        return false;
    }

    var stack = [];

    stack.push(s[0]); // Start this by adding the first element on the stack. 
    // At this point, first character is guranteed to be an open character

    for (var i = 1; i < s.length; ++i) {
        if (isOpenCharacter(s[i])){
            // For an open character, we add it to the stack and move on.
            stack.push(s[i]);
        } else {
            // For a close character, we need to pop it off the stack and compare
            
            if (!isPair(stack.pop(), s[i])) {
                return false;
            }
        }

    }

    
    if (stack.length == 0) {
        return true;
    }

    // Lastly, if the stack isn't empty, return false
    else return false;

     
    
};


// Helper methods

function isOpenCharacter(c){

    switch (c) {
        case '[' :
        case '{' :
        case '(' :    
            return true;
        default :
            return false;
    }
}

function isPair(left,right){

    switch (left){
        case '[' :
            if (right == ']') {
                return true;
            }
            break;
        case '{' :
            if (right == '}') {
                return true;
            }
            break;
        case '(' :
            if (right == ')') return true;
            break;
        default :
            break;
    }

    return false;
}
