function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) {
            i++;
        }

        while (arr[j] > pivot && j >= low + 1) {
            j--;
        }
        if (i < j) {
            // Swap elements using destructuring
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    // Swap pivot with arr[j]
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
}

function qs(arr, low, high) {
    if (low < high) {
        let pIndex = partition(arr, low, high);
        qs(arr, low, pIndex - 1);
        qs(arr, pIndex + 1, high);
    }
}

function quickSort(arr) {
    qs(arr, 0, arr.length - 1);
    return arr;
}

// Example usage
let arr = [4, 6, 2, 5, 7, 9, 1, 3];
console.log("Before Using quick Sort:");
console.log(arr);

arr = quickSort(arr);
console.log("After Using quick sort:");
console.log(arr);
