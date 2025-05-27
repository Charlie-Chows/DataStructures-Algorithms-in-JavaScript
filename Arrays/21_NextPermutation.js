// LC : https://leetcode.com/problems/next-permutation/description/
// LC - 31 - medium

/* 

arr = [ 3, 1, 2 ]  => 3 elem -> 3! => 3*2*1 = 6

[ 1 2 3 ] 
[ 1 3 2 ]
[ 2 1 3 ]
[ 2 3 1 ]
[ 3 1 2 ]
[ 3 2 1 ]

*/

// TC : O ( 3N )
// SC : O ( 1 )

function reverse ( start, end, arr ) {
    while ( start <= end ) {
        [ arr[start], arr[end] ] = [ arr[end], arr[start] ];
        start++;
        end--;
    }
    return arr;
}

function nextPermutation ( arr ) {

    let indexBreak = -1;

    // Step 1: Find the first decreasing element from the end 
    for ( let i = arr.length - 1; i >= 1; i-- ) {
        if ( arr[i] > arr[i-1] ) {
            indexBreak = i - 1;
            break;
        }
    }

    // Step 2: If no such element found, reverse entire array (last permutation → first)
    if ( indexBreak === -1 ) {
        reverse( 0, arr.length-1, arr );
        return arr;
    }

    // Step 3: Find the smallest number greater than arr[indexBreak] from the end
    for ( let i = arr.length - 1; i > indexBreak; i-- ) {
        if ( arr[i] > arr[indexBreak] ) {
            [ arr[i], arr[indexBreak] ] = [ arr[indexBreak], arr[i] ];
            break;
        }
    }

    // Step 4: Reverse the subarray after indexBreak
    reverse( indexBreak + 1, arr.length - 1, arr );

    return arr;
}

let arr = [1, 2, 3];
console.log(nextPermutation(arr)); // Output: [1, 3, 2]