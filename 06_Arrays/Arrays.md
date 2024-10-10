
# Arrays

## Table of contents
| No. | Questions                               | Difficulty |
|-----|-----------------------------------------|------------|
|  1  | [How to iterate array](#how-to-iterate-array) | Basic     |
|  2  | [Largest Element in an array](#Largest-Element-in-an-array) | Basic     |





### How to Iterate Array 
<details>
  <summary>
    Click to open code
  </summary>

  ```javascript
  function arrayLength ( arr , n ) {
    for ( let i = 0; i < n; i++ ){
            arr[i];
    }
    return arr;
  }

  let arr = [ 10, 20, 30, 40, 50 ];
  console.log( arrayLength (arr , arr.length ));

```
</details>


### Largest Element in an Array

<details>
  <summary>Click to view all approaches</summary>

  <details>
    <summary>Brute Force Approach - o ( N log N )</summary>
    
   ```javascript
   //  Explanation: Sort the array and return the last element.
   //  Time Complexity: O(n log n) due to sorting.

  function largestElement ( arr ) {
    arr.sort( ( a, b ) => a - b );  
    return arr[ arr.length - 1 ];  
  }

  let arr = [10, 20, 4, 45, 99];
  console.log( largestElement( arr ) );

```
  </details>

   <details>
    <summary>Optimal Force Approach - O( N )</summary>
    
   ```javascript
   //  Explanation: declare one variable and compare with current element of array then update if it is large
   //  Time Complexity: O(log n) due to looping all elements in array

  function largestElement ( arr, n ) {
    let largest = arr[0];
    for ( let i = 0; i < n; i++ ) {
        if ( arr[i] > largest ) {
            largest = arr[i];
        }
    }
    return largest;
  }

  let arr = [10, 20, 4, 45, 99];
  console.log( largestElement( arr, arr.length ) );

```

  </details>

</details>


### Largest Element in an Array

<details>
  <summary>Click to view all approaches</summary>

  <details>
    <summary>Brute Force Approach</summary>
    
   ```javascript
   //  Explanation: Sort the array and return the last element.
   //  Time Complexity: O(n log n) due to sorting.

  function arrayLength ( arr , n ) {
    for ( let i = 0; i < n; i++ ){
            arr[i];
    }
    return arr;
  }

  let arr = [ 10, 20, 30, 40, 50 ];
  console.log( arrayLength (arr , arr.length ));
```

  </details>

   <details>
    <summary>Brute Force Approach</summary>
    
   ```javascript
   //  Explanation: Sort the array and return the last element.
   //  Time Complexity: O(n log n) due to sorting.

  function arrayLength ( arr , n ) {
    for ( let i = 0; i < n; i++ ){
            arr[i];
    }
    return arr;
  }

  let arr = [ 10, 20, 30, 40, 50 ];
  console.log( arrayLength (arr , arr.length ));
```

  </details>

   <details>
    <summary>Brute Force Approach</summary>
    
   ```javascript
   //  Explanation: Sort the array and return the last element.
   //  Time Complexity: O(n log n) due to sorting.

  function arrayLength ( arr , n ) {
    for ( let i = 0; i < n; i++ ){
            arr[i];
    }
    return arr;
  }

  let arr = [ 10, 20, 30, 40, 50 ];
  console.log( arrayLength (arr , arr.length ));
```

  </details>

</details>


