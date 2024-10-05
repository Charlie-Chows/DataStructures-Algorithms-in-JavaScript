

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

