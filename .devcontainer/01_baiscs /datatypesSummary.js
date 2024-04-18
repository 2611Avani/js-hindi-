const score = 100
const scoreValue= 100.3

const isLoggedIn = false
const outTemp = null
let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId)

const bigNumber = 1234567891011121314151617181920n

// Arrays objects n functions 

const heros = ["shaktiman", "nagraj", "doga" ]
let myobj = {
    name: "avani",
    age: 20,

}

const myFunction = function(){
    //console.log("hello world");
}

//console.log(typeof myFunction);


//--------------------------------stacks and heap memory in js ---------------------------------------------//


let myyoutubename = "avani"

let anothername = myyoutubename

anothername = "coc"

// console.log(myyoutubename);
// console.log(anothername);

let user1={

    email:"abc@gmail.com",

    upi:"@abc"
}

let user2 = user1

user2.email= "def@gmail.com"

console.log(user1.email);
console.log(user2.email);
