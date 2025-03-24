// leetcoe : https://leetcode.com/problems/rotate-array/description/
// leetcode - 189 - medium

// OPTIMAL
// TC : O ( 2 N )
// SC : O ( 1 )

function reverse ( startIndex, endIndex, arr ) {
    while ( startIndex < endIndex ) {
        [ arr[startIndex], arr[endIndex] ] = [ arr[endIndex], arr[startIndex] ];
        startIndex++;
        endIndex--;
    }
    return arr;
}

function left_rotate_array_by_k_places ( arr , k ) {
    k = k % arr.length;
    reverse( 0, k - 1, arr );
    reverse( k, arr.length - 1, arr );
    reverse( 0, arr.length - 1, arr );
    return arr;
}

let arr = [ 1,2,3,4,5,6,7,8,9 ];
let k = 3;
console.log( left_rotate_array_by_k_places ( arr, k ) );

// right rotate array

function reverse( startIndex, endIndex, nums ) {
    while ( startIndex < endIndex ) {
        [ nums[startIndex], nums[endIndex] ] = [ nums[endIndex], nums[startIndex] ];
        startIndex++;
        endIndex--;
    }
    return nums;
 }
var rotate = function(nums, k) {
    if ( k > nums.length ) {
        k = k % nums.length;
    }
    reverse ( 0, (nums.length - 1) - k, nums );
    reverse ( nums.length - k , nums.length - 1, nums );
    reverse ( 0, nums.length - 1, nums );
    return nums;
};