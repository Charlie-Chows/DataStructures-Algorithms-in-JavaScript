
function array_is_sorted_or_not ( arr ) {

    if ( arr.length === 0 ) {
        return "Array is empty";
    }
    if ( arr.length === 1 ) {
        return "Sorted";
    }

    for ( let i = 0; i < arr.length - 1; i++ ) {
        if ( arr[i] > arr[i + 1]) {
            return "Not sorted"; // Return early if the array is not sorted
        }
    }
    return " Sorted"; // Return sorted if no violations are found
}

const arr = [1,2,3,4,5,6,7];
console.log ( array_is_sorted_or_not ( arr ) );