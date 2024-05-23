// ******* 'this' keyword is used for refereing current context *********//

// const hey = {
//     username : "shazishiza", 
//     price : 434,

//     welcomeMessage: function(){
//         console.log(`my name is ${this.username}`);
//         // console.log(this); // this will print the whole current context 
//     }
// }
// hey.welcomeMessage()
// hey.username = "chand" 
// hey.welcomeMessage()
// console.log(this); //  at this stage the value of 'this' will be empty object {},  because the global has no context ..



// ****** some important concepts/notes ****//
// 1- sab se jo ziada global object ha wo window object ha.(browser mein)
// 2 -jab hm global scope ma username chage krenge to ye kiuke current context k ander ha to ye change hojyga 



//  function chai(){
//     const username = "shazishiza" // 'this' sirf object k ander hi kaam kr rha ese functions mein ye kaam ni kr rha ye value undefined de deta ha..
//     console.log(this) // bari value deta ha ha ese just "this" fnction ma
//     // console.log(this.username)
//  }
//  chai()



 
//  const tea = function(){ 
//          const username  = "shiza"  // // 'this' sirf object k ander hi kaam kr rha ese functions mein ye kaam ni kr rha ye value undefined de deta ha,  yahan p simple function just 'this' ma ye value kafi ziada deta ha or .username ma value undefined krdeta HA
//          console.log(this.username);
     
//      }
//      tea()


     
     //  ***********some arrow function concept at'this' *************************//
     
     
// const tea2 = () => {
//     const username = "shazi"
//     console.log(this); // give {} value
//     console.log(this.username); // give undefined value
// }
// tea2()


// **************arrow function main concept***************//


// 1. this is explicit arrow fnction//
// const chnd = (num1, num2)=>{ // curly braces mein return keyword likhna hi prega // 
// return num1 + num2
// }



// 2. this is emplicit return(in this we skip these {}, and we dont use return keyword the return statement is in the same line  )
// const chnd = (num1, num2)=> num1 + num2

// or
 
// const chnd = (num1, num2)=> (num1 + num2) // ese wali brackets nein return keyword nai likhna prega //
const chnd = ()=>({username: "shazi"}) //  when we have to return object
 
// console.log(chnd(9,8))
console.log(chnd())



