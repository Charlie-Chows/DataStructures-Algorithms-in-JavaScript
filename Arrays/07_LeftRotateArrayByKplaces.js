

// input - arr, k ( how many places to shift )
// output - shifted arr
// test cases - empty arr, single elem

// TC : O ( 2N );
// SC : O ( 1 )

function reverseArray( startIndex, endIndex, arr ) {
    while ( startIndex <= endIndex ) {
        [ arr[startIndex], arr[endIndex] ] = [ arr[endIndex], arr[startIndex] ];
        startIndex++;
        endIndex--;
    }
    return arr;
}

function leftRotateByK ( arr , k ) {
    let length = arr.length;
    if ( length === 0 ) return [];
    if ( length === 1 ) return [arr[0]];
    
    if ( k > length ) {
        k = k % length;
    }
    
    reverseArray( 0, k - 1, arr );
    reverseArray( k, length - 1, arr );
    reverseArray( 0, length - 1, arr );
    
    return arr;
}

const arr = [1, 2, 3, 4, 5];
const k = 7;
console.log( leftRotateByK( arr, k ) );     // [ 3, 4, 5, 1, 2 ]