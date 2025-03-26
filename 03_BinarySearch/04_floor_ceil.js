
// ceil is same as lower bound


function floor(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (arr[mid] === target) {
            return arr[mid];  // If target is found, return the element
        }
        if (arr[mid] < target) {
            low = mid + 1;  // Search the right half
        } else {
            high = mid - 1;  // Search the left half
        }
    }

    // If the target is not found, return the next smallest element
    // which is arr[low - 1]
    return arr[low - 1];
}

let arr = [1, 3, 5, 7, 8, 10];
let target = 7;

console.log(floor(arr, target));  // Output: 5 (next smallest element)


