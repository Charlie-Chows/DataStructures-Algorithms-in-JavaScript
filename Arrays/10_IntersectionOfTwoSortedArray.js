
// TC : O ( N )
// SC : O ( 1 )

function intersectionArray ( arr1, arr2 ) {
    let n1 = arr1.length;
    let n2 = arr2.length;
    let resultArray = [];
    
    let i = 0, j = 0;
    
    while ( i < n1 && j < n2 ) {
        if ( arr1[i] < arr2[j] ) {
            i++;
        }
        else if ( arr1[i] > arr2[j] ) {
            j++;
        }
        else {  
            resultArray.push( arr1[i] );    // If both values are same
            i++;
            j++;
        }
    }
    return resultArray;
}

let arr1 = [ 1, 2, 2, 3, 3, 4, 5, 7, 7 ];
let arr2 = [ 2, 3, 3, 4, 6, 7 ];
console.log( intersectionArray( arr1, arr2 ) );     // [ 2, 3, 3, 4, 7 ]