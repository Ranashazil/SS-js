
// ************ some notes about global and block scope **********************// 

//  browser mein scope check krne ka tarika alg ha / or code mein scope ko node k through run krne ka trika alag hai
// var k tor p likhi gyi hui value jo global scope mein likhi jye execute nai hti but block scope mein var mein likhi jane vali value ko priority di jTI Hai as compare to global mein likhi jane wali value se han agar block mein var ki surat wali value na likhi jye to global mein var wali value execute hogi
// let wali value jo global scope mein likhi jaye usko priority di jati ha block scope mien likhi jane vali value k

// {} //  this is scope in evry programming language in function and if else we call it scope
 var c = 100 //  global scope me jo  ap likhte hain wo value  if k ander mean scope k ander k liye availabale hoti ha magar scope/ block scope wali value bahir nia jani chahiye 

// let a = 200
if (true) {  // jo b is if k ander likha ja rha ha ye ha block scope  or jo b if k bahier likha ja rha h wo ha gobal scope block scope ka value golbal scope ma nia jnaa chaiye
    let a = 10
   const b = 20 
//    console.log("inner: ", a);
   var c = 30
//    or 
    // var c = 30  // var ko is liye hi use nia krte k ye scope k bahhir chala jata ha mtlb block scope k bahir chala jata... ha global scope mein 
}

// console.log(a)
// console.log(b)
console.log(c)