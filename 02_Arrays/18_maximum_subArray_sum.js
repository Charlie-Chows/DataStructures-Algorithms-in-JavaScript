


// BRUTE : TC - 0 ( N^2 ) || SC - O ( 1 );

function maximum_subarray_sum ( arr ) {
    let maxSum = -Infinity;
    for ( let i = 0; i < arr.length; i++ ) {
        let sum = 0;
        for (  let j = i; j < arr.length; j++ ) {
           sum = sum + arr[j];
            maxSum = Math.max(maxSum,sum);
        }
    }
    return maxSum;
}

let arr1 = [ -2, -3, 4, -1, -2, 1, 5, -3 ];
console.log( maximum_subarray_sum ( arr1 ) );   // 7


// OPTIMAL : TC - O ( N ) || SC - O ( 1 )
// APPROACH : kadane's algo

function kadanes_algo ( arr ) {
    let max = -Infinity;
    let sum = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        sum = sum + arr[i];
        max = Math.max( sum, max );
        if ( sum < 0 ) sum = 0;
    }
    return max;
}

let arr2 = [-2, -3, -1, -5];
console.log(kadanes_algo( arr2 ) ); // Output: -1 (maximum of the subarray [-1])

let arr3 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(kadanes_algo( arr3 ) ); // Output: 6 (maximum subarray [4, -1, 2, 1])


// fallow up question 
// print indexes or max sub array 
function kadanes_algo(arr) {
    let max = -Infinity; 
    let sum = 0; 
    let start = 0; // Start index of the current subarray
    let end = 0; // End index of the maximum subarray
    let tempStart = 0; // Temporary start index

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum > max) {
            max = sum;
            start = tempStart; // Update start index
            end = i; // Update end index
        }

        if (sum < 0) {
            sum = 0; // Reset running sum
            tempStart = i + 1; // Move temporary start index to next element
        }
    }

    // Return both the maximum sum and the subarray or indices
    return { maxSum: max, subarray: arr.slice(start, end + 1), indices: [start, end] };
}

let arr4 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(kadanes_algo(arr4));
// Output: { maxSum: 6, subarray: [4, -1, 2, 1], indices: [3, 6] }
