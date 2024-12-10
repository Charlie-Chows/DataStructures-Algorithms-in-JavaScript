
// TWO POINTER
// OPTIMAL || TC : O ( N ) || SC : O ( N );


function move_zeroes_to_end(arr) {
    let nonZeroIndex = 0; // Pointer to place the next non-zero element

    // Move all non-zero elements to the front of the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
            nonZeroIndex++;
        }
    }
    return arr;
}

let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
console.log(move_zeroes_to_end(arr)); // Output: [1, 2, 3, 2, 4, 5, 1, 0, 0, 0]


/* 

Step-by-Step Dry Run:

Iteration 1 (i = 0):
arr[i] = 1, which is not 0.
Swap arr[nonZeroIndex] and arr[i]:
[arr[0], arr[0]] = [1, 1] (no change because they are the same element).
Increment nonZeroIndex to 1.
Array state: [1, 0, 2, 3, 2, 0, 0, 4, 5, 1].

Iteration 2 (i = 1):
arr[i] = 0, which is 0.
Do nothing.
Array state remains: [1, 0, 2, 3, 2, 0, 0, 4, 5, 1].

Iteration 3 (i = 2):
arr[i] = 2, which is not 0.
Swap arr[nonZeroIndex] and arr[i]:
[arr[1], arr[2]] = [2, 0].
Increment nonZeroIndex to 2.
Array state: [1, 2, 0, 3, 2, 0, 0, 4, 5, 1].

Iteration 4 (i = 3):
arr[i] = 3, which is not 0.
Swap arr[nonZeroIndex] and arr[i]:
[arr[2], arr[3]] = [3, 0].
Increment nonZeroIndex to 3.
Array state: [1, 2, 3, 0, 2, 0, 0, 4, 5, 1].

Iteration 5 (i = 4):
arr[i] = 2, which is not 0.
Swap arr[nonZeroIndex] and arr[i]:
[arr[3], arr[4]] = [2, 0].
Increment nonZeroIndex to 4.
Array state: [1, 2, 3, 2, 0, 0, 0, 4, 5, 1].

Iteration 6 (i = 5):
arr[i] = 0, which is 0.
Do nothing.
Array state remains: [1, 2, 3, 2, 0, 0, 0, 4, 5, 1].

Iteration 7 (i = 6):
arr[i] = 0, which is 0.
Do nothing.
Array state remains: [1, 2, 3, 2, 0, 0, 0, 4, 5, 1].

Iteration 8 (i = 7):
arr[i] = 4, which is not 0.
Swap arr[nonZeroIndex] and arr[i]:
[arr[4], arr[7]] = [4, 0].
Increment nonZeroIndex to 5.
Array state: [1, 2, 3, 2, 4, 0, 0, 0, 5, 1].

Iteration 9 (i = 8):
arr[i] = 5, which is not 0.
Swap arr[nonZeroIndex] and arr[i]:
[arr[5], arr[8]] = [5, 0].
Increment nonZeroIndex to 6.
Array state: [1, 2, 3, 2, 4, 5, 0, 0, 0, 1].

Iteration 10 (i = 9):
arr[i] = 1, which is not 0.
Swap arr[nonZeroIndex] and arr[i]:
[arr[6], arr[9]] = [1, 0].
Increment nonZeroIndex to 7.
Array state: [1, 2, 3, 2, 4, 5, 1, 0, 0, 0].

Final Array:
After the loop ends, all non-zero elements are at the front, and all zeroes are at the end:

[1, 2, 3, 2, 4, 5, 1, 0, 0, 0] 

*/