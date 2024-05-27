<details>
  <summary>Pattern 2: Pyramid</summary>
  ```javascript
    *
   ***
  *****
 *******
*********
  ```
```javascript

// Pyramid Star Pattern
const n = 5;
for (let i = 0; i < n; i++) {
  console.log(' '.repeat(n - i - 1) + '*'.repeat(2 * i + 1));
}
```
</details>