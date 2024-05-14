/* function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("A");
    console.log("V");
    console.log("E");
    console.log("N");
}

sayMyName() */ 

// fn of adding two numbers

/* function addTwoNumbers(number1, number2 ){
    console.log(number1 + number2); 
} 

const result = addTwoNumbers(3, 5) 
console.log("Result: ", result); */


/*   
function addTwoNumbers(number1, number2 ){

     //let result = number1 + number2 
     //return result
     return number1 + number2
}

const result = addTwoNumbers(3, 5) 
console.log("Result: ", result); 
*/ 

/*
function loginUserMessage(username = "sam"){

    if(username === undefined){

        console.log("Please enter a username");
        return
    }

    return `${username} just logged in `

}

console.log(loginUserMessage("heaven"));

*/


/* function calculateCartPrice(value1, value2, ...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000)); */ 

//passing objects  

const user={
    username: "heaven",
    price: 199
}

function handleObject(anyObject){

    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

/*
handleObject({
    username: "hunk",
    price: 399
})
*/

// passing arays 

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200, 400, 500, 2000]));