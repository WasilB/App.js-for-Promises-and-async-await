// let userData =
//   '{ "name": "John", "age": 35, "isAdmin": false, "friends": ["a","b","c","d","e","f"] }';

//const { json } = require("stream/consumers");

// let user = JSON.parse(userData);

// user.name = " Wasil";
// user.age = 35;
// user.isAdmin = true;

// const upper = user.friends.map((element) => element.toUpperCase());

// console.log(upper);

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current, 0);

// console.log(result); // 15

// let user = {
//   name: "John Smith",
//   age: 35,
// };

// let json = JSON.parse(JSON.stringify(user));

// console.log(json);

// json.name = "wasil";
// console.log(json.name);
// console.log(user.name);

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   occupiedBy: [{ name: "John" }, { name: "Alice" }],
//   place: room,
// };

// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     return key != "" && value == meetup ? undefined : value;
//   })
// );

// function Calculator() {
//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b,
//   };

//   this.calculate = function (str) {
//     let split = str.split(" "),
//       a = +split[0],
//       op = split[1],
//       b = +split[2];

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   };

//   this.addMethod = function (name, func) {
//     this.methods[name] = func;
//   };
// }

// let calc = new Calculator();

// console.log(calc.calculate("3 + 7")); // 10
// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// console.log(result); // 8

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Wasil", age: 28 };

// let users = [john, pete, mary];

// let names = users.map((item) => item.name);

// console.log(names); // John, Pete, Mary

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map((user) => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id,
// }));

// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName); // John Smith

// let promise = new Promise(function (resolve, reject) {
//   reject("Done12");
// });

// //promise.then(console.log);
// promise.catch(console.log);

// new Promise((resolve, reject) => {
//   resolve("Vallue");
// })

//   .finally(() => console.log("Promise ready"))
//   .then((result) => console.log(result));

// new Promise((resolve, reject) => {
//   reject("error");
// })
//   .finally(() => console.log("Promise Ready"))
//   .catch((err) => console.log(err));

// new Promise((resolve, reject) => {
//   resolve("ok");
// })
//   .then((result) => {
//     blabla(); // no such function
//   })
//   .catch(console.log); // ReferenceError: blabla is not defined

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });

//   let result = await promise; // wait until the promise resolves (*)

//   console.log(result); // "done!"
// }

// f();

// function* generate() {
//   let result = yield "2 + 2 = ?"; // Error in this line
// }

// let generator = generate();

// let question = generator.next().value;

// try {
//   //generator.throw(new Error("The answer is not found in my database"));
//   console.log(generator.next(4).value);
// } catch (e) {
//   console.log(e);
// }
// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const g = gen();

// console.log(g.next()); // { value: 1, done: false }
// console.log(g.next()); // { value: undefined, done: true }
// console.log(g.return(g.next()));

// function* pseudoRandom(seed) {
//   // let value = seed;

//   while (true) {
//     seed = (seed * 16807) % 2147483647;
//     yield seed;
//   }
// }

// let generator = pseudoRandom(1);

// console.log(generator.next().value); // 16807
// console.log(generator.next().value); // 282475249
// console.log(generator.next().value); // 1622650073
// import { wasil } from "./express";

// let exp = wasil(2, 3);

// document.body.innerHTML = exp;
////////////////////////////////////////////////////////////

let sum = 0;
let array = [
  { name: "ABC", age: 123 },
  { name: "ABC", age: 124 },
  { name: "ABC", age: 125 },
  { name: "ABC", age: 126 },
  { name: "ABC", age: 127 },
  { name: "ABC", age: 128 },
  { name: "ABC", age: 129 },
];
////////////////////////////////////
async function getSum() {
  array.forEach((element) => {
    sum += element.age;
  });

  return sum;
}

async function run() {
  const result = await getSum();
  console.log(result);
}

// console.log(getSum());
run();
