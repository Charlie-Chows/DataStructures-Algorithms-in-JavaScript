// leetcode : https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/
// leetcode - 1752 - easy

// TC : O ( N )
// SC : O ( 1 )

function array_is_sorted_and_rotated ( arr ) {
    let count = 0;
    let n = arr.length;
    for ( let i = 0; i < n; i++ ) {
        if ( arr[i] > arr[(i+1) % n] ) {
            count++;
        }
        if ( count > 1 ) return false;
    }
    return true;
}

let arr1 = [ 3, 4, 5, 1, 2 ];
console.log ( array_is_sorted_and_rotated ( arr1 ) );



// my approach
// TC : O ( 3N )
// SC : O ( 1 )
function reverse( startIndex, endIndex, arr ) {
    while ( startIndex < endIndex ) {
        [ arr[startIndex], arr[endIndex] ] = [ arr[endIndex], arr[startIndex] ];
        startIndex++;
        endIndex--
    }
    return arr;
}

function array_is_sorted_and_rotated ( arr ) {
    let breakout = -1;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr [i + 1] < arr[i] ) {
            breakout = i;
        }
    }
    reverse ( 0, breakout, arr );
    reverse ( breakout + 1, arr.length - 1,  arr );
    reverse ( 0, arr.length-1, arr );
    
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] > arr[i+1] ) {
            return false;
        }
    }
    return true;
}

let arr = [ 3, 4, 5, 1, 2 ];
console.log ( array_is_sorted_and_rotated ( arr ) );
