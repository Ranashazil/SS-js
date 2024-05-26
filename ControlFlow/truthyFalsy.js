// const userEmail = "shazishiza" //  string ko truthy value assume kiya jata ha
// if (userEmail) {
//     console.log("have an email");
// }
// else{
//     console.log("not have an email");
// }


// const userEmail = "" // empty string ko falsy value assume kiya jata ha
// if (userEmail) {
//     console.log("have an email");
// }
// else{
//     console.log("not have an email");
// }


const userEmail = [] // empty array or filled ko truthly value assume kiya jata ha
if (userEmail) {
    console.log("have an email");
}
else{
    console.log("not have an email");
}



// Falsy values are...
// 1- false
// 2- 0
// 3-  -0
// 4- BigInt 2n
// 5- ""
// 6- undefined 
// 7- null 
// 8- NaN

// truthy values are ...
// 1- "0"
// 2- "shazishiza"
// 3- " "
// 4- "false"
// 5- {}
// 6- []
// 7- function(){}



// empty array ko check krne ka tarika ... k ye empty kese ha
if (userEmail.length === 0) {
    console.log("array is empty");
}


// empty object ko check krne ka trika k ye empty kese ha 
const emObj = {}
if (Object.keys(emObj).length === 0) { //  Object.keys(emObj) this will return you an array and now you revise the process of array from there
    console.log("object is empty");
}


// nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 9
val1 = null ?? 7 // null value asign nI HOGI YHN koi agey number nai hoga function hoga is se koi value arhi hogi nai to nai to null hi assign krdo 
val1 = undefined ?? 7 // undefined value asign nI HOGI YHN koi agey number nai hoga function hoga is se koi value arhi hogi nai to nai to undefined hi assign krdo 
val1 = null ?? 10 ?? 50
// console.log(val1);


// here is Terniary OPerator 
// condition ? true : false

let priceBike = 200000
priceBike <=100000 ? console.log("bike is good") : console.log("bike is costly to buy");
