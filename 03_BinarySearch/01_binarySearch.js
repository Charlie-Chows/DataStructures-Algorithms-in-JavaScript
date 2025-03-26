// leetcode : https://leetcode.com/problems/binary-search/description/
// leetcode - 704 - easy 

// TC : O ( Log N )
// SC : O ( 1 )

function binary_search ( arr , target ) {
    let low = 0;
    let high = arr.length - 1;
    while ( low <= high ) {
        let mid = low + Math.floor( ( high - low ) / 2 );
        if ( arr[mid] === target ) return mid;
        else if ( target > arr[mid] ) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
}

let arr = [ 1, 3, 5, 7, 8, 10 ];
let target = 8;
console.log( binary_search( arr, target ) );    // 4