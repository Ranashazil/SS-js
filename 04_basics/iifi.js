// the two main reasons of IIFE are ...//
// interview question :
// why we use iife?
// Ans: 1-  ta k  function jldi se execute hojaye
// 2- golbal scope k polution se bachne k liye kiub k is se kayi bar problem hoti ha to us global scope k variables or declaration se jo b polution create hoti ha usko hattane k liye iife ko use krrte hain




// **********understand with example***************//


// 1-  this is named IIFE..
(function tea(){
    // console.log(`what is this`);
})(); // this is for immediately invoked

// ()() the first brackets are the def of function and the next one are the execution 
 


// for the execution of another function with iife before one we have to use ; because this is compulsory


// or


// jab b 2 functions ek sath likhne hon row wise to phle function k end mein ek ; lagate hain nai to error ajayega function exect=ute nai hoga  


 
(function roti(){
    // console.log(`this is bread`);
})(); 


// 2- this is a simple IIFE not a named IIFE
// ( () => { //  you have end with ; firstly then after you can write an arrow function without writing functions name .
//     console.log(`this is bread`);
// })()


// and


( (code) => {  //  if you want to decalre a variable then you write as:---- 
    console.log(`this is ${code} `);
})("shizashazi") //or write as ('shizashazi')