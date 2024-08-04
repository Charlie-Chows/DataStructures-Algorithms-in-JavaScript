// Problem link GFG :  https://www.geeksforgeeks.org/problems/largest-element-in-array4009/0



// BRUTE FORCE - O ( NlogN ) 
function sortArrBrute ( arr ) {
    arr.sort ( ( a, b ) => a - b );
    return arr[ arr.length - 1 ];
}

// OPTIMAL - O ( N )
function sortArrOptimal ( arr ) {
    let largest = arr[0];
    for ( let i = 1; i < n; i++ ){
        if ( arr[i] > largest ){
            largest = arr[i];
        }
    }
    return largest;
}

let arr = [ 2, 5, 1, 0, 3];
console.log( sortArrBrute ( arr ) );
console.log( sortArrOptimal ( arr ) );