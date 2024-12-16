

// BRUTE : TC - O ( 2N ) || SC - O ( N )
// it will work only if both +ve & -ve elements are equal
function rearrange_elem_by_sign ( arr ) {
    let positive_arr = [];
    let negative_arr = [];

    // Separate positive and negative elements 
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] > 0 ) {
            positive_arr.push( arr[i] );
        }
        else {
            negative_arr.push( arr[i] );
        }
    }
    
    // Interleave positive and negative elements back into arr
    for ( let i = 0; i < arr.length / 2; i++ ) {
        arr[ 2 * i ] = positive_arr[i];
        arr[ 2 * i + 1 ] = negative_arr[i];
    }
    return arr;  // Return the modified array
}

let arr = [1, 2, 3, -1, -2, -3];
console.log(rearrange_elem_by_sign(arr)); // Output: [1, -1, 2, -2, 3, -3]


// not significant optimal but little better
// OPTIMAL : TC - O ( N ) || SC - O ( N )
function rearrange_elem_by_sign_optimal ( arr ) {
    let res = [];
    let positive_index = 0, negative_index = 1;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] < 0 ) {
            res[negative_index] = arr[i];
            negative_index += 2;
        }
        else {
            res[ positive_index ] = arr[i];
            positive_index += 2;
        }
    }
    return res;
}

let arr2 = [ 1,2,3,-1,-2,-3];
console.log ( rearrange_elem_by_sign_optimal ( arr ) );


// FALLOW UP : may be +ve & -ve not be equal
// OPTIMAL : FALL BACK TO BRUTE THAT IS OPTIMAL 
function rearrange_elem_by_sign_fallowUp(arr) {
    let positive_arr = [];
    let negative_arr = [];

    // Separate positive and negative elements
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive_arr.push(arr[i]);
        } else {
            negative_arr.push(arr[i]);
        }
    }

    let result = [];
    let i = 0, j = 0;

    // Merge arrays alternately
    while (i < positive_arr.length && j < negative_arr.length) {
        result.push(positive_arr[i++]);
        result.push(negative_arr[j++]);
    }

    // Add remaining elements (if one list is longer)
    while (i < positive_arr.length) {
        result.push(positive_arr[i++]);
    }
    while (j < negative_arr.length) {
        result.push(negative_arr[j++]);
    }

    return result;
}

// Example usage
let arr1 = [1, 2, -1, -2, 3, -3,4,5];
console.log(rearrange_elem_by_sign_fallowUp( arr1 ) ); // Output: [1, -1, 2, -2, 3, -3,4]
