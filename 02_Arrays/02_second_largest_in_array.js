
// OPTIMAL 
// TC : O ( N )
// SC : O ( 1 )


function findSecondLargest ( nums ) {
    if ( nums.length < 2 ) return null;
    
    let max = nums[0];
    let secondMax = Number.NEGATIVE_INFINITY;
    
    for ( let i = 1; i < nums.length; i++ ) {
        if ( nums[i] > max ) {
            secondMax = max;
            max = nums[i];
        }
        else if ( nums[i] > secondMax && nums[i] < max ) {
            secondMax = nums[i];
        }
    }
    return secondMax === Number.NEGATIVE_INFINITY ? null : secondMax;
}


// SECOND SMALLEST NUMBER 

function findSecondSmallest ( nums ) {
    if ( nums.length < 2 ) {
        return { success : false, value: "Array must have atleast 2 elements"};
    }
    
    let min = nums[0];
    let secondMin = Number.POSITIVE_INFINITY;
    for ( let i = 1; i < nums.length; i++ ) {
        if ( nums[i] < min ) {
            secondMin = min;
            min = nums[i];
        }
        else if ( nums[i] > min && nums[i] < secondMin ) {
            secondMin = nums[i];
        }
    }
    if ( secondMin === Number.POSITIVE_INFINITY ) {
        return { success : false, value : "No second smallest found" };
    }
    return { success : true, value : secondMin };
}


let nums = [ -3, -1, -2, -6 ];
console.log ( findSecondLargest( nums ) );  // -2
console.log ( findSecondSmallest( nums ) ); // { success: true, value: -3 }

/* 
When to choose object for return ? 
    - if nums.length === 0 or 1 we return null but use dont know why it return null
      that's why we choose object to return both value & message
    - function always return same or consistent data

*/