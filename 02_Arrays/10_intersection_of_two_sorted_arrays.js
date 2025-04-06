// TC : O ( N1 + N2 )
// SC : O ( N1 + N2 )

function intersectionOfTwoSortedArrays ( nums1, nums2 ) {
    const n1 = nums1.length;
    const n2 = nums2.length;
    const resultArray = [];
    let i = 0;
    let j = 0;
    
    while ( i < n1 && j < n2 ) {
        if ( nums1[i] < nums2[j] ) {
            i++;
        }
        else if ( nums1[i] > nums2[j] ) {
            j++;
        }
        else {
            resultArray.push(nums1[i]);
            i++;
            j++;
        }
    }
    return resultArray;
}

let arr1 = [1, 2, 3, 3, 4];
let arr2 = [2, 3, 3, 4, 5, 6];
console.log(intersectionOfTwoSortedArrays(arr1,arr2))       // [ 2, 3, 3, 4 ]



/* 

WHY WE USED CONST TO ARRAY ? 

const arr = [1, 2, 3];
arr.push(4);       // ✅ Allowed (mutation)
arr[0] = 99;       // ✅ Allowed (mutation)
arr.pop();         // ✅ Allowed (mutation)

// ❌ Not allowed:
arr = [9, 8, 7];   // ❌ Error: Assignment to constant variable

- Mutation means changing the content of an object or array without changing the reference.

const nums = [10, 20];
nums.push(30);       // Mutation
nums[1] = 25;        // Mutation

nums = [1, 2, 3];    // ❌ Reassignment (not allowed with const)

*/
