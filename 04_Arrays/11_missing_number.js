// https://leetcode.com/problems/missing-number/description/


/* @param {number[]} nums
 * @return {number}
 */


var missingNumber = function(nums) {
    let N = nums.length;
    let sum = N * ( N + 1 ) / 2;
    let sum2 = 0;
    for ( let i = 0; i < nums.length; i++ ){
        sum2 = sum2 + nums[i]; 
    }
    let missingElement = sum - sum2;
    return missingElement;
};

