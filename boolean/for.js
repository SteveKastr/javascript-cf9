let sum = 0;


for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("sum:", sum);

let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
    sum += number;
}

console.log("sum with enhanced for loop:", sum);