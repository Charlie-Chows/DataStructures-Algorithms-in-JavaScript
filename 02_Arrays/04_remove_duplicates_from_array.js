

// TC : O( N )
function remove_duplicates_from_sorted_array ( arr ) {

    if ( arr.length === 0 ) {
        return "Empty Array";
    }

    if ( arr.length === 1 ) {
        return 1;  // Number of unique elements
    }

    let i = arr[0];
    let j = arr[ i + 1 ];

    for ( let i = 0; i < arr.length - 1; i++ ) {
        if ( arr[i] === arr[j] ) {
            j++;
        }
        else {
            i++;
            [ arr[ i ] , arr [ j ] ] = [arr[j ], arr[i] ];
            j++
        }
    }
    return i + 1; // unique elements in array
}

let arr = [ 1,1,2,2,2,3,3,3];
console.log( remove_duplicates_from_sorted_array ( arr ) );