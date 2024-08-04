// GFG : https://www.geeksforgeeks.org/problems/second-largest3735/1

// BRUTE FORCE - O ( NlogN ) + N = O ( NlogN )
function secondlargestBrute ( arr ,n  ) {
    arr.sort( ( a, b ) => a - b );
    let largest = arr[ n-1 ];
    let second_Largest = arr[ n -2 ];
    for ( let i = n - 2; i >= 0; i-- ) {
        if ( arr[ i ] < largest ) {
            second_Largest = arr [ i ];
            break;
        }
    }
    return second_Largest;
}

let arr = [ 9, 78, 7, 4, 98, 70 ];
console.log ( secondlargestBrute ( arr, arr.length ) );

//OPTIMAL - O ( N )
function secondlargestOptimal ( arr ,n ) {
    let largest = arr[ n-1 ];
    let second_Largest = -1;    // it shows up as output only when every element is largest like [ 7,7,7,7,7]
    for ( let i = 1; i < n; i++ ) {
       if ( arr[i] > largest ) {
        second_Largest = largest;
        largest = arr[i];
       }
       else if ( arr [i] > second_Largest && arr[i] !== largest){
        second_Largest = arr[i];
       }
    }
    return second_Largest;
}

let arr1 = [ 9, 78, 7, 4, 98, 70 ];
console.log ( secondlargestOptimal ( arr1, arr1.length ) );