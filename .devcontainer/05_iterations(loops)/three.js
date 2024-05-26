// for - of loop 

// ["", "", ""]
// [{}, {}, {}]

/*

const arr  = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}
*/
/*
const greeting =  "hello Heaven"

for (const greet of greeting) {
    if (greet == " ") {
        continue
    }
    console.log(`Each char is ${greet}`);
}
*/

// maps 


const map = new Map()
map.set('IN', "India")
map.set('UK', "United Kingdom")
map.set('Fr', "France")
// map.set('IN', "India")

// console.log(map);

/*
for (const [key, value] of map) {
    console.log(key, ':', value);
}
*/

// objects are not iterable if v r using for-of loop but there 
// are many other way to iterate it which will b discussed later on 


/*
const myObject ={
    'game1' : 'NFS',
    'game2' : 'COD',
}

for (const [key, value] of myObject) {
    console.log(key, ':', value);
}
*/

