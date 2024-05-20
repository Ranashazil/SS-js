function what() {
    console.log("Shazi");
    console.log("Shiza");
    console.log("chnd");
    console.log("shazil");
    console.log("mine");
}

// what() 

function add(num1, num2, num3, num4) { // num1, num2, num3, num4 are called paramters in this bracket()
    console.log(num1 + num2 + num3 + num4);
    // let result = num1 + num2 + num3 + num4
    // return result
    // another method
    return num1 + num2 + num3 + num4
}

// add("2", "1", 5, 9) // agar last number p string ha to phle vale nmbers pr cnversion aply hoga then string mein convert hoga agar phle numbers pr string laga ha to sab agle wale numbers pr string apply hojyga //
// add //this is just refernce of the fucntion
// add() // this is the execution of the function

// add(5,6,7,8) // 5,6,7,8 are called arguments in this bracket() 

const result =  add(4,5,6,7)
console.log("Result: ", result);


function menu(username = "shiza") {
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} is logged in`
}
// ! is a operation of true or false false ha to true krdo 

// console.log(menu("shazil")) // vaLue execute hojti ha
// console.log(menu("")) // vaLue kuch b nai hoti ha
console.log(menu()) // value undegined hjti ha
// console.log(menu("shiza")) 
