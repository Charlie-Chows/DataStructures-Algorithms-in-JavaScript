
 function insertionSort ( arr , n) { 

    for ( let i = 0; i < n; i++ ){      // outer loop traverse the array elements

        let j = i;

        while ( j > 0 && arr[ j - 1 ] > arr[ j ] ) {    // if element is bigger then it will swap 

            [ arr[ j - 1] , arr[ j ] ] =  [ arr[ j ] , arr[ j - 1 ] ];

            j--;
        }
    }
    return arr;
 }

 let arr = [ 64, 25, 12, 22, 11 ];
 console.log(insertionSort( arr, arr.length ));