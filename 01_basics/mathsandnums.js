const score = 100
// console.log(score)

const balance = new Number(100)
console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));
// console.log(balance);
console.log(typeof balance);

const anotherNO = 3334.4942
console.log(anotherNO.toPrecision(3));

const thisone = 100000000
console.log(thisone.toLocaleString('en-PK'));

//***************Maths********************* */

console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.6));
console.log(Math.min(4,6,5,7));
console.log(Math.max(4,6,5,7));


console.log(Math.random()); // this value is always between in 0 - 1 include 0 and 1 the value will 0.1, 0.2 ....etc

console.log((Math.random()*10)) // value ko left pr shift krne k liye 10 se multiply krte hain 
console.log((Math.random()*10) + 1) // ye value dega 1 se le kr 9 tak phle 0.1 , 0.2 ese value arhi thi ab ese nai ayengi ab 1.1 , 1.2 , 2.1 etc ese valuwe ayen ge mean k 1-9 tak 0 case se bachne k liye 1 ko add kiya ha

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))