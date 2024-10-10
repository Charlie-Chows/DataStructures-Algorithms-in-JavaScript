# Hashing 


## Array based Hashing
```
  let numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4];
  let hash = new Array(10).fill(0);

  for (let i = 0; i < numbers.length; i++) {
      hash[numbers[i]] += 1; 
  }

  for (let i = 0; i < hash.length; i++) {
      if (hash[i] > 0) {
          console.log(i + " appears " + hash[i] + " times");
      }
  }

```

## Map based Hashing
```

  let numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

  // Create a Map to store the frequency of each number
  let numFrequency = new Map();

  // Insert each number and track its frequency
  for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
      if (numFrequency.has(num)) {
          numFrequency.set(num, numFrequency.get(num) + 1); // Increment count
      } else {
          numFrequency.set(num, 1); // Initialize count to 1
      }
  }

  // Output the frequency of each number
  for (let [key, value] of numFrequency) {
      console.log(key + " appears " + value + " times");
  }

```

## Object based Hashing
```

  let numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

  // Create an object to store the frequency of each number
  let numFrequency = {};

  // Insert each number and track its frequency
  for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
      if (numFrequency[num]) {
          numFrequency[num] += 1; // Increment count
      } else {
          numFrequency[num] = 1; // Initialize count to 1
      }
  }

  // Output the frequency of each number
  for (let key in numFrequency) {
      console.log(key + " appears " + numFrequency[key] + " times");
  }

```