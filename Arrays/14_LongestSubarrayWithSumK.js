
// TC : O ( N ^ 2 )
// SC : 0 ( 1 )
// BRUTE

function longestSubArrayWithSumK ( arr, k ) {
    let maxLength = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        let currentSum = 0;
        for ( let j = i; j < arr.length; j++ ) {
            currentSum += arr[j];
            if ( currentSum === k ) {
                maxLength = Math.max( maxLength, j - i + 1 );
            }
        }
    }
    return maxLength;
}

let arr = [1, 2, 3, 1, 1, 1, 1];
let k = 5;
console.log(longestSubArrayWithSumK(arr, k)); // Output should be 3



// TC : O ( N )
// SC : O ( N )
// OPTIMAL - if arr has POS & NEG 

function longestSubarrayWithSumKUsingHashing ( arr, k ) {
    let maxLength = 0;
    let currentSum = 0;
    let map = new Map();
    
    for ( let i = 0; i < arr.length; i++ ) {
        currentSum += arr[i];
        
        if ( currentSum === k ) {
            maxLength = Math.max( maxLength, i+1);
        }
        
        if ( map.has(currentSum - k) ) {
            maxLength = Math.max(maxLength, i - map.get(currentSum - k));
        }
        
        if ( !map.has(currentSum)) {
            map.set(currentSum,i);
        }
    }
    return maxLength;
}

let arr2 = [1, -1, 5, -2, 3];
let k2 = 3;
console.log(longestSubarrayWithSumKUsingHashing(arr2, k2)); // Output: 4 ([1, -1, 5, -2])


// TC : O ( N ) 
// SC : O ( 1 )
// OPTIMAL ONLY FOR POS 

function longestSubArrayWithSumK ( nums, k ) {
    if ( nums.length === 0 ) return -1;
    let sum = 0;
    let maxLen = 0;
    
    let left = 0;
    let right = 0

    
    while ( right < nums.length ) {
        sum = sum + nums[right];
        
        // Shrink window if sum exceeds target
        while (sum > k && left <= right) {
            sum -= nums[left];
            left++;
        }
        
        if ( sum === k ) {
            maxLen = Math.max(maxLen, right - left + 1);
        }
        right++;
    }
    return maxLen;
}


let nums = [1, 2, 3, 1, 1, 1, 1];
let k1 = 3;
console.log(longestSubArrayWithSumK(nums, k1));     // 3