// leetcode : https://leetcode.com/problems/sort-colors/description/
// leetcode - 75 - medium


// BRUTE 
// TC : O ( 2N )
// SC : O ( 1 )

function sortZeroesOnesTwos ( nums ) {
    let n = nums.length;
    if ( n === 0 ) return -1;
    let countZero = 0;
    let countOne = 0;
    let countTwo = 0;
    for ( let i = 0; i < n; i++ ) {
        if ( nums[i] === 0 ) {
            countZero++;
        }
        else if ( nums[i] === 1 ) {
            countOne++;
        }
        else {
            countTwo++;
        }
    }
    
    for ( let i = 0; i < countZero; i++ ) {
        nums[i] = 0;
    }
    for ( let i = countZero; i < countZero + countOne; i++ ) {
        nums[i] = 1;
    }
    for ( let i = countZero + countOne; i < n; i++ ) {
        nums[i] = 2;
    }
    return nums;
}


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
console.log(sortZeroesOnesTwos(nums));