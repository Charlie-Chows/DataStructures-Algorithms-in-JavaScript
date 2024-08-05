

// BRUTE - O ( N^2 )
// splice is O(N)
function removeDuplicatesBrute ( nums ) {
    for ( let i = 0; i < nums.length - 1; i++ ){
        if ( nums[i] === nums[i+1]){
            nums.splice(i,1);
            i--;
        }
    }
    return nums;
}

let nums = [1,1,2,2,7,8,9];
console.log ( removeDuplicatesBrute (nums));


// OPTIMAL - O ( N )
function removeDuplicatesOptimal ( nums ){
    if (nums.length === 0) return 0;
    let j = 0;
    for (let i = 1; i < nums.length; i++ ){
        if ( nums[i] !== nums[j] ){
            j++;
            nums[j] = nums[i];
        }
    }
    return j+1; // new array length;
}

let nums1 = [1,1,2,2,7,8,9];
console.log ( removeDuplicatesOptimal (nums1));