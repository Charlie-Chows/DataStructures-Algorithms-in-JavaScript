// leetcode : https://leetcode.com/problems/move-zeroes/description/
// leetcode - 283 - easy

// OPTIMAL 
// TC : O ( N )
// SC : O ( 1 )

function move_zeroes_to_end(arr) {
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++; 
        }
    }
    return arr;
}

let nums = [1, 0, 2, 0, 3, 2, 0, 0, 4, 5, 1];
console.log(move_zeroes_to_end(nums));