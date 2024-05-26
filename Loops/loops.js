// loops are also called iteration

// for loop//
for (let hey = 0; hey < 9; hey++) { // index < array.index called condition check after checkin ye ander ghuus jayega block scope ma execution wagehra ho kr jese hi line no 7 mein pihnche ga use se just phle ye index++ k pas jaeyga phir add hojyga ha us k phir ye condition check kr kr k increment krta jaeyga jab tak hoga 
    const element = hey;
    if (hey == 6) {
        // console.log("who are you");
    }
    // console.log(element);
}


for (let i = 2; i <= 10; i++) {
    console.log(`outer value is ${i}`);
   for (let ss = 2; ss <= 10 ; ss++) {
//    console.log(`inner value is ${ss} and outer value is ${i}`);

//  if you want to make table
console.log(i + '*' + ss + ' = ' + i*ss);
    
   }
    
}


// when we apply loop on array here is the example

let myArr = ["shazi", "shiza", "zindagi"]
// console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) { // we will not use <= like this because this will give undefined value
    const element = myArr[index];
    // console.log(element);
    
}



// use of break and continue (kisi b control flow ko rokna ya break krna ho to hm break ka istemal krte hain') (continue mein bilkul opposite ha ye kwhta ha ek bar maffi de di koii bt nai par ma loop sa bhir ni jaonga ma next values b print kroonga)


//break in loop
// for (let index =1; index < 30; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         break //  ye control flow ko break krne k liye ha ab next value print nai hongi bas ab 5 k bd ap jump kr gye block scope k bahir / loop k bahir
//     }
//    console.log(`value of index is ${index}`);
// }



// continue in loops
for (let index =1; index < 30; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue // continue mein bilkul opposite ha ye kwhta ha ek bar maffi de di koii bt nai par ma loop sa bhir ni jaonga ma next values b print kroonga 
    }
   console.log(`value of index is ${index}`);
    
}


