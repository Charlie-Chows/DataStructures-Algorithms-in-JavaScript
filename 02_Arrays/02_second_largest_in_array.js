
// OPTIMAL 
// TC : O ( N )
// SC : O ( 1 )

function second_largest_element_in_array ( arr ) {
    let largest = -1;
    let second_largest = -1;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[ i ] > largest ) {
            second_largest = largest;
            largest = arr[ i ];
        }
        if ( arr [ i ] < largest && arr[ i ] > second_largest ) {
            second_largest = arr [ i ];
        }
    }
    return second_largest;
}

let arr = [ 1, 2, 4, 7, 7, 2, 5 ];
console.log ( second_largest_element_in_array( arr ) );