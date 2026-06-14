const stack = [1, 2, 3, 4, 5];

stack.push(6);
console.log(stack); // [1, 2, 3, 4, 5, 6]

const topElement = stack.pop();
console.log("Popped element:", topElement); // Popped element: 6
console.log(stack); // [1, 2, 3, 4, 5]