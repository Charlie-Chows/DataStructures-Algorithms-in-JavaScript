// leetcode : https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
// leetcode - 26 - easy


// OPTIMAL
// TC : O ( N )
// SC : O ( 1 )
function removeDuplicatesFromSortedArray ( nums ) {
    if ( nums.length === 0 ) return null;
    let i = 0;
    for ( let j = 1; j < nums.length; j++ ) {
        if ( nums[i] !== nums[j] ) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

let nums = [ 1, 1, 2, 2, 2, 3, 3 ];
console.log( removeDuplicatesFromSortedArray ( nums ) );

