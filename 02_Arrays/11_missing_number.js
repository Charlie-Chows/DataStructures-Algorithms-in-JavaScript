

// OPTIMAL TC : O ( N ) || SC : O ( 1 )
// only work for positive numbers 
function missing_element ( arr ) {
    let sum = 0;
    let n = arr.length + 1
    let natural_num = n * ( n + 1 ) / 2;   // use sum of n natural num formula n * ( n + 1 ) / 2
    for ( let i = 0; i < arr.length; i++ ) {
        sum += arr[i]; 
    }
    let missed_element = natural_num - sum;
    return missed_element;
}

let arr = [ 1,2,3,5 ];
console.log( missing_element ( arr ) );             // 4



// TC : O ( N ) || SC : O ( 1 )
// both positives & negatives
function missing_element_negatives_too(arr) {
    let sum = 0;
    let min = Math.min(...arr); // Find the smallest element
    let max = Math.max(...arr); // Find the largest element
    
    let natural_sum = (max - min + 1) * (max + min) / 2; // Sum of integers in range [min, max]
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Sum of elements in the array
    }
    
    let missed_element = natural_sum - sum;
    return missed_element;
}

let arr1 = [1, 2, 3, 5]; // Works for positives
console.log("Missing element:", missing_element_negatives_too(arr1));           //Missing element: 4

let arrWithNegatives = [-3, -2, 0, 1, 2, 3, 4]; // Works for negatives
console.log("Missing element:", missing_element_negatives_too(arrWithNegatives));      // Missing element: -1
