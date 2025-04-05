// OPTIMAL
// TC : O ( N )
// SC : O ( 1 )

function leftRotateArrayByOnePlace ( nums ) {
    if ( nums.length === 0 ) return [];
    let element = nums[0];
    for ( let i = 1; i < nums.length; i++ ) {
        nums[i - 1] = nums[i];
    }
    nums[ nums.length - 1 ] = element;
    return nums;
}

let nums = [ 1,2,3,4,5 ];
console.log(leftRotateArrayByOnePlace( nums ));     // [ 2, 3, 4, 5, 1 ]