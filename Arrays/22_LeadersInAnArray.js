
// TC : O ( N )
// SC : O ( 1 )


function leadersInArray ( arr ) {
    let leadersArray = [];
    let max = arr[arr.length - 1];
    leadersArray.push(max);
    
    for ( let i = arr.length - 2; i >= 0; i-- ) {
        if ( arr[i] > max ) {
            leadersArray.push(arr[i]);
            max = arr[i];
        }
    }
    return leadersArray;
}

let arr = [ 10, 22, 12, 3, 0, 6 ];
console.log( leadersInArray( arr ) );   // [ 6, 12, 22 ]