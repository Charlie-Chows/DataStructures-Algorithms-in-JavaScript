// leetcode : https://leetcode.com/problems/search-insert-position/description/
// leetcode - 35 - easy 

// TC : O ( log N ) 
// SC : O ( 1 )

function search_input_position ( nums , target ) {
    let low = 0;
    let high = nums.length - 1;
    let ans = nums.length;
    while ( low <= high ) {
        let mid = low + Math.floor( ( high - low ) / 2 );
        if ( nums[mid] >= target ) {
            ans = mid;
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return ans;
}

