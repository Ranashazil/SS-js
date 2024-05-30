let hey = ["shizashazi", "chnd", "zindagi"]

const aha = hey.forEach((log)=>{
console.log(log);
// return log
})
// console.log(aha);


 
// console.log(aha);
// const aha = hey.forEach((log)=>{
// // console.log(log);
// return log
// })

// console.log(aha); // to pta chala ha k for each jo ha koi b value return ni krta ha 


// filterConcept
// const num = [2,4,4,5,6,2,2,3,4]
//  const why = num.filter((nope)=> nope > 2) // ye value return krta hai , call back function use huwa ha us ma koi b value se ap access kr skte hain koi b value use kr skte hain or uske bad arrow or phir condition
// console.log(why);


// another condition
const num = [2,4,4,5,6,2,2,3,4]
 const why = num.filter((nope)=>{//callback funtion ma koi vali access ki jane wali value le len then arrow or fr scope ma condition
    return nope > 3 // filter ma jab ap scope use kren to return keyword use krna hhi prega warna ye empty array print krdega
 }) //
// console.log(why);




// another example of filter
const books = [
    {name: "science" , author: "shizashazi", genere: "islamic", publish: "2004"},
    {name: "love" , author: "shizashazi", genere: "love",publish: "2005"},
    {name: "science" , author: "shizashazi", genere: "random", publish: "2023"},
    {name: "science" , author: "shizashazi", genere: "chemistry", publish: "2006"},
    {name: "science" , author: "shizashazi", genere: "islamic", publish: "2004"},
    {name: "math" , author: "shizashazi", genere: "noope", publish: "2019"},
    {name: "science" , author: "shizashazi", genere: "islamic"},
    {name: "science" , author: "shizashazi", genere: "islamic"}
]

let mybooks = books.filter((chnda)=> chnda.genere === 'islamic')
const nice = books.filter((yes)=>{ 
    return yes.publish >= 2006 && yes.genere === "chemistry" 
}) // return keyword must in scope 
// console.log(mybooks);
// console.log(nice);



// now we towards the map
let move = [1,4,5,6,7,2,4,5,6,3] //i want to add 20 in all numbers 
let life  = move .map((yes)=>{return yes + 33})
// console.log(life);



// chaining system 
const myNums = [5,6,2,4,5,6,7,8,3,2,2]
let heeee = myNums   // IN THIS CHAINING SYSTEM WE DO ONE OR MORE THING AT A TIME
.map((THIS)=> THIS * 5) // PHLE YE HOGA US K bad ISKI values neeche pas hojayegi then phir neeche wala map apna kaam start krega wahin se
.map((THIS)=> THIS + 3) // map ma operations waghera perform hote hain ya to explicitely return hota ha
.filter((THIS)=> THIS >=25)// filter mtlb jo true hoga wahi pas hoga / is ma true false wala chakar hai
// console.log(heeee);




// reduce concept very inrersting 
const hero = [4,5,6]
let ABD = hero.reduce(function (acc, currval){ // jab ham kabhi Shopping card bill banayenge to us ma values ko ADD waghera krne k liye use krenge 
    console.log(`acc: ${acc} and the currval: ${currval}`);
    return acc + currval
}, 0) //  accummulator ko nai pta k value kahan se shurh kroon to ham acc ko 0 hi rakhenge 
console.log(ABD);



// some reduce example in arrow function

let ShoppingBill = [
    {
        name: "jS",
        prices: 35343
    },
    {
        name: "java",
        prices: 10020
    },
    {
        name: "python",
        prices: 34233
    },
]

// let shopping = ShoppingBill.reduce(function(acc, item) {
//     return acc + item.prices
// }, 0 )
// console.log(shopping);

// or in arrow 

let shopping = ShoppingBill.reduce((acc, val)=> acc + val.prices,0 )
console.log(shopping);