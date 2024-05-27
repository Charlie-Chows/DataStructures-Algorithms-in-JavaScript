

# Star Patterns

## 1.Square Pattern

<details>
  <summary>
<pre>
  * * * * * 
  * * * * * 
  * * * * * 
  * * * * * 
  * * * * * 
</pre>
  </summary>

  ```javascript
  function squarePattern ( num ) {
    for ( let row = 1; row <= num; row++ ) {
        let star = '';
        for ( let col = 1; col <= num; col++ ) {
            star = star + "* ";
        }
    console.log(star);
    }
}

squarePattern(5);
```
### Explanation

#### How it works:

##### 1. The function name and input:
   * The function is called squarePattern.
   * It takes one input called num. This input tells us how many rows and columns the square will have. For example, if num is 5, the square will be 5 rows high and 5 columns wide.
##### 2.The outer loop:
   * This loop counts the rows. It starts at 1 and goes up to the number num.
   * For each row, it does the following.
##### 3.The inner loop:
   * This loop counts the columns. It starts at 1 and goes up to the number num.
   * It adds a star (*) followed by a space ( ) to a string called star.
##### 4.Printing the stars:
   * After the inner loop finishes, the star string contains a row of stars.
   * This row is then printed out using console.log(star).

### Execution
#### Explanation of `squarePattern` Function

##### 1. First Row (row = 1):
* Start with an empty string: `star = ''`
* Add 5 stars with spaces:
  * `col = 1`: `star = '* '`
  * `col = 2`: `star = '* * '`
  * `col = 3`: `star = '* * * '`
  * `col = 4`: `star = '* * * * '`
  * `col = 5`: `star = '* * * * * '`
* Print the row: `* * * * * ` Now it will print whole 5 stars in console, till now stars are appending to  star(variable name) string

##### 2. Second Row (row = 2):
* Start with an empty string: `star = ''`
* Add 5 stars with spaces:
  * `col = 1`: `star = '* '`
  * `col = 2`: `star = '* * '`
  * `col = 3`: `star = '* * * '`
  * `col = 4`: `star = '* * * * '`
  * `col = 5`: `star = '* * * * * '`
* Print the row: `* * * * * `

##### 3. Third Row (row = 3):
* Start with an empty string: `star = ''`
* Add 5 stars with spaces:
  * `col = 1`: `star = '* '`
  * `col = 2`: `star = '* * '`
  * `col = 3`: `star = '* * * '`
  * `col = 4`: `star = '* * * * '`
  * `col = 5`: `star = '* * * * * '`
* Print the row: `* * * * * `

##### 4. Fourth Row (row = 4):
* Start with an empty string: `star = ''`
* Add 5 stars with spaces:
  * `col = 1`: `star = '* '`
  * `col = 2`: `star = '* * '`
  * `col = 3`: `star = '* * * '`
  * `col = 4`: `star = '* * * * '`
  * `col = 5`: `star = '* * * * * '`
* Print the row: `* * * * * `

##### 5. Fifth Row (row = 5):
* Start with an empty string: `star = ''`
* Add 5 stars with spaces:
  * `col = 1`: `star = '* '`
  * `col = 2`: `star = '* * '`
  * `col = 3`: `star = '* * * '`
  * `col = 4`: `star = '* * * * '`
  * `col = 5`: `star = '* * * * * '`
* Print the row: `* * * * * `

### Summary
* Each time, the outer loop goes to the next row and the inner loop adds stars to that row until there are 5 stars. This repeats until all rows are printed, creating a 5x5 square of stars.

</details>
