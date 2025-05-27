// LC : https://leetcode.com/problems/majority-element/description/
// LC - 169 - easy


// TC : O ( N )
// SC : O ( 1 )
// OPTIMAL - MOORE'S VOTING ALGO  ( it will work only if majority element exist )

function majorityElementNBy2Times ( arr ) {
    let elem = arr[0];
    let count = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] === elem ) {
            count++;
        }
        else {
            if ( count > 0 ) count--;
            if ( count === 0 ) elem = arr[i];
        }
    }
    return elem;
}

let arr = [ 2, 2, 3, 3, 1, 2, 2 ];
console.log( majorityElementNBy2Times( arr ) );     // 2



// TC : O ( N )
// SC : O ( N )
// BETTER - it is optimal if we dont know majority elem exist or not 

function majorityElementNBy2Times ( arr ) {
    let n = arr.length;
    let map = new Map();
    for ( let i = 0; i < n; i++ ) {
        let count = map.get(arr[i]) || 0;
        map.set(arr[i], count + 1)
    }
    
    for ( const [ num, count ] of map.entries() ) {
        if ( count > Math.floor( n / 2 ) ) {
            return num;
        }
    }
    return -1;
}

let arr1 = [ 2, 2, 3, 3, 1, 2, 2 ];
console.log( majorityElementNBy2Times( arr1 ) );     // 2
