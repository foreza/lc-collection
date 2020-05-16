/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {

    let currMax = nums[0]; // -2, 1
    let currVal = nums[0]; // -2, 1

    for (var i = 1; i < nums.length; ++i) {
        currVal = Math.max(nums[i], nums[i] + currVal);
        currMax = Math.max(currVal, currMax);
    }

    return currMax;



};


// var maxSubArray = function(nums) {

//     if (nums.length == 0){
//         return 0;
//     }

//     if (nums.length == 1){
//         return nums[0];
//     }

//     if (nums.length == 2){
//         if (nums[0] + nums[1] < 0) {
//             return nums[0] > nums[1] ? nums[0] : nums[1];
//         } else {
//             return nums[0] + nums[1];
//         }
//     }


//     let leftMaxSum = nums[0] + nums[1];     // Initial
//     let currSum = 0;
//     let tIndex = 1;

//     for (var i = 1; i < nums.length; ++i){
//         currSum += nums[i];
//         if (currSum > leftMaxSum){
//             tIndex = i;
//             leftMaxSum = currSum
//         }

//     }

//     console.log(`maxSum: ${leftMaxSum} and tIndex = ${tIndex}`)

//      let rightMaxSum = nums[nums.length - 1] + nums[nums.length - 2];     // Initial
//      currSum = 0;     // Initial
//      let bIndex = nums.length - 2;

//     for (var i = nums.length - 1; i > 0; --i){
//         currSum += nums[i];
//         if (currSum > rightMaxSum){
//             bIndex = i;
//             rightMaxSum = currSum
//         }

//     }

//     console.log(`maxSum: ${rightMaxSum} and bIndex = ${bIndex}`)


//     if (bIndex == tIndex) {
//         return Math.max(rightMaxSum, leftMaxSum);
//     }



//     let combinedSum = 0;

//     var low = bIndex < tIndex ? bIndex : tIndex;
//     var high = bIndex > tIndex ? bIndex : tIndex;

//     for (var i = low; i <= high; ++i){
//         combinedSum += nums[i];
//     }

//     console.log(`combinedSum: ${combinedSum} for bIndex = ${bIndex} and tIndex = ${bIndex}`)


//     return Math.max(combinedSum, rightMaxSum, leftMaxSum);



// };