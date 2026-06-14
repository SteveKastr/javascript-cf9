const queue = [1, 2, 3, 4, 5];

queue.push(6);
console.log(queue); // [1, 2, 3, 4, 5, 6]

const frontElement = queue.shift();
console.log("Dequeued element:", frontElement);
console.log(queue); // [2, 3, 4, 5, 6]
