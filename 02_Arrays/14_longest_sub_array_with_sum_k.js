 /**
  * SUB ARRAY : contigious part of an array
  * 
  * let arr = [ 1, 2, 3, 4 ]
  * 
  * sub arrays of these above array 
  * 
  * []                  // empty array also a sub array 
  * [ 1 ]
  * [ 2 ]
  * [ 3 ]
  * [ 4 ]
  * [ 1, 2 ]
  * [ 2. 3 ]
  * [ 3, 4 ]
  * [ 1, 2, 3 ]
  * [ 2, 3, 4 ]
  * [ 1, 2, 3, 4 ]     // full array also a sub array 
  * 
  * 
  * sub array = n * ( n + 1 ) / 2  || 4 * ( 4 + 1 ) / 2 = 10 ( without empty array ) 
  * 
  * sum of n natural num & find sub all array without empty , both formulas are same 
  * 
  *  */ 


// BRTUTE FORCE : TC - O ( N ^ 2 ) || O ( 1 )
 function longest_sub_array_with_sum_k ( arr, k ) {
    let len = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        let sum = 0;
        for ( let j = i; j < arr.length; j++ ) {
            sum += arr[j];
            if ( sum === k ) {
                len =  Math.max (len, j - i + 1 );
            }
        }
    }
    return len;
 }

 let arr = [ 1, 2, 3, 1, 1, 1, 1, 4, 2, 3 ];
 let k1 = 4;
 console.log( longest_sub_array_with_sum_k ( arr, k1 ) );


 // Approach : HASHING 
 // BETTER : TC - O ( N ) || SC - O ( N )  
 // This solution is the OPTIMAL  if array both positive & negative numbers 

function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let preSumMap = new Map();
    let sum = 0;
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        // calculate the prefix sum till index i
        sum += a[i];

        // if the sum = k, update the maxLen
        if (sum === k) {
            maxLen = Math.max(maxLen, i + 1);
        }

        // calculate the sum of remaining part i.e. x - k
        let rem = sum - k;

        // calculate the length and update maxLen
        if (preSumMap.has(rem)) {
            let len = i - preSumMap.get(rem);
            maxLen = Math.max(maxLen, len);
        }

        // update the map checking the conditions
        if (!preSumMap.has(sum)) {
            preSumMap.set(sum, i);
        }
    }

    return maxLen;
}

let a = [2, 3, 5, 1, 9];
let k = 10;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);



// Approach : TWO POINTER
// OPTIMAL : TC - O ( N ) || SC - O ( 1 )
// this is optimal only for positive numbers only if there is 0 or negatives BETTER  solution is the optimal one

function longest_subarray_with_sum_k(arr, k) {
    let i = 0, j = 0, sum = 0, len = 0;

    while (j < arr.length) {
        // Add the current element to the sum
        sum += arr[j];

        // If the sum exceeds `k`, shrink the window from the left
        while (sum > k) {
            sum -= arr[i];
            i++;
        }

        // If the sum equals `k`, update the length
        if (sum === k) {
            len = Math.max(len, j - i + 1);
        }

        // Expand the window by moving `j`
        j++;
    }

    return len;
}

let arr1 = [1, 2, 3, 1, 1, 1, 1, 3, 3];
let k2 = 6;
console.log(longest_subarray_with_sum_k(arr1, k2)); // Output: 4
