/*
String a= "I Love Javascript"
O/p Javascript Love I
*/

let sentence = "I Love Javascript"
let result1 = sentence.split(" ").reverse().join(" ");
console.log(result1);
console.log("======End of result1");

let result2 = sentence.split("").reverse().join(" ");
console.log(result2);
console.log("======End of result2");

let result3 = sentence.split("").reverse().join("");
console.log(result3);
console.log("======End of result3");

console.log(sentence.split(" ").reverse().join(" "));
console.log("======End of sentence");

console.log("*----------------------------------------------------------------------------------------*");

let str = "abc-123";
let result4 = str.split("-");
console.log(`[${result4[0]}] [${result4[1]}]`);

console.log("*----------------------------------------------------------------------------------------*");
// Generic Solution (Works for Any Value)
extractParts("abc-2019");
function extractParts(str) {
    const parts = str.split("-");

    parts.forEach(part => {
        console.log(`[${part}]`);
    });
}
console.log("*----------------------------------------------------------------------------------------*");

// Using Regular Expression
let str1 = "abc-2019";

let matches = str1.match(/[a-zA-Z]+|\d+/g);

console.log(`[${matches[0]}] [${matches[1]}]`);
