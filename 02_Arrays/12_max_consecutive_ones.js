function max_consecutive_ones ( arr ) {
    let count = 0;
    let max = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[ i ] === 1 ) {
            count =  count + 1;
            max = Math.max(max, count);
        }else { 
            count = 0;
        }
    }
    return max;
}

let arr = [ 1,1,0,1,1,1,1,0,1,1];
console.log( max_consecutive_ones ( arr ) );