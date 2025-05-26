
// TC : O ( N )
// SC : O ( 1 )


// input - arr
// output - largest elem
// Test cases - empty arr, single elem

function largestElementInArray ( arr ) {
    
    if ( arr.length === 0 ) return -1;
    if ( arr.length === 1 ) return arr[0];
    
    let lar = -Infinity;
    for ( let i = 0; i < arr.length; i++ ) {
        lar = Math.max(lar,arr[i]);
    }
    return lar;
}

const arr = [12, 45, 2, 67, 34, 89, 5];
console.log( largestElementInArray(arr) );      // 89


// simple for of syntax if allowed
// for ( const num of arr ) {
//     lar = Math.max( lar,num );
// }