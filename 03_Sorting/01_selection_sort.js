function selectionSort ( arr, n ){
    for ( let i  = 0; i <= n-2; i++ ) {  // Outer loop for traverse array elements
        let minIndex = i;
        for ( let j = i + 1; j <=  n-1; j++ ){  // inner loop is to find min element in unsorted portion of array 
            if ( arr[j] < arr [minIndex] ) {
                minIndex = j;
            }
        }
        if ( minIndex != i ) {
            [ arr[i] , arr[minIndex] ] = [ arr[minIndex] , arr[i] ];    // swap minimum element with the first element of unsorted portion of array
        }
    }
    return arr;
}


let arr = [64,25,22,12,11];
console.log(selectionSort(arr,arr.length));  // [ 11, 12, 22, 25, 64 ]