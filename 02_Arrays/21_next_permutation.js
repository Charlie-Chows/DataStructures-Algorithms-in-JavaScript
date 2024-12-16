/**
arr = [ 3, 1, 2 ]
we need to find next permutation
what is permutation ?
permutations are always in sorted & dictionary order
permutation of above array  
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]

if they give last permutaion & find next permutaion we will fall back to first one 
eg : [ 3, 1, 2 ] => [ 3, 2, 1 ]
     [ 3, 2, 1 ] => [ 1, 2, 3 ]  fall back for last one 
     
     how many permutations we can able to generate 
     arr.length!  { factorial }
     arr.length = 3
     3! = 3*2*1 = 6
 */
 
 // BRUTE : TC - O ( N! * N )
 /* 
  - lec 11,12 in recursion playlist 
  - generate all permutations 
  - linear search to find permutation
  - next index permutation if not print 1st permutation
 */
 
// OPTIMAL : TC - O ( 3N ) || SC - O ( 1 ) 

// intution
/*
 - larger prefix sum  arr[i] > arr[i + 1]
 - find greater than elem, but the smallest one , so that you stay close 
 - try to place remaining elements in sorted order
*/ 

function reverseArray (arr, start, end ) {
    while ( start < end ) {
        [ arr[start], arr[end] ] = [ arr[end], arr[start] ];
        start++;
        end--;
    }
    return arr;
}

function next_permutation ( arr ) {
    let index = -1;
    // Step 1: Find the breakpoint
    for ( let i = arr.length - 2; i >= 0; i-- ) {
        if ( arr[i] < arr[i + 1] ) {
            index = i;
            break;
        }
    }
    // Step 2: If no breakpoint, reverse the array to get the first permutatio
    if ( index === -1 ) {
         return reverseArray ( arr, 0, arr.length - 1 );
    }
    // Step 3: Swap the breakpoint element with the smallest element greater than it
    for ( let i = arr.length - 1; i > index; i-- ) {
        if ( arr[i] > arr[index] ) {
            [ arr[i], arr[index] ] = [ arr[index], arr[i] ];
            break;
        }
    }
    // Step 4: reverse the reamaining part of array 
    reverseArray ( arr, index + 1, arr.length - 1 );
    
    return arr;
}

let arr = [ 2, 1, 5, 4, 3, 0, 0 ];
console.log( next_permutation ( arr ) ); // [ 2, 3, 0, 0, 1, 4, 5 ] 
 