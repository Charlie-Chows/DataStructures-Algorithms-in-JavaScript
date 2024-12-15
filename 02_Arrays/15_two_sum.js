/**
 * This problem has two variations 
 *  - check whether the sum of k is there or not ( true or false )
 *  - sum of k is there we need to return those two indexes  
 */


// BRUTE FORCE 
// TC - O ( N ^ 2 ) || SC - O ( 1 )
function two_sum ( arr , k ) {
    for ( let i = 0; i < arr.length; i++ ) {
        for ( let j = i + 1; j < arr.length; j++ ) {  
            if ( arr[i] + arr[j] === k ) return true;    //  if ( arr[i] + arr[j] === k ) return [i,j]; if index needed
        }
    }
    return false;  // return "target not found"
}

let arr1 = [ 2, 6, 5, 8, 11 ];
let k = 14;
console.log( two_sum ( arr1, k ) );




// BETTER : HASHING
// TC - 0 ( N ) + O ( N logN ) || SC - O ( N ) 
// to return indexes this is optimal one 
function two_sum(arr, k) {
    let seen = new Map(); // To store the number and its index
    for (let i = 0; i < arr.length; i++) {
        let complement = k - arr[i];
        if (seen.has(complement)) {
            return true; // or return [arr[i], complement] if you want the pair
        }
        seen.set(arr[i], i); // Store the number and its index
    }
    return false; // return "target not found"
}

let arr2 = [2, 6, 5, 8, 11];
let k2 = 15;
console.log(two_sum(arr2, k2)); // Output: false


// OPTIMAL 
// TC - O ( N LOGN ) || SC - O ( 1 )
function twoSum ( arr, k ) {
    arr.sort((a, b) => a - b);
    let i = 0, j = arr.length - 1;
    while ( i < j ) {
        let sum = arr[i] + arr[j];
        if ( sum === k ) {
            return [arr[i], arr[j] ];
        }
        else if ( sum < k ) {
            i++;
        }else {
            j--;
        }
    }
    return "Not found";
}

let arr3 = [ 2, 6, 5, 8, 11 ];
let k3 = 14;
console.log( twoSum ( arr3, k3 ) );