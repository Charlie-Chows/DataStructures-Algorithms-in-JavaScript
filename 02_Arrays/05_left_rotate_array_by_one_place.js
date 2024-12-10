
// Two pointer approach { OPTIMAL }
// TC : O ( N );
function left_rotate_array_by_one_place ( arr ) {
    let one_elem = arr[0];
    for ( let i = 1; i < arr.length; i++ ) {
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = one_elem;
    return arr;
}

let arr = [ 1, 2, 3, 4, 5];
console.log( left_rotate_array_by_one_place( arr ) );