// singleton 
// Object.create

// object literals 

const mySym = Symbol("key1")   // symbol declaration primitivw data types 

const Jsuser = {

    [mySym]: "key1",
    name: "Heaven",
    age: 21,
    location: "Indore",
    email: "heaven@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["tuesday", "sunday"],
    "full name": "Heaven J. ", 
    "location state" : "M.P.",
    }

    // console.log(Jsuser.name);
    // Jsuser.name = "hunk"
    // console.log(Jsuser.name);
    // Object.freeze(Jsuser)
    // Jsuser.name= "stud"
    // console.log(Jsuser.name);


    // console.log(Jsuser[mySym]);
    // console.log(typeof mySym);
    // console.log(typeof Jsuser[mySym])
    // console.log(typeof [mySym]);

// two ways to acces values of object

// console.log(Jsuser.age); // 1st way = which is not wrong but should not b preferred 
// console.log(Jsuser["age"]); // 2nd way = more correct and should always be preferred 
// console.log(Jsuser["full name"]);
// console.log(Jsuser["location state"]);// cannot b accessed in 1st way 

// console.log(Jsuser);

// declaring fn 

// Jsuser.greeting= function(){
   //  console.log("hello");}
// Jsuser.greetingTwo= function(){
  //   console.log(`hello ${Jsuser.name}`);}
// console.log(Jsuser.greeting());
// console.log(Jsuser.greetingTwo());

// const tinderuser2 = new Object() //singleton object
// console.log(tinderuser2)

const tinderuser = {} //non singleton objecton 

tinderuser.id = "101"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

// objects in object 

const regularUser = {
    fullName : {
        userFullName: {
            firstName: "Rose",
            lastName: "Park"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.fullName.userFullName.lastName);

const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"c", 4:"d"}
const obj3 = { 5:"e", 6:"f"}

// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);


// const obj4 = {obj1, obj2, obj3}
// console.log(obj4);
 
// when valus come from database 

const users = [ { id: 1, age: 12 }, { id: 2, age: 21 }, { id: 3, age: 25 } ]
// console.log( users[2].age)



console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLogged'));







