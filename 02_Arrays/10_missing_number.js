
// TC : O(n)
// SC : O(1)

function missing_number ( arr, len) {
    let sum = len * ( len + 1 ) / 2;   // sum of n natural numbers
    let count = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        count = count + arr[i];
    }
    return sum - count;
}
let len = 5;
let arr = [1,2,4,5];
console.log( missing_number(arr, len ));
