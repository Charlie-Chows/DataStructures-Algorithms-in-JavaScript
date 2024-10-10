
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
    <summary>Brute Force Approach</summary>

    **Explanation**: Sort the array and return the last element.

    ```javascript
    function largestElementBruteForce(arr) {
      arr.sort((a, b) => a - b);  // Sorting the array
      return arr[arr.length - 1];  // Largest element is the last one
    }

    let arr = [10, 20, 4, 45, 99];
    console.log(largestElementBruteForce(arr));  // Output: 99
    ```

    **Time Complexity**: O(n log n) due to sorting.

  </details>

  <details>
    <summary>Better Approach</summary>

    **Explanation**: Traverse the array and keep track of the maximum element without sorting.

    ```javascript
    function largestElementBetter(arr) {
      let max = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i];
        }
      }
      return max;
    }

    let arr = [10, 20, 4, 45, 99];
    console.log(largestElementBetter(arr));  // Output: 99
    ```

    **Time Complexity**: O(n), where n is the number of elements in the array.

  </details>

  <details>
    <summary>Optimal Approach</summary>

    **Explanation**: Use the `Math.max()` function with the spread operator to find the largest element.

    ```javascript
    function largestElementOptimal(arr) {
      return Math.max(...arr);  // Using spread operator to pass array elements
    }

    let arr = [10, 20, 4, 45, 99];
    console.log(largestElementOptimal(arr));  // Output: 99
    ```

    **Time Complexity**: O(n) using the spread operator and `Math.max()`.

  </details>

</details>


