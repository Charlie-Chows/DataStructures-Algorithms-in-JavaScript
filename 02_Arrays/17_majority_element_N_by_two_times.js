// leetcode : https://leetcode.com/problems/majority-element/description/
// leetcode - 169 - easy

// BRUTE FORCE 
// TC : O ( N ^ 2 )
// SC : O ( 1 )

function majorityElementNby2Times ( nums ) {
    let n = nums.length;
    if ( n === 0 ) return -1;
    for ( let i = 0; i < n; i++ ) {
        let count = 0;
        for ( let j = 0; j < n; j++ ) {
            if ( nums[i] === nums[j] ) {
                count++;
            }
        }
        if ( count > n/2 ) return nums[i];
    }
    return -1;
}


// BETTER 
// TC : O ( N )
// SC : O ( N )

function majorityElementNby2Times(nums) {
    let n = nums.length;
    if (n === 0) return -1;

    let map = new Map();

    for (let i = 0; i < n; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    for (let [key, count] of map) {
        if (count > n / 2) {
            return key;
        }
    }

    return -1;
}


// OPTIMAL ( only if majority element exists )
// MOORE'S VOTING aLGO
// TC : O ( N )
// SC : O ( 1 )

function majorityElementNby2Times(nums) {
    let n = nums.length;
    if (n === 0) return -1;

    let element = nums[0];
    let count = 1;

    for (let i = 1; i < n; i++) {
        if (nums[i] === element) {
            count++;
        } else {
            count--;
            if (count === 0) {
                element = nums[i];
                count = 1;
            }
        }
    }

    return element;
}


console.log(majorityElementNby2Times([3, 3, 4, 3, 3, 5])); // Output: 3