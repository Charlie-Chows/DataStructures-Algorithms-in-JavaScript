
// OPTIMAL : TC - O ( N ) || SC - O ( 1 )
function find_number_which_appear_once_while_other_appear_twice_in_sorted_array ( arr ) {
        if ( arr[0] !== arr[1] ) return arr[0];
        if ( arr[arr.length -1] !== arr[ arr.length - 2] ) return arr[arr.length - 1];
        for ( let i = 1; i < arr.length - 1; i++ ) {
            if ( arr[i] !== arr[i+1] && arr[i] !== arr[i-1] ) {
                return arr[i];
            }
        }
    return "no element is appear at once";
}

let arr = [ 1,1,2,2,3,3,4,5,5];
console.log( find_number_which_appear_once_while_other_appear_twice_in_sorted_array ( arr ) );      // 4