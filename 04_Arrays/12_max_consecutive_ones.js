// https://leetcode.com/problems/max-consecutive-ones/
// leetcode 485 EASY

/**
 * @param {number[]} nums
 * @return {number}
 */


var findMaxConsecutiveOnes = function(nums) {
    let counter = 0;
    let max = 0;
    for ( let i = 0; i < nums.length; i++ ) {
        if ( nums[i] === 1 ){
            counter++;
        }else if(nums[i] === 0 ){
            counter = 0;
        }
        if ( counter > max ) {
            max = counter
        }
    }
    return max;
};