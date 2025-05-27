// LC : https://leetcode.com/problems/maximum-subarray/description/
// LC - 53 - medium

// TC : O ( N ) 
// SC : O ( 1 )
// OPTIMAL - kadane's algo

function longestSubarraySum ( arr ) {
    let sum = 0;
    let max = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        sum += arr[i];
        if ( sum > max ) {
            max = sum;
        }
        if ( sum < 0 ) {
            sum = 0;
        }
    }
    max = Math.max( sum, max );
    return max;
}

let arr = [ -2, -3, 4, -1, -2, 1, 5, -3 ];
console.log( longestSubarraySum( arr ) );       // 7



// TC : O ( N ^ 2 )
// SC : O ( 1 )
// BRUTE 

function longestSubarraySum ( arr ) {
    let max = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        let sum = 0;
        for ( let j = i; j < arr.length; j++ ) {
            sum += arr[j];
            max = Math.max(sum,max);
        }
    }
    return max;
}

let arr1 = [ -2, -3, 4, -1, -2, 1, 5, -3 ];
console.log( longestSubarraySum( arr1 ) );       // 7


// EXTENDED VERSION IF ASK FOR INDEXS - FOR KADANE'S

function longestSubarraySum ( arr ) {
    let sum = 0;
    let max = 0;    
    let start = 0;
    let ansStart = -1;
    let ansEnd = -1;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( sum === 0 ) start = i;
        sum += arr[i];
        if ( sum > max ) {
            max = sum;
            ansStart = start;
            ansEnd = i;
        }
        if ( sum < 0 ) {
            sum = 0;
        }
    }
    max = Math.max( sum, max );
    return [ ansStart, ansEnd ];
}

let arr3 = [ -2, -3, 4, -1, -2, 1, 5, -3 ];
console.log( longestSubarraySum( arr3 ) );       // [ 2, 6 ]
