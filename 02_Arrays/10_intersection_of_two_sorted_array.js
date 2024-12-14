
// TWO POINTER
// OPTIMAL TC : O ( n + m ) || sc : O ( n + m ) to store & return array

function intersection_of_two_sorted_array ( n, m ) {
    let i = 0 , j = 0;
    let intersection = [];
    while ( i < n.length && j < m.length ) {
        if ( n[ i ] < m[ j ] ) {
            i++;
        }
        else if ( n[ i ] > m[ j ] ) {
            j++;
        }
        else {
            intersection.push( n[ i ] );
            i++;
            j++;
        }
    }
    return intersection;
}

let arr1 = [ 1, 2, 3, 3, 4, 5, 6, 7 ];
let arr2 = [ 3, 3, 4, 4, 5, 8 ];

console.log( intersection_of_two_sorted_array ( arr1, arr2 ) );