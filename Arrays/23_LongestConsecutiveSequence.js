// LC : premium question

// TC : O ( N Log N )
// SC : O ( 1 )
// BETTER 

function longestConsecutiveSequence ( arr ) {
    arr.sort( (a,b) => a - b );
    let longest = 1;
    let count = 1;
    
    for ( let i = 1; i < arr.length; i++ ) {
        if (arr[i] === arr[i - 1]) continue; // skip duplicates
        if ( arr[i] - 1 === arr[i-1] ) {
            count++;
        }
        else {
            longest = Math.max( longest, count );
            count = 1;
        }
    }
    longest = Math.max( longest, count );
    return longest;
}

let arr = [100, 4, 200, 1, 3, 2, 2];
console.log(longestConsecutiveSequence( arr ) );    // 4
