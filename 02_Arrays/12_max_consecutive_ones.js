// TC : O ( N )
// SC : O ( 1 )

function maxConsecutiveOnes ( nums ) {
    const n = nums.length;
    if ( n === 0 ) return null;
    if ( n === 1 ) return nums[0] === 1 ? 1 : 0;
    let count = 0;
    let maxOnes = 0;
    for ( let i = 0; i < n; i++ ) {
        if ( nums[i] === 1 ) {
            count++;
        }
        else {
            maxOnes = Math.max(count, maxOnes);
            count = 0;
        }
    }
    
    maxOnes = Math.max(count, maxOnes);
    return maxOnes;
}

let nums = [0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1,1,1];
console.log( maxConsecutiveOnes( nums ) );      // 4
