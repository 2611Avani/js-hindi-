// for each loop 

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function(val) {
   // console.log(val);
}  )

// using arror function 

coding.forEach(  (item) => {
    // console.log(item);
})


// print me 

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)

// foreach has others parameters as well 

coding.forEach( (item, index, array) => {
    // console.log(item, index, array)
})

// many objects in array 

const myCoding = [
    {
        language: "javascript",
        fileName: "js",
    },
    {
        language: "c++",
        fileName: "cpp",
    },
    {
        language: "python",
        fileName: "py",
    },
    {
        language: "ruby",
        fileName: "rb",
    },
]

myCoding.forEach(  (item) => {
    // console.log(item.language);
} )