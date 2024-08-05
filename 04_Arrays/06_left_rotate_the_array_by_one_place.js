
// OPTIMAL - O ( N )
function rotateArrayByOnePlace ( nums ) {
    let temp = nums[0];
    for ( let i = 1; i < nums.length; i++ ) {
       nums[ i-1 ] = nums[i] 
    }
    nums[nums.length - 1] = temp;
    return nums;
}

let arr = [ 1,2,3,4,5,6,7 ];
console.log( rotateArrayByOnePlace ( arr ) );