let str1 = "Hello";
let str2 = "World";

console.log(str1 === str2); // false

if (str1.localeCompare(str2, "el-GR") < 0) {
    console.log(str1 + " comes before " + str2);
} else if (str1.localeCompare(str2, "el-GR") > 0) {
    console.log(str1 + " comes after " + str2);
} else {
    console.log(str1 + " and " + str2 + " are equal");
}

console.log(str1[0]);

if (str1.includes("ell")) {
    console.log(str1 + " contains 'ell'");
}

console.log(str1.indexOf("lo"));

let greeting = str1 + " , " + str2 + "!";
console.log(greeting);

if (str1.toUpperCase() === str2.toUpperCase()) {
    console.log("The strings are equal when case is ignored.");
}

let str3 = " Hello, World! ";
console.log(str3.trim());

let str4 = "The quick brown fox jumps over the lazy dog.";
let newStr = str4.replace("fox", "cat");
let newStr2 = str4.replace(/the/gi, "a");

for (let i = 0; i < str1.length; i++) {
    console.log(str1[i]);
}

for (const char of str1) {
    console.log(char);
}

// substring
console.log(str1.substring(1, 4)); // "ell"

// slice
console.log(str1.slice(1, 4)); // "ell"
console.log(str1.slice(-3)); // "llo"