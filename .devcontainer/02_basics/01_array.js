//arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros= ["hulk", "Iron-Man"]
const myArr2 = new Array (1, 2, 3, 4)
//console.log(myArr);
// console.log(myArr[4]);

// --------array methods-------//

// myArr.push(6)
// myArr.pop()

// myArr.unshift(-1)
// myArr.shift()

// console.log(myArr.indexOf(5));

const newArr = myArr.join()
//console.log(typeof newArr);
// console.log(typeof myArr);

//slice, splice



// console.log("A:", myArr);

const myn1 = myArr.slice(1, 3)
const myn2 = myArr.splice()

// console.log("spliced:", myn2);

// console.log("B:", myArr);

// array in array 

let marvel_heros = ["thor", "ironman", "spiderman"]

let dc_heros = ["batman", "flash", "superman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros); 

// const allNewHeros= [...marvel_heros, ...dc_heros]
// console.log(allNewHeros);

// many arrays in an array 

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] 

const realAnotherArr = anotherArr.flat(Infinity)

// console.log(realAnotherArr);

// console.log(Array.isArray("heaven"));
// console.log(Array.from("heaven"))

// console.log(Array.from({name: "heaven"}));

let score1 = 100
let score2 = 200
let score3 = 300 

console.log(Array.of(score1, score2, score3));



















