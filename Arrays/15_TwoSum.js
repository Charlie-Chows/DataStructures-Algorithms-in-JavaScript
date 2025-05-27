// LC : https://leetcode.com/problems/two-sum/description/
// LC - 1 - easy

// Two Variations 
//  - return true of false ( twoSum exist or not )
//  - return indexes



// TC : O ( N ^ 2 )
// SC : O ( 1 )
// BRUTE

function twoSum ( arr, k ) {
    for ( let i = 0; i < arr.length; i++ ) {
        for ( let j = i; j < arr.length; j++ ) {
            if ( arr[i] + arr[j] === k ) {
                return true;    // return [i,j]
            }
        }
    }
    return false;   // return -1
}

let arr = [ 2, 6, 5, 8, 11 ];
let k = 14;
console.log( twoSum(arr, k ))   // true



// TC : O ( N )
// SC : O ( N )
// OPTIMAL

function twoSum ( arr, k ) {
    let map = new Map();
    for ( let i = 0; i < arr.length; i++ ) {
        let rem = k - arr[i]
        if ( map.has( rem ) ) {
            return [ map.get( rem ), i ]
        }
        map.set( arr[i], i );
    }
    return -1;
}

let arr2 = [ 2, 6, 5, 8, 11 ];
let k2 = 14;
console.log( twoSum(arr2, k2 ))   // [ 1, 3 ]



// TC : O ( N Log N )
// SC : O ( 1 )
// OPTIMAL ( only if map is not allowed ), to return indexes hashing is good approach

function twoSum ( arr, k ) {
    arr.sort( (a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;
    while ( left <= right ) {
        let sum = arr[left] + arr[right];
        if ( sum > k ) {
            right--;
        }
        else if ( sum < k ) {
            left++;
        }
        else {
            return [ arr[left] , arr[right] ];
        }
    }
    return -1;

}
let arr3 = [ 2, 6, 5, 8, 11 ];
let k3 = 14;
console.log( twoSum(arr3, k3 ))   // [ 6, 8 ]