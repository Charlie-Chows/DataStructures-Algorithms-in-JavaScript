function bubbleSort ( arr , n ) {

	for ( let i =  n-1; i  >= 0; i-- ) {  // Outer loop traverse array elements from backward

		for ( j = 0; j <= i; j++ ) {    // Inner loop: Compare and swap adjacent elements if they are in the wrong order

			if ( arr[j] > arr[j + 1] ) {    
				[ arr[j] , arr[j + 1] ] = [ arr[j + 1] , arr[j] ];
            }
        }
    }
    return arr;
}

let arr = [ 13, 46, 24,52, 20,9 ];
console.log(bubbleSort ( arr, arr.length ));
