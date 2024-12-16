 // BRUTE : TC - O ( N ^ 2 ) || SC - O ( N ) -to store ans array not used to solve the problem
 function leaders_of_array ( arr ) {
    let ans = [];
    for ( let i = 0; i < arr.length; i++ ) {
        let leader = true;
        for ( let j = i + 1; j < arr.length; j++ ) {
            if ( arr[i] < arr[j] ) {
                leader = false;
                break;
            }
        }
        if ( leader === true ) ans.push(arr[i]);
    }
    return ans;
}

let arr = [ 7,4,5,6,3,2];
console.log( leaders_of_array ( arr ) );  // [ 7, 6, 3, 2 ]



// OPTIMAL : TC - O ( N ) || SC - O ( N )
function printLeaders( arr ) {
    let ans = [];
    // Last element of an array is always a leader,
    // push into ans array.
    let max = arr[arr.length - 1];
    ans.push(arr[arr.length - 1]);
  
    // Start checking from the end whether a number is greater
    // than max no. from right, hence leader.
    for (let i = arr.length - 2; i >= 0; i--) {
      if (arr[i] > max) {
        ans.push(arr[i]);
        max = arr[i];
      }
    }
  
    return ans;
  }
  
  // Array Initialization.
  
  let arr1 = [10, 22, 12, 3, 0, 6];
  
  console.log (printLeaders( arr1 ) );
  
  
  


