const arr = [1, 2, 3, 4, 5];

const str = arr.join(' | ');
console.log(str); // Output: "1 | 2 | 3 | 4 | 5"

arr.push(6);
arr.push(7, 8);

delete arr[0]; // Deletes the first element (1) but leaves an empty slot in the array. Do not use it for removing elements from an array. Use splice instead.