// leetcode : https://leetcode.com/problems/kth-largest-element-in-an-array/description/
// leetcode - 215 - Medium

// TC : O ( N LOG N )
// SC : O ( 1 )


function kth_largest_element_in_array ( arr , k ) {
    if ( nums.length === 0 ) return null;
    nums.sort((a,b) => b - a );  // decending sort
    let count = 1;  // 1st unique element
    for ( let i = 1; i < nums.length; i++ ) {
        if ( nums[i] !== nums[i-1] ) {
            count++;
        }
        if ( count === k ) {
            return nums[i];
        }
    }
    return -1;
}

let arr = [7, 7, 6, 6, 5, 4, 3, 2, 1]
let k = 3;
console.log( kth_largest_element_in_array ( arr, k ) );


// without sorting 
// TC : O ( K * N )
// SC : O ( 1 )

function findKthLargestDistinct(arr, k) {
    let largest = -Infinity;

    // Step 1: Find the largest element
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    let count = 1; // Track distinct elements found

    while (count < k) {
        let nextLargest = -Infinity;

        // Step 2: Find the next largest distinct element
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < largest && arr[i] > nextLargest) {
                nextLargest = arr[i];
            }
        }

        if (nextLargest === -Infinity) return -1; // If K is too large
        largest = nextLargest;
        count++;
    }

    return largest;
}

// Test cases
console.log(findKthLargestDistinct([7, 7, 6, 6, 5, 4, 3, 2, 1], 3)); // Output: 5
console.log(findKthLargestDistinct([7, 7, 6, 6, 5, 4, 3, 2, 1], 5)); // Output: 3
console.log(findKthLargestDistinct([3, 3, 3, 3, 3], 2)); // Output: -1
