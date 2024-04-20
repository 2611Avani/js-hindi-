// date 

let mydate = new Date()
// console.log(mydate.toJSON());
// console.log(typeof mydate);

// let myCreatedDate = new Date(2024, 7, 18)
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date(2024, 7, 18, 9, 0)
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getTime());

newDate.toLocaleString('default', {
    weekday: "narrow"
})
console.log(newDate);



