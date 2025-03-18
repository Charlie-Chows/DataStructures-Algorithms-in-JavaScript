// leetcode : https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
// leetcode - 26 - easy


// OPTIMAL
// TC : O ( N )
// SC : O ( 1 )
function remove_duplicates_from_sorted_array ( arr ) {
    let i = 0;
    for ( let j = 1; j < arr.length; j++ ) {
        if ( arr[i] !== arr[j] ) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

let arr = [ 1, 1, 2, 2, 2, 3, 3 ];
console.log( remove_duplicates_from_sorted_array ( arr ) );

