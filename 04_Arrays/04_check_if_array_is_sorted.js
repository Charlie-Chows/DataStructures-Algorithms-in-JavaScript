function sortedArr ( arr ) {
    for ( let i = 0; i < arr.length - 1; i++ ){
        if ( arr[i] > arr[i+1]){
            return "Not sorted";
        }
    }
    return "Sorted";
}

let arr = [1,2,3,4,5];
console.log(sortedArr(arr));