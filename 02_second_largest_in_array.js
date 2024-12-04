

// OPTIMAL - N
function second_largest_in_array ( arr ) {
    if (arr.length < 2) {
        return "Array must have at least two distinct elements"; // Handle too few elements
    }

    let lar = -Infinity;
    let sec_lar = -Infinity;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] > lar ) {
            sec_lar = lar;
            lar = arr[i];
        }
        else if (arr[i] > sec_lar && arr[i] !== lar) { // 
            sec_lar = arr[i];
        }
    }
    if ( sec_lar === -Infinity ) {
        return "No second largest element found"; // if all values are identical
    }   
    return sec_lar;
}
// Test cases
console.log(second_largest_in_array([])); // "Array must have at least two distinct elements"
console.log(second_largest_in_array([5])); // "Array must have at least two distinct elements"
console.log(second_largest_in_array([5, 5, 5, 5])); // "No second largest element found"
console.log(second_largest_in_array([1, 4, 6, 7, 8, 9, 9, 10, 10])); // 9
console.log(second_largest_in_array([10, 10, 10, 10])); // "No second largest element found"
