// leetcode : https://leetcode.com/problems/two-sum/description/
// leetcode - 1 - easy


// BRUTE FORCE 
// TC : O ( N ^ 2 )
// SC : 0 ( 1 )

function twoSum ( nums , k ) {
    let n = nums.length;
    if ( n < 2 ) return -1;

    for ( let i = 0; i < n; i++ ) {
        for ( j = i + 1; j < n; j++ ) {
            if ( nums[i] + nums[j] === k ) {
                return [i,j];
            }
        }
    }
    return -1;
}



// OPTIMAL
// TC : O ( N )
// SC : 0 ( N )

function twoSum ( nums , k ) {
    let n = nums.length;
    if ( n < 2 ) return -1;
    let map = new Map();
    let sum = 0;
    for ( let i = 0; i < n; i++ ) {
        if ( map.has( k - nums[i] ) ) {
            return[ map.get(k-nums[i]), i];
        }
        if ( !map.has(i) ) {
            map.set(nums[i], i);
        }
    }
    return -1;
}

// OPTIMAL IF THEY WONT ALLOW TO USE MAP
// TC : O ( N LOG N )
// SC : O ( 1 )
// - this approach only good if user need elements not indexes , if they need indexes hashing is best 
function twoSum ( nums , k ) {
    let n = nums.length;
    if ( n < 2 ) return -1;
    nums.sort((a,b) => a - b );
    let left = 0;
    let right = n -1;
    while ( left < right ) {
        if ( nums[left] + nums[right] > k ) {
            right--;
        }
        else if ( nums[left] + nums[right] < k ) {
            left++;
        }
        else {
            return [nums[left], nums[right]];       // [ 2, 7 ]
        }
    }
    return -1;
}


let nums = [2, 7, 11, 15];
let target = 9;
console.log( twoSum( nums, target ) );