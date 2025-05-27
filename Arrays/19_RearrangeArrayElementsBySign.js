// LC : https://leetcode.com/problems/rearrange-array-elements-by-sign/description/
// LC - 2149 - medium

// TC : O ( N )
// SC : O ( N )
// OPTIMAL


function rearrangeElementsBySign ( arr ) {
    let resultArr = [];
    let posIndex = 0;
    let negIndex = 1;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] > 0 ) {
            resultArr[posIndex] = arr[i];
            posIndex += 2;
        }
        else {
            resultArr[negIndex] = arr[i];
            negIndex += 2;
        }
    }
    return resultArr;
}

let arr = [ 3, 1, -2, -5, 2, -4 ];
console.log( rearrangeElementsBySign( arr ) );      // [ 3, -2, 1, -5, 2, -4 ]
