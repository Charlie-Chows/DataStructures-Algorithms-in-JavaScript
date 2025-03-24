// OPTIMAL
// TC : O ( N )
// SC : O ( 1 )

function left_rotate_array_by_one_place ( arr ) {
    let elem = arr[0];
    for ( let i = 1; i < arr.length; i++ ) {
        arr[ i - 1 ] = arr[ i ];
    }
    arr[arr.length - 1] = elem;
    return arr;
}

let arr = [ 1,2,3,4,5 ];
console.log(left_rotate_array_by_one_place( arr ));