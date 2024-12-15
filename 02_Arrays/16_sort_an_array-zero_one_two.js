
// BRUTE - just sort an array 

// BETTER : TC -  O ( 2N ) || SC - O ( 1 )
function sort_an_array_zero_ones_twos(arr) {
    let count_0 = 0;
    let count_1 = 0;
    let count_2 = 0;

    // Count the number of 0s, 1s, and 2s
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) count_0 += 1;
        else if (arr[i] === 1) count_1 += 1;
        else count_2 += 1;
    }

    // Fill the array with 0s
    for (let i = 0; i < count_0; i++) {
        arr[i] = 0;
    }

    // Fill the array with 1s
    for (let i = count_0; i < count_0 + count_1; i++) {
        arr[i] = 1;
    }

    // Fill the array with 2s
    for (let i = count_0 + count_1; i < count_0 + count_1 + count_2; i++) {
        arr[i] = 2;
    }

    return arr;
}

let arr1 = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1];
console.log(sort_an_array_zero_ones_twos(arr1));   // [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2 ]     



// OPTIMAL : TC - O ( N ) || SC - O ( 1 )
// when to use this algo - if array has only 3 distinct values we can use this algo
function dutch_national_flag_algo ( arr ) {
    let low = 0, mid = 0, high = arr.length - 1;
    while ( mid <= high ) {
        if ( arr[mid] === 0 ) {
            [ arr[low], arr[mid] ] = [ arr[mid] , arr[low] ];
            low++;
            mid++;
        }
        else if ( arr[mid] === 1 ) {
            mid++;
        }
        else {
            [ arr[mid], arr[high] ] = [ arr[high], arr[mid] ];
            high--;
        }
    }
    return arr;
}

let arr2 = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1];
console.log( dutch_national_flag_algo ( arr2 ) );

