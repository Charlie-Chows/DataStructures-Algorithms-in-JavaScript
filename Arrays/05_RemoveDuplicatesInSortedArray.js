
// input - arr
// output - unique elements length
// test cases - empty arr, single elem 


// TC : O ( N )
// SC : O ( N )
// Better Approach 

function removeDuplicatesUsingMap ( arr ) {
    if ( arr.length === 0 ) return -1;
    if ( arr.length === 1 ) return 1;
    
    let uniqueMap = new Map();
    for ( let i = 0; i < arr.length; i++ ) {
        if ( !uniqueMap.has(arr[i])) {
            uniqueMap.set(arr[i], true);
        }
    }
    
    return uniqueMap.size;
}

const arr = [1, 1, 2, 2, 3, 3, 3, 4, 5, 5];
console.log(removeDuplicatesUsingMap(arr));     // 5


// TC : O ( N )
// SC : O ( 1 )
// Optimal Approach 

function removeDuplicatesUsingTwoPointer ( arr ) {
    if ( arr.length === 0 ) return -1;
    if ( arr.length === 1 ) return 1;
    
    let currentIndex = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== arr[currentIndex] ) {
            currentIndex++;
            arr[currentIndex] = arr[i];
        }
    }
    return currentIndex + 1;
}

console.log(removeDuplicatesUsingTwoPointer(arr));      // 5