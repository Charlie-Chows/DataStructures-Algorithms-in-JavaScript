// leetcoe : https://leetcode.com/problems/rotate-array/description/
// leetcode - 189 - medium

// OPTIMAL
// TC : O ( 2 N )
// SC : O ( 1 )
function reverseArray ( nums, startIndex, endIndex ) {
    while ( startIndex < endIndex ) {
        [ nums[startIndex], nums[endIndex] ] = [ nums[endIndex], nums[startIndex] ];
        startIndex++;
        endIndex--;
    }
    return nums;
}

function leftRotateArrayByKPlaces ( nums, k ) {
    let n = nums.length;
    if (n === 0 || k === 0 || k % n === 0) return nums;
    k = k % n;  // it handles k is greater than length also 

    reverseArray(nums, 0, k - 1 );
    reverseArray(nums, k, n - 1 );
    reverseArray(nums, 0, n - 1 );
    return nums;
}

let nums = [ 1,2,3,4,5 ];
let k = 6;
console.log(leftRotateArrayByKPlaces( nums,k ));



// right rotate array
var rotate = function(nums, k) {
    let n = nums.length;
    if (n === 0 || k === 0 || k % n === 0) return nums;
    k = k % n;

    reverse ( 0, (n - 1) - k, nums );
    reverse ( n - k , n - 1, nums );
    reverse ( 0, n - 1, nums );
    return nums;
};