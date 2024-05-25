// if 

/* if (condition) {
    
} */ 

// if- else

/* if (condition) {
    
} else {
    
} */

// scope 

/* const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User Power: ${power}`);
}

console.log(`User Power: ${power}`); */

// short hand notation / implicit scope 
/*
const balance = 1000

if (balance > 500) console.log("test"),

console.log("test 2");
*/ 

// nesting - used to check multiple conditions

/*
const balance = 1000
if (balance < 500) {
    console.log("less than 500");
} 
else if (balance < 750 ) {
    console.log("less than 750");
}
else if (balance < 900) {
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}
*/

// bitwise operators - &,, |, ^, ~, <<, >>, >>>.

/*
const userLggedIn = true
const debitCard  = true 
const loggedInfromGoogle = false
const userLggedInFromEmail = true

if (userLggedIn && debitCard) {
    console.log("Allow To Buy");
}

if (userLggedInFromEmail || userLggedInFromGoogle) {
    console.log("user loggedIn");
}
*/



