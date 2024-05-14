/*
var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
     c = 30

     console.log("INNER: ", a);
}
*/

// console.log(a)
// console.log(b)
// console.log(c)

//nested scopes:-

/*

function one (){

    const username = "heaven"

    function two(){

        const website ="youtube"

        console.log(username);
    }


    // console.log(website);

    // two()
}

*/

// one()

// doing same thing in loops:-

/*
if(true){

    const username = "heaven "

    if(username === "heaven "){

        const website = "youtube"
        // console.log(username + website);
    }
       // console.log(website); 
} */

  // console.log(username);

//interesting:-

function addone(num){
    return num + 1
}
addone(5)


const addtwo = function(num){
    return num + 2
}
addtwo(5)



