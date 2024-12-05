
// BRUTE FORCE -O ( N Log N )
function largest_element_in_array(arr) {

    arr.sort((a, b) => b - a);
    return arr[ 0]; // sort always work as descending order
}

let arr2 = [-1, 0,1,15, -2,9];
console.log(largest_element_in_array(arr2)); 


// OPTIMAL - O ( N )
function largest_element_in_array ( arr ) {

    let n = arr.length;
    let lar = -Infinity;

    for ( let i = 0; i < n; i++ ) {
        if ( arr [ i ] > lar ) {
            lar = arr [ i ];
        }
    }
    return lar;
}

let arr = [ -1, 0, -2 ];
console.log( largest_element_in_array( arr ) );