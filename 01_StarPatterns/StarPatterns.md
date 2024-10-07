

# Star Patterns

## Pattern 1

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
  TC : O ( N ^ 2 )

  function pattern ( n ) {
    for ( let i = 0; i < n; i++ ) {
        let star = "";
        for ( let j = 0; j < n; j++ ) {
            star = star + "* ";
        }
        console.log( star );
    }
  }

  pattern( 5 );
```
</details>



## Pattern 2

<details>
  <summary>
<pre>
  * 
  * * 
  * * * 
  * * * * 
  * * * * * 
</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function pattern ( n ) {
    for ( let i = 1; i <= n; i++ ) {
        let star = "";
        for ( let j = 1; j <= i; j++ ) {
            star = star + "* ";
        }
        console.log( star );
    }
}

pattern ( 5 );
```
</details>

## Pattern 3

<details>
  <summary>
<pre>
 1 
 1 2 
 1 2 3 
 1 2 3 4 
 1 2 3 4 5 
</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function pattern ( n ) {
    for ( let i = 1; i <= n; i++ ) {
        let num = "";
        for ( let j = 1; j <= i; j++ ) {
            num = num + j + " ";
        }
        console.log( num );
    }
  }

pattern ( 5 );
```
</details>

## Pattern 4

<details>
  <summary>
<pre>
 1 
 2 2 
 3 3 3 
 4 4 4 4 
 5 5 5 5 5 
</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function pattern ( n ) {
    for ( let i = 1; i <= n; i++ ) {
        let num = "";
        for ( let j = 1; j <= i; j++ ) {
            num = num + i + " ";
        }
        console.log( num );
    }
  }

pattern ( 5 );
```
</details>

## Pattern 5

<details>
  <summary>
<pre>
 *  *  *  *  *  
 *  *  *  *  
 *  *  *  
 *  *  
 *   
</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function pattern ( n ) {
    for ( let i = n; i > 0; i-- ) {
        let star = "";
        for ( let j = 0; j < i; j++ ) {
            star = star + "*  ";
        }
        console.log( star );
    }
  }

  pattern ( 5 );
```
</details>

## Pattern 6

<details>
  <summary>
<pre>
 1  2  3  4  5  
 1  2  3  4  
 1  2  3  
 1  2  
 1  
</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function pattern ( n ) {
    for ( let i = n; i >= 1; i-- ) {
        let num = "";
        for ( let j = 1; j <= i; j++ ) {
            num = num + j + "  ";
        }
        console.log( num );
    }
  }

  pattern ( 5 );
```
</details>

## Pattern 7

<details>
  <summary>
<pre>
     *    
    ***   
   *****  
  ******* 
 *********
</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function pattern ( n ) {
    for ( let i = 1; i <= n; i++ ) {
         let row = "";
        for ( let j = n; j > i; j-- )  {
            row = row + " ";
        }
        for ( let k = 1; k <= 2*i - 1; k++ ) {
            row = row + "*";
        }
        for ( let j = n; j > i; j-- )  {
            row = row + " ";
        }
        console.log( row );
    }
  }

  pattern ( 5 );
```
</details>

## Pattern 8

<details>
  <summary>
<pre>
  *********
   ******* 
    *****  
     ***   
      *    
</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function pattern ( n ) {
    for ( let i = n; i >= 1; i-- ) {
        let row = "";
        for ( let j = i; j < n; j++ ) {
            row = row + " ";
        }
        for ( let k = 1; k <= 2*i - 1; k++ ) {
            row = row + "*";
        }
        for ( let j = i; j < n; j++ ) {
            row = row + " ";
        }
        console.log ( row );
    }
  }

  pattern ( 5 );
```
</details>

## Pattern 9

<details>
  <summary>
<pre>
 * 
 * * 
 * * * 
 * * * * 
 * * * * * 
 * * * * 
 * * * 
 * * 
 *  
</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function pattern ( n ) {
    for ( let i = 1; i <= 2*n - 1; i++ ) {
        let row = "";
        if ( i <= n ) {
            for ( let j = 1; j <= i; j++ ) {
                row = row + "* ";
            }
        }
        else {
            for (let j = 1; j <= 2*n - i; j++ ) {
                 row = row + "* ";
            }
        }
        console.log( row );
    }
  }

  pattern ( 5 );
```
</details>

## Pattern 10

<details>
  <summary>
<pre>
         *     
       * * *    
     * * * * *   
   * * * * * * *  
 * * * * * * * * * 
   * * * * * * *  
     * * * * *   
      * * *    
        *  
</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function pattern ( n ) {
   for ( let i = 1; i <= 2*n - 1; i++ ) {
       let row = "";
       if ( i <= n ) {
           for ( let j = n; j > i; j-- ) {
               row = row + " ";
           }
           for ( let k = 1; k <= 2*i - 1; k++ ) {
               row = row + "* ";
           }
           for ( let j = n; j > i; j-- ) {
               row = row + " ";
           }
       }
       else {
           for ( let j = 1; j <= i - n; j++ ) {
               row = row + " ";
           }
           for ( let k = 1; k <= 2 * (2 * n - i) - 1; k++ ) {
                row = row + "* ";
           }
           for ( let j = 1; j <= i - n; j++ ) {
               row = row + " ";
           }
       }
       console.log( row );
   }
  }

  pattern ( 5 );
```
</details>

## Pattern 11

<details>
  <summary>
<pre>
  1
  01
  101
  0101
  10101
</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function pattern ( n ) {
    for ( let i = 0; i < n; i++ ) {
        let row = "";
       let start = ( i % 2 === 0 ) ? 1 : 0;
        for ( let j = 0; j <= i; j++ ) {
             row =row + start
            start = start - 1;
        }
        console.log( row );
    }
  }

  pattern ( 5 );

```
</details>


## Pattern 12

<details>
  <summary>
<pre>

 1 - - - - - - - - 1 
 1 2 - - - - - - 2 1 
 1 2 3 - - - - 3 2 1 
 1 2 3 4 - - 4 3 2 1 
 1 2 3 4 5 5 4 3 2 1 

</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function pattern ( n ) {
    for ( let i = 1; i <= n; i++ ) {
        let row = "";
        for ( let j = 1; j <= i; j++ ) {
            row = row + j + " ";
        }
        for ( let k = 1; k <= 2*n - 2*i; k++ ) {
            row += "-" + " ";
        }
        for ( let j = i; j > 0; j-- ) {
            row += j + " ";
        }
        console.log( row );
    }
  }

  pattern( 5 );

```
</details>


## Pattern 13

<details>
  <summary>
<pre>

 1 
 2 3 
 4 5 6 
 7 8 9 10 
 11 12 13 14 15 

</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function pattern ( n ) {
    let count = 0;
    for ( let i = 1;  i <= n; i++ ) {
        let row = "";
        for ( let j = 1; j <= i; j++ ) {
            count += 1;
            row += count + " ";
        }
        console.log( row );
    }
  }

  pattern ( 5 );

```
</details>


## Pattern 14

<details>
  <summary>
<pre>

 A 
 A B 
 A B C 
 A B C D 
 A B C D E 

</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function pattern ( n ) {
    for ( let i = 1;  i <= n; i++ ) {
        let char ="A";
        let row = "";
        for ( let j = 1; j <= i; j++ ) {
           row += char + " ";
           char = String.fromCharCode(char.charCodeAt(0) + 1);
        }
        console.log( row );
    }
  }

  pattern ( 5 );

```
</details>

## Pattern 15

<details>
  <summary>
<pre>

 A B C D E 
 A B C D 
 A B C 
 A B 
 A 

</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function pattern ( n ) {
    for ( let i = n; i >= 1; i-- ) {
        let char = "A";
        let row = "";
        for ( let j = i; j >= 1; j-- ) {
            row += char + " ";
            char = String.fromCharCode( char.charCodeAt(0) + 1 );
        }
        console.log( row );
    }
  }

  pattern ( 5 );

```
</details>


## Pattern 16

<details>
  <summary>
<pre>

 A 
 B B 
 C C C 
 D D D D 
 E E E E E

</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function pattern ( n ) {
    let char = "A";
    for ( let i = 1; i <= n; i++ ) { 
        let row = "";
        for ( let j = 1; j <= i; j++ ) {
            row += char + " ";
        }
        console.log( row );
        char = String.fromCharCode( char.charCodeAt(0) + 1 );
    }
  }

  pattern ( 5 );

```
</details>


## Pattern 17

<details>
  <summary>
<pre>
```
     A    
    ABA   
   ABCBA  
  ABCDCBA 
 ABCDEDCBA
```
</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function pattern(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n - i - 1; j++) {
            row += " ";
        }
        let ch = 'A'; // Reset ch for each row
        const breakpoint = Math.floor((2 * i + 1) / 2);
        for (let j = 1; j <= 2 * i + 1; j++) {
            row += ch; 
            if (j < breakpoint + 1) { // Increment until breakpoint
                ch = String.fromCharCode(ch.charCodeAt(0) + 1);
            } else { // Decrement after the breakpoint
                ch = String.fromCharCode(ch.charCodeAt(0) - 1);
            }
        }
        for (let j = 0; j < n - i - 1; j++) {
            row += " ";
        }
        console.log(row);
    }
  }

  pattern( 5 );


```
</details>



## Pattern 18

<details>
  <summary>
<pre>
```
**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********
```
</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function pattern(n) {
    // For the upper half of the pattern
    let iniS = 0; // Initial spaces

    // Outer loop for the upper half
    for (let i = 0; i < n; i++) {
        let row = "";

        // For printing the stars in the row (left part)
        for (let j = 1; j <= n - i; j++) {
            row += "*";
        }

        // For printing the spaces in the row (middle spaces)
        for (let j = 0; j < iniS; j++) {
            row += " ";
        }

        // For printing the stars in the row (right part)
        for (let j = 1; j <= n - i; j++) {
            row += "*";
        }

        iniS += 2; // The spaces increase by 2 for the next row

        console.log(row); // Print the row
    }

    // For the lower half of the pattern
    iniS = 2 * n - 2; // Initial spaces for the lower half

    // Outer loop for the lower half
    for (let i = 1; i <= n; i++) {
        let row = "";

        // For printing the stars in the row (left part)
        for (let j = 1; j <= i; j++) {
            row += "*";
        }

        // For printing the spaces in the row (middle spaces)
        for (let j = 0; j < iniS; j++) {
            row += " ";
        }

        // For printing the stars in the row (right part)
        for (let j = 1; j <= i; j++) {
            row += "*";
        }

        iniS -= 2; // The spaces decrease by 2 for the next row

        console.log(row); // Print the row
    }
  }

  pattern( 5 );

```
</details>

## Pattern 19

<details>
  <summary>
<pre>

```
*--------*
**------**
***----***
****--****
**********
****--****
***----***
**------**
*--------*
```

</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

  function  pattern ( n ) {
   
    for ( let i = 1; i <= 2*n - 1; i++ ) {
        let row = "";
        if ( i <= n ) {
            for ( let j = 1; j <= i; j++ ) {
                row += "*";
            }
            for ( let k = 1; k <= 2*n - 2*i; k++ ) {
                row += "-";
            }
            for ( let j = 1; j <= i; j++ ) {
                row += "*";
            }
        }
        else {
            for ( let j = 1; j <= 2*n - i; j++ ) {
                 row += "*";
            }
            for ( let k = 1; k <= 2 * (i - n); k++) {
                row += "-";
            }
            for ( let j = 1; j <= 2*n - i; j++ ) {
                 row += "*";
            }
        }
        console.log( row );
    }
  }

  pattern ( 5 );
```
</details>

## Pattern 20

<details>
  <summary>
<pre>
 *****
 *   *
 *   *
 *   *
 *****

</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

function pattern ( n ) {
    for ( let i = 1; i <= n; i++ ) {
        let row = "";
        for ( let j = 1; j <=n; j++ ) {
            if ( i === 1 || i === n || j === 1 || j === n ) {
                row += "*";
            }
            else {
                 row += " ";
            }
        }
        console.log ( row );
    }
}

pattern ( 5 );

```
</details>










# QUIZ 

<details>
  <summary>
<pre>
 
*********
 ******* 
  *****  
   ***   
    *    
   ***   
  *****  
 ******* 
*********
</pre>
  </summary>

  ```javascript
  TC : O ( N ^ 2 )

function pattern ( n ) {
    for ( let i = 1; i <= 2*n - 1; i++ ) {
        let row = "";
        if ( i <= n ) {
            for ( let j = 0; j < i - 1; j++ ) {
                row += " ";
            }
            for ( let k = 1; k <= 2*n - 2*i + 1; k++ ) {
                row += "*";
            }
            for ( let j = 0; j < i - 1; j++ ) {
                row += " ";
            }
        }
        else {
             for ( let j = 1; j <= 2*n - i - 1; j++ ) {
                 row += " ";
             }
            for ( let k = 1; k <= 2*( i - n ) + 1; k++ ) {
                row += "*";
            }
             for ( let j = 1; j <= 2*n - i - 1; j++ ) {
                 row += " ";
             }
            }
        console.log( row );
        
    }
 }

 pattern ( 5 );

```
</details>









