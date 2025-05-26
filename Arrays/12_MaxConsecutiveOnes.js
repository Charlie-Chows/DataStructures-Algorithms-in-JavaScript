
// TC : O ( N )
// SC : O ( 1 )



function maxConsecutiveOnes ( arr ) {
    if ( arr.length === 0 ) return -1;
    let maxOnes = 0;
    let currentOnesCount = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] === 1 ) {
            currentOnesCount++;
        }
        else {
            maxOnes = Math.max(currentOnesCount,maxOnes);
            currentOnesCount = 0;
        }
    }
    maxOnes = Math.max(currentOnesCount,maxOnes);
    return maxOnes;
}

let arr = [ 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1 ];
console.log( maxConsecutiveOnes( arr ) );       // 4