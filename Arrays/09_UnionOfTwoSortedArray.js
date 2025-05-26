
// TC : O ( 2N )
// TC : O ( N ) - to store array not for solving

function unionArray(arr1, arr2) {
    const result = [];
    let i = 0, j = 0;

    const pushIfNotDuplicate = (value) => {
        if (result.length === 0 || result[result.length - 1] !== value) {
            result.push(value);
        }
    };

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            pushIfNotDuplicate(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            pushIfNotDuplicate(arr2[j]);
            j++;
        } else { // if both are same values
            pushIfNotDuplicate(arr1[i]);  
            i++;
            j++;
        }
    }

    while (i < arr1.length) {
        pushIfNotDuplicate(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        pushIfNotDuplicate(arr2[j]);
        j++;
    }

    return result;
}

let arr1 = [ 1, 2, 3, 3, 4, 5 ];
let arr2 = [ 3, 3, 4, 5, 6, 7, 8 ];
console.log( unionArray( arr1, arr2 ) );    // [ 1, 2, 3, 4, 5, 6, 7, 8]
