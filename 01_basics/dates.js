// let myDate = new Date() // date is a object in javascript
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

// let myOwn = new Date(2024, 7,  29)
// let myOwn = new Date(2024, 7,  29, 5, 29)
let myOwn = new Date("2023-08-29"); // yy-MM-DD
// let myOwn = new Date("8-29-2023"); // yy-MM-DD in pakistan method
// console.log(myOwn.toDateString());
// console.log(myOwn.toLocaleString())

// *********Time************/

let myTime  = Date.now()
// console.log(myTime);
// console.log(myOwn.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());

// console.log(`date is ${newDate.getDay()}`)
console.log(newDate.toLocaleString('default', {
    weekday: "short"
}))





