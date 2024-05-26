// control flow or logic flow

// 1- if 
if(true){ // if condition is true the code will be execute 

}
if(false){ // if condition is false the code will not be execute 

}

const isUserLoggedIn = true // there the "= means k ye operator assignament ka ha hmne true value ko assign kiya ha isUserLoggedIn k ander "

// if (2 != 3) { // this is true so the code wil be execute
//     console.log("executed");
// }
// if (5 !== 3) { // this is true so the code wil be execute
//     console.log("executed");
// }
// if (2 === "2") { // ye value k sath sath datatype b check krta ha agar datatype diff ha to false ha
//     console.log("executed");
// }
if (2 == "2") { // this is true so the code wil be execute / ye data type check nai krta sirf value hi check krts ha
    console.log("executed");
}



// const temp =47

// if (temp > 48) { // this is true so the code wil be execute
//     console.log("true");
// }
// else{
//     console.log("false");
// }


// the some operators are <, >, <=, >=, ==, !=, 


// const num   = 300
// if (num > 200) {
//     const add = "hey"
//     console.log(`user response: ${add}`);
// }
// console.log(`user response: ${add}`); //  this is good the add is not defined if we use var in block scope instead of const this add will be defined and that s why we dont use var because the variable will not be defined out of the block scope


// const score = 100
// if (score > 50 ) console.log("done"); //  this is emplicit scope in in which we dint use curly braces and print in the same line 


// ************nesting *******************//
// const num = 1000
// if (num < 200) {
//     console.log("less than 200");
// }else if (num < 500) {
//     console.log("less than 500");
// } 
// else if (num < 900) {
//     console.log("less than 900");
// } else  {
//     console.log("less than 1200");
// } 




// when you want to check a mltiple condtion .... steps are here how to check a mltiple condtion
let login = true
let deal = true
let userLoggedIn = true
let loggedOut = false
if (login && deal && 3!==3 ) { // && this sign called 'and'
    console.log("condition done");
}

if (userLoggedIn || loggedOut) { // this operator || indicates a 'or' , ek b true hoga to code execute hoga 
    console.log("ok");
}







