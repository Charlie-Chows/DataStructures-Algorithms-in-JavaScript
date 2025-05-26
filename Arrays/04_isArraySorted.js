// TC : O ( N )
// SC : O ( 1 )

// input - arr 
// output - true/false

// testcases - empty arr , single elem

function isArraySorted ( arr ) {
    if ( arr.length === 0 ) return -1;
    if ( arr.length === 1 ) return true;
    
    for ( let i = 0; i < arr.length - 1; i++ ) {
        if ( arr[i+1] < arr[i] ) {
            return false;
        }
    }
    return true;
}

const arr = [2, 5, 9, 13, 21, 30];
console.log( isArraySorted( arr ) );    // true