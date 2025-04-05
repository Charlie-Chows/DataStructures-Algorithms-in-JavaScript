// leetcode : https://leetcode.com/problems/move-zeroes/description/
// leetcode - 283 - easy

// OPTIMAL 
// TC : O ( N )
// SC : O ( 1 )

function moveZeroesToEnd ( nums ) {
    let n = nums.length;
    if ( n === 0 ) return [];
    
    let j = 0;
    for ( let i = 0; i < n; i++ ) {
        if ( nums[i] !== 0 ) {
            [ nums[i], nums[j] ] = [ nums[j], nums[i] ];
            j++;
        }
    }
    return nums;
}

let nums = [ 1, 0, 2, 3, 2, 0, 0, 4, 5, 1 ];
console.log( moveZeroesToEnd ( nums ) );    // [ 1, 2, 3, 2, 4, 5, 1, 0, 0, 0 ]