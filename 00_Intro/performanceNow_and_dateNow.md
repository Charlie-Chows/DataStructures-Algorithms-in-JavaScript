# performance.now() & Date.now()

<details>
  <summary>What are performance.now( )  &  Date.now( ) ? What is the difference between them ?</summary>

  `performance.now()` and `Date.now()` are both methods for measuring time, but they serve different purposes and have different precision.

  ## `Date.now()`
  - Returns the number of milliseconds starts from since January 1, 1970 (Unix Epoch).
  - Has millisecond precision.
  - Example usage:
    ```javascript
    var startDate = Date.now();
    // Some operations
    var endDate = Date.now();
    console.log("startDate:", startDate);
    console.log("Time taken using Date.now(): " + (endDate - startDate) + " milliseconds");
    console.log("endDate:", endDate);
    ```
    ### Example Output
  ```javascript
      // Output for Date.now()
      startDate: 1721413468589
      Time taken using Date.now(): 0 milliseconds
      endDate: 1721413468589
  ```

  ## `performance.now()`
  - Returns the number of milliseconds (with high precision) starts from since the page started loading.
  - Typically has microsecond precision.
  - Example usage:
    ```javascript
    var startPerf = performance.now();
    // Some operations
    var endPerf = performance.now();
    console.log("startPerf:", startPerf);
    console.log("Time taken using performance.now(): " + (endPerf - startPerf) + " milliseconds");
    console.log("endPerf:", endPerf);
    ```

  - Example Output
  ```javascript
    // Output for performance.now()
    startPerf: 5953343
    Time taken using performance.now(): 0 milliseconds
    endPerf: 5953343
 ```
</details>
