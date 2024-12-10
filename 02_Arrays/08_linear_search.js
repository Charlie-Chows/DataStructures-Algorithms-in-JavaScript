function linear_search ( arr, k ) {
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] === k ) {
            return true;
        }
    }
    return false;
}

let arr = [ 1, 2, 3, 4, 5, 6, 7 ];
let k = 7;
console.log( linear_search ( arr , k ) ); // true