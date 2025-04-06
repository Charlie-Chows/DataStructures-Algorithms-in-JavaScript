// leetcode : https://leetcode.com/problems/rearrange-array-elements-by-sign/description/
// leetcode - 2149 - medium

// BRUTE FORCE
// TC : O ( 2N )
// SC : O ( N )

function rearrangeArrayElementsBySign ( nums ) {
    let n = nums.length;
    if ( n === 0 ) return -1;
    let positiveArray = [];
    let negativeArray = [];
    for ( let i = 0; i < n; i++ ) {
        if ( nums[i] > 0 ) {
            positiveArray.push(nums[i]);
        }
        else {
            negativeArray.push(nums[i]);
        }
    }
    
    for ( let i = 0; i < positiveArray.length; i++ ) {
        nums[2 * i] = positiveArray[i];
        nums[2 * i + 1 ] = negativeArray[i];
    }
    return nums;
}


// OPTIMAL 
// TC : O ( N )
// SC : O ( N )

function rearrangeArrayElementsBySign ( nums ) {
    let n = nums.length;
    if ( n === 0 ) return -1;
    let resultArray = [];
    let even = 0;
    let odd = 1;
    for ( let i = 0; i < n; i++ ) {
        if ( nums[i] > 0 ) {
            resultArray[even] = nums[i];
            even = even + 2;
        }
        else {
            resultArray[odd] = nums[i];
            odd = odd + 2;
        }
    }
    return resultArray;
}

let arr = [3, 1, -2, -5, 2, -4];
console.log(rearrangeArrayElementsBySign(arr));     // [ 3, -2, 1, -5, 2, -4 ]


// fallow up if positives & negatives are not equal 

function rearrangeBySignUnequalCounts ( nums ) {
    let n = nums.length;
    if ( n === 0 ) return -1;
    let positiveArray = [];
    let negativeArray = [];
    for ( let i = 0; i < n; i++ ) {
        if ( nums[i] > 0 ) {
            positiveArray.push(nums[i]);
        }
        else {
            negativeArray.push(nums[i]);
        }
    }
    
    let i = 0, j = 0, k = 0;

    // Alternate until one of the arrays runs out
    while (i < positiveArray.length && j < negativeArray.length) {
        nums[k++] = positiveArray[i++];
        nums[k++] = negativeArray[j++];
    }

    // Append remaining positives
    while (i < positiveArray.length) {
        nums[k++] = positiveArray[i++];
    }

    // Append remaining negatives
    while (j < negativeArray.length) {
        nums[k++] = negativeArray[j++];
    }
    
    return nums;
}

let nums = [3, 1, -2, -5, 2, -4, 7];
console.log(rearrangeBySignUnequalCounts(nums));