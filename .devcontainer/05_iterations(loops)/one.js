// for loop 

/*
for (let index = 0; index <= 10; index++) {
    const element = index;
if (element == 5) {
    
    console.log("5 is best number");
}

     console.log(element);
}
*/

// loops in loop

/*
for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value is: ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner loop value: ${j} and outer loop ${i}`);
        console.log(i + '*' + j + '=' + i*j);
    }
    
}
*/

// declaring array in loop 

/* 
let myArray = ["flash", "batman", "hulk"]

console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {

    const element = myArray[i];
    
    console.log(element);
}
*/ 


// break and continue 

/*
 for (let i = 1; i <= 20; i++) {

    if (i==5) {
        console.log(`Detected 5`);
        break
    }

   console.log(`Value of i is ${i}`);
    
 }
 */


 for (let i = 1; i <= 20; i++) {

    if (i==5) {
        console.log(`Detected 5`);
        continue
    }

   console.log(`Value of i is ${i}`);
    
 }