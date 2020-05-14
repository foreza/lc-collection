/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    const nLen = nums.length;
    
    // If the list is empty, `target` will be inserted at position 0
    if (nLen == 0){
        return 0;
    }

    // If the target number is less than the first index of nums, it'll be inserted at position 0
    if (target < nums[0]) {
        return 0;
    }

    // If the target number is larger than the largest index, it'll come in as the last index
    if (target > nums[nLen-1]) {
        return nums.length;
    }

    for (var i = 0; i< nLen; ++i) {
        if (target <= nums[i]){
            return i;
        }
    }
    
};