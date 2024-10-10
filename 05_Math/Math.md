

# Math

| No. | Questions                                                                                                                                                                                                                        |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [Problem 1](#Problem-1)                                                                                                                                                                                                 |
| 2   | [What is the history behind React evolution?](#What-is-the-history-behind-React-evolution)                                                                                                                                       |
| 3   | [What are the major features of React?](#what-are-the-major-features-of-react)                                                                                                                                                   |
| 4   | [What is JSX?](#what-is-jsx)   

## Problem 1 

<details>
  <summary>
<pre>
    Extraction of Digits
</pre>
  </summary>

  ```javascript
  let n = 7789;
  while (n > 0) {
    let ld = n % 10;  
    console.log(ld);  
    n = Math.floor(n / 10);
  }

```
</details>



## Problem 2

<details>
  <summary>
<pre>
  Reverse a Number
</pre>
  </summary>

  ```javascript
  let n = 7789;  
  let revNum = 0;
  while (n > 0) {
    let ld = n % 10;  
    revNum = ( revNum * 10 ) + ld;    
    n = Math.floor(n / 10);
  }
  console.log( revNum);
```
</details>

## Problem 3

<details>
  <summary>
<pre>
 Count Number of Digits
</pre>
  </summary>

  ```javascript
  let n = 7789;
  let count = 0;
  while (n > 0) {  
    count += 1;  
    n = Math.floor(n / 10);
  }
  console.log( count );

```
</details>
