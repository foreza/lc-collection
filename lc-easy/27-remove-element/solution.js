/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    if (nums.length == 0) {
        return val;
    }

    let j = 0;

    for (var i = 0; i < nums.length; ++i){

        if (nums[i] == val){
            // If the current value is NOT the target val for deletion
            nums.splice(i,1);
            --i;
        } else {
            j++;
        }

    }

    return j;
    
};