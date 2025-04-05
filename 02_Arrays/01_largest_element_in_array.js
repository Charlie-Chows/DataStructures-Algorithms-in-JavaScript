
// OPTIMAL 
// TC : O ( N )
// SC : O ( 1 )

function findLargestNumber ( nums ) {
    if( nums.length === 0 ) return null;
    if ( nums.length === 1 ) return nums[0];
    
    let max = nums[0];
    for ( let i = 1; i < nums.length; i++ ) {
        if ( nums[i] > max ) {
            max = nums[i];
        }
    }
    return max;
}


// SMALLEST ELEMENT IN THE ARRAY 

function findSmallestNumber ( nums ) {
    if ( nums.length === 0 ) return null;
    if ( nums.length === 1 ) return nums[0];
    
    let min = nums[0];
    for ( let i = 1; i < nums.length; i++ ) {
        if ( nums[i] < min ) {
            min = nums[i];
        }
    }
    return min;
}

let nums = [ 3,2,1,5,2 ];

console.log( findLargestNumber( nums ) );   // 5
console.log( findSmallestNumber( nums ) );  // 1 