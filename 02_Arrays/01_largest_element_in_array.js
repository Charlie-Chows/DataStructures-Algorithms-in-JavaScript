
// OPTIMAL 
// TC : O ( N )
// SC : O ( 1 )

function largest_element_in_array ( arr ) {
    let largest_elem = -1;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] > largest_elem ) {
            largest_elem = arr[i];
        }
    }
    return largest_elem;
}

let arr = [ 3,2,1,5,2 ];
console.log( largest_element_in_array( arr ) );



// SMALLEST ELEMENT IN THE ARRAY 

function smallest_element_in_array ( arr ) {
    let smallest_elem = Infinity;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] < smallest_elem) {
            smallest_elem = arr[i];
        }
    }
    return smallest_elem;
}

let arr1 = [ 3,2,1,5,2 ];
console.log( smallest_element_in_array( arr1 ) );