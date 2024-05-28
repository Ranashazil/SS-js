// for of loop

// iska syntax kuch is trha sa hoga 
["", "", ""] // array mein string hongi // object array se illawa ap sirf string p b loop laga skte hain or num p b 
[{},{},{}] // array mein kafi sarey object honge 



// apply for of loop on numbers in array
// const arr = [1,2,3,4,5,6]
// for (const val of arr) { // iterator kuch b value ho sktiha,  object means kis 
    // chez k uper loop lagana ha like jese ab hmen hmra arr jo k variable h uske k uper loop lagana ha baki ye sab kuch pta krelega k kab loop end horaha ha etc
// console.log(val);
// }


// apply for of loop on string in array
// const arr = ["shazi", "shiza", "whole"]
// for (const hey of arr) {
//     console.log(hey);
// }



const arr2 = ["shazishiza"] // array ma string ho tb b lga skte hain value
for (const hey of arr2) {
    // console.log(`the value is ${hey}`);
}

const arr1 = "shazi shiza" // without  array just string p b for of loop laga skte hain 
for (const hey of arr1) {
    // console.log(`each char is ${hey}`);
}


// const score1 = 23  //you can not use just number like this you have to do this value in array // not iteratable 
// for (const hey of score) {
//     // console.log(`each char is ${hey}`);
// }


// const score = [23]  // you have to write number as this...
// for (const hey of score) {
//     console.log(`the value is  ${hey}`);
// }



// ****************Map***************// (map apne ap ma ek object hi ha), (key value pairs)
// koi b duplicate value iske ander nai hoti ha sari ki sari unique value hi hoti hain
const map = new Map()
map.set('pak', "pakistan") // jese k 'pak' ek key or is se agey "pakistan" is ki val
map.set('ind', "india")
map.set('love', "shazisiza")
map.set('pak', "pakistan") // ye nai hoga kiun k dobaRA value repeat nai hoti hmesha unique rehti ha 
// console.log(map); // ye object mein print krwata


// if i want to apply for of loop on map
for (const no of map) { // this gave me a whole map in array
    // console.log(no);
}

for (const [no] of map) { // this gave me just a key 
    // console.log(no);
}
for (const [no, value] of map) { // this gave me just a key and value pairs separately  not in array 
    // console.log(no, ':_', value);
}


// when we apply for of loop on object
// let myObj = { 
//     "name": "shizashazi",
//     "email": "shazir81gmail.com"
// }
// for (const oh of myObj) { // this may mot work on object
//     // console.log(oh);
// }

 

// // object pr for of loop nai lag skta is liye is pr for in loop lagya jata 
// let obj = {
//     name: "shizaShazi",
//     password: "djado13434",
//     list: "none"
// }

// for (const key in obj) { // this is how you apply for in loop on object
//     console.log(` ${key} is a ${obj[key]}`); // obj[key] means k key ki values and {key} means k just uski keys print hongi
//     }

    
    // when we apply for in loop on array
// let array = ["js", "python", "javascript", "Java"]
// for (const key in array) {
//     // console.log(key);// this give a key value like index 0, 1, 2,3
//     // console.log(array[key]); // this give a value like js, python
  
// }



// when we apply for of loop in array
// let array = ["js", "python", "javascript", "Java"]
// for (const key of array) {
//     // console.log(key);// this give a value like js, python
//     console.log(array[key]); //this will give underfined
  
// }


// apply for in loopon map
const map2 = new Map()
map.set('pak', "pakistan") 
map.set('ind', "india")
map.set('love', "shazisiza")
map.set('pak', "pakistan")

for (const key in map2) { // YE NAI hoskta kiun k ye iteratable nai ha jo chez iteratable nai ha to usko is trha loop ma nai likha ja skta
//  console.log(key);
}


// for each loop 
let her = ["hey", "shizashazi", "zindagi"]
her.forEach(function (item){ // kiun k ye function array k ander chl rha ha variable ha to iski value kch b hoskti 
    // console.log(item);
})

// useCallback in form of arrowfunction
her.forEach((oops)=>{
    // console.log(oops);
})



// agar function ki surat mein for each function lagana ho
function printme(item){
    console.log(item);
}
her.forEach(printme)



// jab value array or index 3no chezen maloom krni hain
her.forEach((item, index, why) =>{ // item means value, index means its index, arr means all value in array
console.log(item, index, why);
})



// if no.of objects in array
let diff = [
    {
        name: "shazishiza",
        pass: "zindagi"
    },
    {
        name: "java",
        pass: "js"
    },
    {
        name: "python",
        pass: "phy"
    }
]
diff.forEach((item)=>{
console.log(item.pass);
})
