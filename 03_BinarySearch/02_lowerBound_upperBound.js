// The only difference between upper & lower bound is sign one has >= & other has > 


/* 

LOWER BOUND : Smallest index such that arr[index] >= x 

arr = [ 3, 5, 8, 15, 19, 19, 19 ]
index = 0  1  2  3   4   5   6

x = 8       x = 9       x = 16      x = 19      x = 20 
lb = 2      lb = 3      lb = 4      lb = 4      lb = 7 ( hypothetical index or arr.length ) if x is greater than last elem 

*/


// TC : O ( Log N )
// SC : O ( 1 )

function lower_bound ( arr , target ) {
    let low = 0;
    let high = arr.length - 1;  
    let ans = arr.length;  
    while ( low <= high ) {
        let mid = low + Math.floor( ( high - low ) / 2 ); 
        if ( arr[mid] >= target ) {
            ans = mid;
            high = mid - 1; // look for small index on left 
        }
        else {
            low = mid + 1; // move to right side index 
        }
    }
    return ans;
}

let arr = [ 1, 3, 5, 7, 8, 10 ];
let target = 9;
console.log( lower_bound( arr, target ) );    // 5



/* 

UPPER BOUND : Smallest index such that arr[index] > x 

arr = [ 3, 5, 8, 15, 19, 19, 19 ]
index = 0  1  2  3   4   5   6

x = 8       x = 9       x = 16      x = 19      x = 20 
lb = 3      lb = 3      lb = 4      lb = 7      lb = 7 ( hypothetical index or arr.length ) if x is greater than last elem 

*/



// TC : O ( Log N )
// SC : O ( 1 )

function upper_bound ( arr , target ) {
    let low = 0;
    let high = arr.length - 1;  
    let ans = arr.length;  
    while ( low <= high ) {
        let mid = low + Math.floor( ( high - low ) / 2 ); 
        if ( arr[mid] > target ) {
            ans = mid;
            high = mid - 1; // look for small index on left 
        }
        else {
            low = mid + 1; // move to right side index 
        }
    }
    return ans;
}

let arr1 = [ 1, 3, 5, 7, 8, 10 ];
let x = 9;
console.log( upper_bound( arr1, x ) );    // 5