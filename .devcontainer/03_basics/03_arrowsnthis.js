// this :-

/*
const user = {
  username: "heaven",

  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();

user.username = "relish";

user.welcomeMessage();

console.log(this);

*/

/*
function chai(){

    let username = "heaven"
    console.log(this.username);
}
chai()  */

/*
const chai = function(){
    let username = "heaven"
    console.log(this.username);
}
chai()
*/

// arrow fn:-

/*
const chai = () => {
    let username = "heaven"
    console.log(this);
    console.log(this.username);
}
chai()
*/ 

/*
const addtwo = (num1, num2) => { 

    return num1 + num2
}
console.log(addtwo(3, 4)); 
*/

// implicit retuen:-

/* const addtwo = () => (`DB COONECTED`)

console.log(addtwo()); */

// using arrow fn 

/*
 ((name) => {
  console.log(`DB CONNECTED TO ${name}`);
})("HEAVEN") 

*/
