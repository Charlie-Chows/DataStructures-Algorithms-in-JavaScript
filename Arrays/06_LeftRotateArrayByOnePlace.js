

// input - array
// output - rotated array with 1 place 
// test cases - empty array , single elem

// TC : 0 ( N )
// SC : O ( 1 )

function leftRotateByOne ( arr ) {
    let len = arr.length;
    if ( len === 0 ) return [];
    if ( len === 1 ) return [arr[0]];
    
    let elem = arr[0];
    
    // Note: Use loop till len - 1 to avoid accessing arr[len], which is out of bounds.
    for ( let i = 0; i < len - 1; i++ ) {
        arr[i] = arr[i+1];
    }
    
    arr[len-1] = elem;
    
    return arr;
}

const arr = [1, 2, 3, 4, 5];
console.log(leftRotateByOne(arr));      // [ 2, 3, 4, 5, 1 ]