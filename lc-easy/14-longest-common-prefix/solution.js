/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    // Handle zero case. If no strings, no prefix
    if (strs == undefined || strs.length == 0 ){
        return "";
    }

    // If there's only one word, return that word
    if (strs.length == 1) {
        return strs[0];
    }


    let prefix = "";
    
    for (var i = 0; i < strs[0].length; ++i){
            for (var j = 1; j < strs.length; ++j) {

            if (strs[j][i] != strs[0][i]){
                // The second we get a mismatch, return the prefix
                return prefix;
            }


        }

        // Only append the letter if all the letters pass
        prefix += strs[0][i];
    }

    return prefix;

};