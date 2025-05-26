
// TC : O ( 2N )
// SC : O ( N )
// OPTIMAL - if array is unsorted

function findNumberThatAppearOnce ( arr ) {
    let map = new Map();
    
    for ( let i = 0; i < arr.length; i++ ) {
            map.set(arr[i], (map.get(arr[i]) || 0 ) + 1);
    }
    
    for ( const [num,count] of map.entries() ) {
        if ( count === 1 ) return num;
    }
    
    return -1;
}

let arr = [ 1, 1, 2, 2, 3, 4, 4, 5, 5 ];
console.log( findNumberThatAppearOnce ( arr ) );        // 3



// TC : O ( N )
// SC : O ( 1 )
// OPTIMAL - if array is sorted

function findNumberThatAppearOnce ( arr ) {
    let n = arr.length;
    
    if ( arr[0] !== arr[1] ) return arr[0];
    if ( arr[n - 1] !== arr[n - 2] ) return arr[n - 1];
    
    for ( let i = 1; i < arr.length - 1; i++ ) {
        if ( arr[i] !== arr[i-1] && arr[i] !== arr[i + 1]) {
            return arr[i];
        }
    }
    return -1;
}

let arr1 = [ 1, 1, 2, 2, 3, 4, 4, 5, 5 ];
console.log( findNumberThatAppearOnce ( arr1 ) );        // 3