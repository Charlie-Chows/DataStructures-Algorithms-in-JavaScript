// Majority elem > N/2 times

//BRUTE : TC - O( N^2 ) || SC - O ( 1 )
function majority_element ( arr ) {
    let n = arr.length / 2;
    for ( let i = 0; i < arr.length; i++ ) {
        let count = 0;
        for ( let j = 0; j < arr.length; j++ ) {
            if ( arr[i] === arr[j]) {
                count++;
            }
        }
        if ( count > n ) return arr[i];
    }
    return "No majority element";
}

let arr1 = [ 2, 2, 3, 3, 1, 2, 2 ];
console.log(majority_element ( arr1 ) );



// APPROACH - Hashing { count the elem }
// BETTER : TC - O ( N ) || SC - O ( N )
function majority_element_better(arr) {
    let n = Math.floor(arr.length / 2); // Majority threshold
    let countMap = {}; // Hash map for counting elements

    // Count occurrences of each element
    for (let num of arr) {
        countMap[num] = (countMap[num] || 0) + 1;
        if (countMap[num] > n) return num; // Return if majority found
    }

    return "No majority element";
}

let arr2 = [2, 2, 3, 3, 1, 2, 2];
console.log(majority_element_better(arr2));



// APPROACH - MOORE'S VOTING ALGO 
// OPTIMAL : TC - O ( N ) || SC - O ( 1 )

function moores_voting_algo ( arr ) {
    let n = Math.floor ( arr.length / 2 );
    let elem;
    let count = 0;
    for ( let i = 0; i < arr.length; i++ ) {
       if ( count === 0 ) {
        elem = arr[i];
        count++;
       }
       else if ( arr[i] === elem ) {
        count++;
       }
       else {
        count--;
       }
    }

    // checking the elem is majority element or not 
    // this step is optional if the problem states there is majority elem 
    let occurrence_count = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] === el ) occurrence_count++;
    }
    if ( occurrence_count > n ){
        return elem;
    } 

    return -1 // if no majority element found
}

let arr3 = [2, 2, 3, 3, 1, 2, 2];
console.log ( moores_voting_algo ( arr3 ) );