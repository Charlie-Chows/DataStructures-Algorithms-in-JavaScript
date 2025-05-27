// LC : https://leetcode.com/problems/sort-colors/description/
// LC - 75 - medium 


// OPTIMAL { duetch national flag algo }
// TC : O ( N )
// SC : O ( 1 )

function sortZeroesOnesTwos ( nums ) {
    let n = nums.length;
    if ( n === 0 ) return -1;
    let low = 0;
    let mid = 0;
    let high = n - 1;
    while ( mid <= high ) {
        if ( nums[mid] === 0 ) {
            [ nums[low], nums[mid] ] = [ nums[mid], nums[low] ];
            low++;
            mid++;
        }
        else if ( nums[mid] === 1 ) {
            mid++;
        }
        else {
            [ nums[mid], nums[high] ] = [ nums[high], nums[mid] ];
            high--;
        }
    }
    return nums;
}


let nums = [2, 0, 1, 2, 0, 1, 2, 0];
console.log(sortZeroesOnesTwos(nums));      // // [ 0, 0, 0, 1, 1, 2, 2, 2 ]

