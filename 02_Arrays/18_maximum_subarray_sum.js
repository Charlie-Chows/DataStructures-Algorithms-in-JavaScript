// leetcode : https://leetcode.com/problems/maximum-subarray/description/
// leetcode - 53 - medium


// BRUTE 
// TC : O ( N ^ 2 )
// SC : O ( 1 )

function maximumSubarraySum ( nums ) {
    let n = nums.length;
    if ( n === 0 ) return -1;
    let maxSum = 0;
    for ( let i = 0; i < n; i++ ) {
        let sum = 0;
        for ( let j = i; j < n; j++ ) {
            sum = sum + nums[j];
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}

// OPTIMAL { KADANE'S ALGO }
// TC : O ( N )
// SC : O ( 1 )

function maximumSubarraySum ( nums ) {
    let n = nums.length;
    if ( n === 0 ) return -1;
    let maxSum = Number.NEGATIVE_INFINITY;
    let sum = 0;
    for ( let i = 0; i < n; i++ ) {
        sum = sum + nums[i];
        maxSum = Math.max(maxSum, sum);
        if ( sum < 0 ) {
            sum = 0;
        }
    }
    return maxSum;
}

// fallowup 
// if interveivwer ask to return index of that subarray
// slight changes in above problem 

function maximumSubarraySum ( nums ) {
    let n = nums.length;
    if ( n === 0 ) return -1;
    let maxSum = Number.NEGATIVE_INFINITY;
    let sum = 0;
    let start = 0;
    let startIndex = -1;
    let endIndex = -1;
    for ( let i = 0; i < n; i++ ) {
        if ( sum === 0 && nums[i] > 0 ) start = i;
        sum = sum + nums[i];
        if ( sum > maxSum ) {
            maxSum = sum;
            startIndex = start;
            endIndex = i;
        }
        if ( sum < 0 ) {
            sum = 0;
        }
    }
    return [startIndex, endIndex];
}

console.log( maximumSubarraySum( [ -2, 1, -3, 4, -1, 2, 1, -5, 4 ] ) ) // Output: 6