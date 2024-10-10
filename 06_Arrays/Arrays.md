
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


### Largest Element in an array
<details>
  <summary>
    Click to open code
  </summary>
  ```javascript
  function largestElement ( arr ) {
    arr.sort( ( a, b ) => a - b );  
    return arr[ arr.length - 1 ];  
  }

  let arr = [10, 20, 4, 45, 99];
  console.log( largestElement( arr ) );
```
</details>

