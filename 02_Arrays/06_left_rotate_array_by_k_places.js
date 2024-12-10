

// OPTIMAL 
// TC : O ( 2N ) SC : O ( 1 )

function reverse_arr(arr, start_index, end_index) {
    while (start_index < end_index) {
        // Swap the elements at start_index and end_index
        [arr[start_index], arr[end_index]] = [arr[end_index], arr[start_index]];
        start_index++;
        end_index--;
    }
}

function left_rotate_array_by_k_places(arr, k) {
    const n = arr.length;

    // Handle cases where k is greater than array length
    k = k % n;

    // Reverse the first k elements
    reverse_arr(arr, 0, k - 1);

    // Reverse the remaining elements
    reverse_arr(arr, k, n - 1);

    // Reverse the entire array
    reverse_arr(arr, 0, n - 1);

    return arr;
}

// Example Usage
const array = [1, 2, 3, 4, 5, 6];
const k = 2;
console.log(left_rotate_array_by_k_places(array, k)); // Output: [3, 4, 5, 6, 1, 2]
