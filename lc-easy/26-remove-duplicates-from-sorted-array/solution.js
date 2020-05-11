/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    if (nums.length <= 1) {
        return nums;
    }

    nums.push('@');
    
    for (var i = 0; i < nums.length - 1; ++i){

        if (nums[i+1] === '@'){
            nums.splice((i+1));
            return nums.length;
        }

        if (nums[i] === nums[i+1]){
            nums.splice(i+1, 1);
            --i;
        }

    }

};