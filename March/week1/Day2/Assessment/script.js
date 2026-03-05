// #1.Reverse the order of words in a sentence.
let sentence = "I love programming";
let reversed = sentence.split(" ").reverse().join(" ");
console.log(reversed);

//2. Find the length of a string without using .length.
let str = "Debasmita";
let count = 0;

for (let char of str) {
    count++;
}

console.log(count);

//3.Print each character of a string using a loop.
let str2 = "Debasmita Senapati";
for (let i = 0; i < str2.length; i++) {
    console.log(str2[i]);
}

//4.Count the number of vowels in a string.
let str3 = "Hello World";
let count1 = 0;

str3 = str3.toLowerCase();

for (let i = 0; i < str3.length; i++) {
    if (
        str[i] === 'a' ||
        str[i] === 'e' ||
        str[i] === 'i' ||
        str[i] === 'o' ||
        str[i] === 'u'
    ) {
        count++;
    }
}

console.log("Number of vowels:", count);

// 5.Count how many spaces are present in a string.
let str4 = "Hello World from JavaScript";
let count4 = str.split(" ").length - 1;
console.log("Number of spaces:", count4);

//6.Convert all characters of a string to uppercase.
let str5 = "my name is debasmita senapati"
console.log(str5.toUpperCase());
//7..Convert all characters of a string to lowercase.
let str6 = "I LOVE WEB DEVELOPMENT"
console.log(str6.toLowerCase());
//8.Extract the first 5 characters from a string
let str7 = "Debasmita"
console.log(str7.slice(0,5))

//9.Remove all spaces from a string.
let str8 = "Hello World From JS";

let result = str.split(" ").join("");

console.log(result);

//10.Convert a string into an array of characters.
let str9= "Debasmita";
let arr = str.split("");
console.log(arr);