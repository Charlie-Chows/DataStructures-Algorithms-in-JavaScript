# Sorting

## Selection Sort 

<details>
  <summary>
<pre>
<img src="https://github.com/user-attachments/assets/6c683b60-efac-425c-a1b6-e6347a1bd4af" />
</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function selectionSort(arr, n) {
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; 
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; 
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    console.log(arr);
  }

  let arr = [13, 46, 24, 52, 20, 9];
  selectionSort(arr, arr.length);

```
</details>


## Bubble Sort 

<details>
  <summary>
<pre>
<img src="https://github.com/user-attachments/assets/e97785c2-61fb-45d5-bab0-69ecf9334082" />
</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function bubbleSort ( arr, n ) {
    for ( let i = n - 1; i >= 1; i-- ) {
        for ( let j = 0; j < i; j++ ) {
            if ( arr[ j ] > arr[ j + 1 ] ) {
                [ arr[ j ], arr[ j + 1 ] ] =  [ arr[ j + 1 ], arr[ j ] ];
            }
        }
    }
    console.log ( arr );
  }

  let arr = [ 13, 46, 24, 52, 20, 9 ];
  bubbleSort ( arr, arr.length );

```
</details>

## Insertion Sort

<details>
  <summary>
<pre>
<img src="https://github.com/user-attachments/assets/eae239bd-91cc-4aba-975b-486ca55f8019" />
</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function insertionSort(arr, n) {
    for (let i = 0; i < n; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            j--;
        }
    }
    console.log( arr );
  }

  let arr = [13, 46, 24, 52, 20, 9];
  let n = arr.length;
  insertionSort(arr, n);

```
</details>
