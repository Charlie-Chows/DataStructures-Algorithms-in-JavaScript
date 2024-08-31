// https://leetcode.com/problems/missing-number/description/


/* @param {number[]} nums
 * @return {number}
 */

// sum of N natural numbers
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





/***
Example to understand the code 
let arr = [ 10, 20, 7, 40, 50 ];
let i = 1;
arr[i] => arr[1] i.e, 20
arr[i] + 1 => arr[1] + 1 i.e, 20 + 1 = 21
arr[i + 1] => arr[1 + 1] => arr[2] i.e, 7

*/

function missingElement ( arr ) {
    let n = arr.length;
    for ( let i =0; i < n-1; i++ ) {
      if ( arr[i]+1 === arr[i+1]) {
  
      }
      else {
        return arr[i] + 1;
      }
    }
    return null;
  }
  console.log(missingElement([1,2,3,4,5,6,7,9]));