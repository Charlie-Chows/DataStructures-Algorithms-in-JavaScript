// Moving Zeroes to end 

// Problem link : https://leetcode.com/problems/move-zeroes/
// difficuly : easy 

var moveZeroes = function(nums) {
    if (nums.length === 1 ){
        return nums;
    }

    let j = -1;
    
    for ( let i = 0; i <nums.length; i++ ) {
        if (nums[i] === 0 ) {
            j = i;
            break;
        }
    }

    if (j == -1 ){
        return nums;
    }

    for ( let i = j + 1; i < nums.length; i++ ) {
        if ( nums[i] !== 0 ) {
            [ nums[i], nums[j] ] = [ nums[j], nums[i] ];
            j++;
        }
    }
};



// Running the test cases
let arr1 = [1];
console.log(moveZeroes(arr1)); // Expected output: [1]

let arr2 = [0];
console.log(moveZeroes(arr2)); // Expected output: [0]

let arr3 = [1, 2, 3, 0, 0];
console.log(moveZeroes(arr3)); // Expected output: [1, 2, 3, 0, 0]

let arr4 = [0, 0, 1, 2, 3];
console.log(moveZeroes(arr4)); // Expected output: [1, 2, 3, 0, 0]

let arr5 = [0, 1, 0, 3, 12];
console.log(moveZeroes(arr5)); // Expected output: [1, 3, 12, 0, 0]

let arr6 = [1, 2, 3, 4, 5];
console.log(moveZeroes(arr6)); // Expected output: [1, 2, 3, 4, 5]

let arr7 = [0, 0, 0, 0, 0];
console.log(moveZeroes(arr7)); // Expected output: [0, 0, 0, 0, 0]