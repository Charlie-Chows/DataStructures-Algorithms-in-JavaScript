

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
  // ITERATIVE APPROACH 

  function starPattern( n ) {
    for ( let row = 1; row <= n; row++ ){
        star = "";
        for( let col = 1; col <= row; col++ ){
            star = star + "* ";
        }
    console.log( star );
    }
  }

  starPattern ( 5 );

```

  ```javascript
  // RECURSIVE APPROACH
  
function printRow ( n ,row, col = 1 ){
    if ( col > row ){
        return "";
    }
    return "* " + printRow( n,row, col + 1 );
}

function starPattern ( n , row = 1 ){
    if ( row > n ){
        return;
    }
    console.log( printRow( n,row ));
    starPattern ( n , row + 1 );
}

starPattern ( 5 );



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
  // ITERATIVE APPROACH 

  function starPattern( n ) {
    for ( let row = 1; row <= n; row++ ){
       let result = "";
        for ( let col = 1; col <= row; col++ ){
            result = result + col + " ";
        }
        console.log( result.trim() );
    }
  }
  starPattern( 5 );

```

  ```javascript
  // RECURSIVE APPROACH

function printRow ( n ,row, col = 1 ){
    if ( col > row ){
        return "";
    }
    return col + " " + printRow( n,row, col + 1 );
}

function starPattern ( n , row = 1 ){
    if ( row > n ){
        return;
    }
    console.log( printRow( n,row ));
    starPattern ( n , row + 1 );
}

starPattern ( 5 );

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
  // ITERATIVE APPROACH 

  function starPattern( n ) {
    for ( let row = 1; row <= n; row++ ){
       let result = "";
        for ( let col = 1; col <= row; col++ ){
            result = result + row + " ";
        }
        console.log( result.trim() );
    }
  }
  starPattern( 5 );

```

  ```javascript
  // RECURSIVE APPROACH

function printRow ( n ,row, col = 1 ){
    if ( col > row ){
        return "";
    }
    return row + " " + printRow( n,row, col + 1 );
}

function starPattern ( n , row = 1 ){
    if ( row > n ){
        return;
    }
    console.log( printRow( n,row ));
    starPattern ( n , row + 1 );
}

starPattern ( 5 );

```
</details>


## Pattern 5

<details>
  <summary>
<pre>
  * * * * * 
  * * * * 
  * * *
  * *  
  * 
</pre>
  </summary>

  ```javascript
  // ITERATIVE APPROACH 

  function starPattern ( n ){
    for ( let row = 0; row < n; row++ ){
        let star = "";
        for ( let col = 0; col < n - row; col++ ){
            star = star + "* ";
        }
        console.log ( star );
    }
}

starPattern ( 5 );

```

  ```javascript
  // RECURSIVE APPROACH

function printRow( n, row, col = 0 ){
    if ( col >= n - row ){
        return "";
    }
    return "* " + printRow( n, row, col + 1 );
}

function starPattern ( n, row = 0 ){
    if ( row >= n ){
        return;
    }
    console.log( printRow( n ,row ));
    starPattern(n,row + 1);
}

starPattern ( 5 );

```
</details>




## Pattern 6

<details>
  <summary>
<pre>
  1 2 3 4 5 
  1 2 3 4 
  1 2 3
  1 2 
  1 
</pre>
  </summary>

  ```javascript
  // ITERATIVE APPROACH 

  function starPattern ( n ){
    for ( let row = 1; row <= n; row++ ){
        let star = "";
        for ( let col = 1; col <= n - row + 1; col++ ){
            star = star + col + " ";
        }
        console.log ( star );
    }
}

starPattern ( 5 );



```

  ```javascript
  // RECURSIVE APPROACH


function printRow( n, row, col = 1 ){
    if ( col > n - row + 1 ){
        return "";
    }
    return col + " " + printRow( n, row, col + 1 );
}

function starPattern ( n, row = 1 ){
    if ( row > n ){
        return;
    }
    console.log( printRow( n ,row ));
    starPattern(n,row + 1);
}

starPattern ( 5 );

```
</details>




## Pattern 7

<details>
  <summary>
<pre>
          *
        * * *
      * * * * *
    * * * * * * *
  * * * * * * * * *
</pre>
  </summary>

  ```javascript
  // ITERATIVE APPROACH 

  function starPattern ( n ) {
    for ( let row = 1; row <= n; row++ ){
        let fullLine = "";
        for ( let space = n-row ; space > 0 ; space-- ){
            fullLine += "$";
        }
        for ( let star = 1; star <= row * 2 - 1; star++ ){
            fullLine += "*";
        }
        for (let space = n-row ; space > 0; space-- ){
            fullLine += "$";
        }
        console.log( fullLine );
    }
}

starPattern ( 5 );
```

  ```javascript
  // RECURSIVE APPROACH
  
function printRow(n, row, currentCharIndex = 1, fullLine = "") {
    if (currentCharIndex > 2 * n - 1) {
        console.log(fullLine);
        return;
    }

    if (currentCharIndex <= n - row || currentCharIndex > n + row - 1) {
        fullLine += "$";
    } else {
        fullLine += "*";
    }

    printRow(n, row, currentCharIndex + 1, fullLine);
}

function starPattern(n, row = 1) {
    if (row > n) {
        return;
    }

    printRow(n, row);
    starPattern(n, row + 1);
}

starPattern(5);


```
</details>



