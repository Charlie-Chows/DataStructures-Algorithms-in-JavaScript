// ROTATE ARRAY BY K PLACES 

// Problem link : https://leetcode.com/problems/rotate-array/description/

/***
 * Difference between left & right rotate array is 
 * 1) In right rotation we reverse entire array at first , but in left we reverse entire array at last 
 * */ 




// ROTATE RIGTH ARRAY BY K PLACES 
function reverseArray ( nums, start, end ){
    while ( start < end ) {
        [nums[start] , nums[end]] =[nums[end], nums[start]];
        start++;
        end--;
    }
    return nums;
 }

var rotate = function(nums, k) {
    var arrayLength = nums.length;
    let rotateValue = k % arrayLength;
    reverseArray( nums, 0, arrayLength - 1 );
    reverseArray( nums, 0, rotateValue - 1 );
    reverseArray( nums, rotateValue, arrayLength - 1 );
};

let arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 3);
console.log(arr);




// ROTATE LEFT ARRAY BY K PLACES 

function reverseArray ( nums, start, end ){
    while ( start < end ) {
        [nums[start] , nums[end]] =[nums[end], nums[start]];
        start++;
        end--;
    }
    return nums;
 }

var rotate = function(nums, k) {
    var arrayLength = nums.length;
    let rotateValue = k % arrayLength;
    reverseArray( nums, 0, rotateValue - 1 );
    reverseArray( nums, rotateValue, arrayLength - 1 );
    reverseArray( nums, 0, arrayLength - 1 );
};

let arr1 = [1, 2, 3, 4, 5, 6, 7];
rotate(arr1, 3);
console.log(arr);
