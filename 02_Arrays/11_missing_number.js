
// TC : O(n)
// SC : O(1)

function missingNumberInArray ( nums, len ) {
    const n = nums.length;
    if ( n === 0 ) return null;
    const totalSum = len * ( len + 1 ) / 2;
    let count = 0;
    for ( let i = 0; i < n; i++ ) {
        count += nums[i];
    }
    const missingNumber = totalSum - count;
    return missingNumber;
}

let len = 5;
let arr = [ 1,2,3,5 ];
console.log( missingNumberInArray( arr, len ) )
