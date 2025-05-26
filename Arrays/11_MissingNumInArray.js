
// TC : O ( N )
// SC : O ( 1 )


function missingNumberInArray ( arr, n ) {
    let len = arr.length;
    let expectedSum = (n * (n + 1) ) / 2;
    let totalSum = 0;
    for ( let i = 0; i < len; i++ ) {
        totalSum += arr[i];
    }
    return expectedSum - totalSum;
}

let arr = [ 1, 2, 4, 5 ];
let n = 5;
console.log( missingNumberInArray( arr, n ) );      // 3