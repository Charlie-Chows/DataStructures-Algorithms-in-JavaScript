
// TC : O ( N )
// SC : O ( 1 )

// input - arr
// output - second lar elem
// test cases - empty arr, single elem 

function secondLargestElement ( arr ) {
    if ( arr.length === 0 ) return -1;
    if( arr.length === 1 ) return "Only one element present";
    
    let lar = -Infinity;
    let secondLar = -Infinity;
    
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] > lar ) {
            secondLar = lar;
            lar = arr[i];
        }
        else if ( arr[i] < lar && arr[i] > secondLar ) {
            secondLar = arr[i];
        }
    }
    
    
    return secondLar === -Infinity ? -1 : secondLar;
}

const arr = [12, 45, 2, 67, 34, 89, 5];
console.log( secondLargestElement( arr ) );     // 67