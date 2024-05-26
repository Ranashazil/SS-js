
// while loop
let index = 0

while (index <= 20) {
    // console.log(`value of index is ${index}`);
    index = index + 3
}

// let myArray = ["shazi", "shiza", "zindagi"]
// let arr = 0
// while (arr <= myArray.length) {
//     console.log(`value of index is ${myArray[arr]}`);
//     arr = arr + 1
// }



// Apply while loop on array
let list = ["grocery", "eating", "driving", "riding", "playing"]
let why = 0
while (why < list.length) {
    // console.log(`value of this is ${list[why]}`);
    why = why + 1
}


// do while loop
// let num = 0
// do {
//     console.log(`the value is ${num}`);
//     num++
// } while (num <=10);



// some e:g of nested in whileloop
let i = 2
let j = 2
while (i <= 10) {
    console.log(`the value of i is ${i}`);
  i++
    while (j<=10) {
        console.log(`inner value is ${j} and the inner value is ${i}`);
    j++
    
    }
}