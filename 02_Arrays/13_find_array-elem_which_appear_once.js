// leetcode : https://leetcode.com/problems/single-number/description/
// leetcode - 136 - easy


// TC : O ( 2N )
// SC : O ( (N / 2) + 1 )

function findArrayElementWhichAppearOnce ( nums ) {
    let map = new Map();
    
    for ( let i = 0; i < nums.length; i++ ) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    console.log( map );  // Map(3) { 2 => 2, 3 => 2, 4 => 1 }
    
    // Extracts all unique elements (keys) from the map and stores them in an array
    // This helps in looping through each key to check its frequency
    let keys = Array.from(map.keys());
    
    console.log( keys);  // [ 2, 3, 4 ]
    
    for ( let i = 0; i < keys.length; i++ ) {
        if ( map.get(keys[i]) === 1 ) return keys[i];
    }
    return null;
    
    // or 
    
    // for (let [key, value] of map) {
    //     if (value === 1) return key;
    // }
}

let nums = [2, 3, 2, 3, 4];
console.log( findArrayElementWhichAppearOnce( nums ) );     // 4



