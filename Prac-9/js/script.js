let arr1 = [
  1,
  5,
  9,
  4,
  { name: "Ivan", mark: 3, subject: "JS" },
  function fourthPower(num) {
      return Math.pow(num, 4);
  },
  function printName(obj) {
      console.log(obj.name);
  },
  -6,
  14
];

console.log("Contents of arr1:");
arr1.forEach(item => console.log(item));

arr1.splice(arr1.indexOf(5), 1, 8);

arr1.splice(arr1.indexOf(4), 0, "Hello");

let arr2 = arr1.filter(item => typeof item === 'function');

console.log("Contents of arr2:");
arr2.forEach(item => console.log(item));

let arr3 = arr1.filter(item => typeof item === 'number');

console.log("Contents of arr3:");
arr3.forEach(item => console.log(item));

let arr3Reversed = arr3.slice().reverse();

console.log("Contents of arr3Reversed:");
arr3Reversed.forEach(item => console.log(item));

console.log("Index of -6 in arr1:", arr1.indexOf(-6));

let filteredArr1 = arr1.filter(item => typeof item === 'number' && item > 4);
console.log("Numeric elements in arr1 greater than 4:", filteredArr1);

let objectInArr1 = arr1.find(item => typeof item === 'object');
let functionInArr1 = arr1.find(item => typeof item === 'function');
functionInArr1(objectInArr1);

let functionForNegativeSix = arr1.find(item => typeof item === 'function' && item(-6));
console.log("Result of calculating 4th power for -6:", functionForNegativeSix);

console.log("Contents of arr1 using for...in:");
for (let index in arr1) {
  console.log(arr1[index]);
}

console.log("Properties of object in arr1 using for...in:");
for (let index in arr1) {
  if (typeof arr1[index] === 'object') {
      for (let key in arr1[index]) {
          console.log(key + ": " + arr1[index][key]);
      }
  }
}

console.log("Contents of arr1 using for...of:");
for (let item of arr1) {
  console.log(item);
}

arr1.version = "1.0.0";

console.log("Contents of arr1 with version property using for...in:");
for (let key in arr1) {
  console.log(arr1[key]);
}

console.log("Contents of arr1 using for...of:");
for (let item of arr1) {
  console.log(item);
}

let petryk = { name: "Petryk", skill: "JS", level: "junior" };
let mychajlyk = { name: "Mychajlyk", skill: "HTML/CSS", level: "middle" };
let volodyk = { name: "Volodyk", skill: "TS", level: "trainee" };

let map1 = new Map();
map1.set(petryk.name, petryk);
map1.set(mychajlyk.name, mychajlyk);
map1.set(volodyk.name, volodyk);

console.log("Presence of 'Ivanko' key in map1:", map1.has("Ivanko"));

console.log("Presence of 'Volodyk' key in map1:", map1.has("Volodyk"));

console.log("Keys of elements in map1 using for...of:");
for (let key of map1.keys()) {
  console.log(key);
}

map1.delete("Mychajlyk");

console.log("Data about elements in map1 using for...of:");
for (let [key, value] of map1) {
  console.log(`${key} is ${value.level} in ${value.skill}`);
}

let set1 = new Set();
set1.add(petryk);
set1.add(mychajlyk);
set1.add(volodyk);

let antypko = { name: "Antypko", skill: "PHP", level: "senior" };

console.log("Presence of 'Antypko' object in set1:", set1.has(antypko));

console.log("Presence of 'Mychajlyk' object in set1:", set1.has(mychajlyk));

console.log("Elements of set1 using for...of:");
for (let item of set1) {
  console.log(`${item.name} is ${item.level} in ${item.skill}`);
}

set1.delete(volodyk);

console.log("Data about elements in set1 using for...of:");
for (let item of set1) {
  console.log(`${item.name} is ${item.level} in ${item.skill}`);
}