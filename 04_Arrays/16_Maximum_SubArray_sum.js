// this program will only work if both positive & negative numbers it will fail all numbers are negative 
// leetcode 53 Medium

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let maximumSubArraySum = -Infinity;
    for ( let i = 0; i < nums.length; i++ ) {
        sum = sum + nums[i];
        if ( sum > maximumSubArraySum ) {
            maximumSubArraySum = sum;
        }
        if ( sum < 0 ){
            sum = 0;
        }
    }
    if ( maximumSubArraySum < 0 ) {
        maximumSubArraySum = 0;
    }
     return maximumSubArraySum;
};