

// input - array 
// output - result array with zeroes at last 
// test cases - empty arr, single elem

// TC : O ( N ) 
// SC : O ( 1 )

function moveZeroesToEnd ( arr ) {
    let n = arr.length;
    if( n === 0 ) return -1;
    if( n === 1 ) return -1;
    
    let nonZeroIndex = 0;
    
    // to find first zero
    for ( nonZeroIndex = 0; nonZeroIndex < n; nonZeroIndex++ ) {
        if ( arr[nonZeroIndex] === 0 ) {
            break;
        }
    }
    
    for ( let i = nonZeroIndex + 1; i < n; i++ ) {
        if ( arr[i] !== 0 ) {
            [ arr[i], arr[nonZeroIndex] ] = [ arr[nonZeroIndex], arr[i] ];
            nonZeroIndex++;
        }
    }
    
    return arr;
}

const arr = [0, 1, 0, 3, 12];
console.log( moveZeroesToEnd ( arr ) );     // [ 1, 3, 12, 0, 0 ]