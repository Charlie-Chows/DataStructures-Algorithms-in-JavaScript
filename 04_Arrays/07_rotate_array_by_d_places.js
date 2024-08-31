// ROTATE ARRAY BY K PLACES 

// Problem link : https://leetcode.com/problems/rotate-array/description/

/***
 * Difference between left & right rotate array is 
 * 1) In right rotation we reverse entire array at first , but in left we reverse entire array at last 
 * */ 




// ROTATE ARRAY BY K PLACES 
function reverseArray ( arr, start, end ) {
    while ( start < end ) {
        [ arr[start] , arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

function leftRotateArray ( arr, d ) {
    let n = arr.length;
    d = d % n;
    reverseArray(arr,0,d-1);
    reverseArray(arr,d,n-1);
    reverseArray(arr,0,n-1);
    return arr;
} 

function rightRotateArray ( arr, d ) {
    let n = arr.length;
    d = d % n;
    reverseArray(arr,0,n-d-1);
    reverseArray(arr,n-d,n-1);
    reverseArray(arr,0,n-1);
    return arr;
} 

let array1 = [1,2,3,4,5,6,7];
let array2 = [1,2,3,4,5,6,7];
console.log(leftRotateArray(array1,3));     // [4, 5, 6, 7, 1, 2, 3]
console.log(rightRotateArray(array2,3));    // [5, 6, 7, 1, 2, 3, 4]




