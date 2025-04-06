

// BRUTE FORCE 
// TC : O ( N ^ 2 );
// SC : O ( 1 )

function longestSubArrayWithSumK ( nums, k ) {
    if ( nums.length === 0 ) return -1;
    let len = 0;
    for ( let i = 0; i < nums.length; i++ ) {
        let sum = 0;
        for ( let j = i; j < nums.length; j++ ) {
            sum = sum + nums[j];
            if ( sum === k ) {
                len = Math.max( len, j - i + 1);
            }
        }
    }
    return len;
}


// OPTIMAL IF ARRAY HAS BOTH POS & NEG 
// TC : O ( N )
// SC : O ( N )

function longestSubArrayWithSumK ( nums, k ) {
    if ( nums.length === 0 ) return -1;
    let maxLen = 0;
    let sum = 0;
    let map = new Map();
    
    for ( let i = 0; i < nums.length; i++ ) {
        sum = sum + nums[i];
        
        // Case 1: If sum itself is equal to k
        if ( sum === k ) {
            maxLen = Math.max(maxLen, i + 1 );
        }
        
        // Case 2: If (sum - k) seen before, subarray exists
        if ( map.has( sum - k ) ) {
            maxLen = Math.max(maxLen, i - map.get(sum - k) );
        }
        
        // Case 3: Only set prefix sum if it's not already in map
        if ( !map.has(sum) ) {
            map.set(sum, i);
        }
    }
    return maxLen;
}


// OPTIMAL ONLY FOR POS 

function longestSubArrayWithSumK ( nums, k ) {
    if ( nums.length === 0 ) return -1;
    let sum = 0;
    let maxLen = 0;
    
    let left = 0;
    let right = 0

    
    while ( right < nums.length ) {
        sum = sum + nums[right];
        
        // Shrink window until sum <= k
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
let k = 3;
console.log(longestSubArrayWithSumK(nums, k));







