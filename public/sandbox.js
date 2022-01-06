"use strict";
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
//hello dear
console.log("hai fellas");
let array = ["kay", "beauty", "love"];
array.push("L'Oreal");
let ninja = {
    name: "kay",
    age: 25,
    belt: "black",
    skills: ["sneak", "hide", "steal"]
};
// let greet: Function;
// greet = () => {
//     console.log("hello")
// }
//optional parameters
// const add = (a: number, b: number, c?: number | string)
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(10, 16);
ninja.age = 26;
let user = {
    name: "Lavs",
    uid: 25
};
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
greet(user);
