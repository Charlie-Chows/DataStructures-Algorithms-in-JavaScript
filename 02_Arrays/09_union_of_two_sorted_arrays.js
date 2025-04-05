// TC : O ( N1 + N2 )
// SC : O ( N1 + N2 )


function unionOfTwoSortedArrays ( nums1, nums2 ) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    let resultArray = [];
    let i = 0; 
    let j = 0;
    while ( i < n1 && j < n2 ) {
        if ( nums1[i] < nums2[j] ) {
            if ( resultArray[resultArray.length - 1] !== nums1[i] || resultArray.length === 0 ) {
                resultArray.push(nums1[i]);
            }
            i++;
        }
        else if ( nums1[i] > nums2[j] ) {
            if ( resultArray[resultArray.length - 1] !== nums2[j] || resultArray.length === 0 ) {
                resultArray.push(nums2[j]);
            }
            j++;
        }
        else {
            // nums1[i] === nums2[j]
            if (resultArray.length === 0 || resultArray[resultArray.length - 1] !== nums1[i]) {
                resultArray.push(nums1[i]);
            }
            i++;
            j++;
        }
    }
    
    while ( i < n1 ) {
        if ( resultArray[resultArray.length - 1] !== nums1[i] || resultArray.length === 0 ) {
                resultArray.push(nums1[i]);
            }
            i++;
    }
    
    while ( j < n2 ) {
        if ( resultArray[resultArray.length - 1] !== nums2[j] || resultArray.length === 0 ) {
                resultArray.push(nums2[j]);
            }
            j++;
    }
    return resultArray;
}

let nums1 = [1, 2, 2, 3, 4];
let nums2 = [2, 3, 5, 6];

console.log(unionOfTwoSortedArrays(nums1, nums2));  // [ 1, 2, 3, 4, 5, 6 ]