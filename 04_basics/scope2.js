// ***************scope concpet in function***************//

function add (){ // in nested functions like this, the child function can the access the variable of the parent fnctioon
    const username = "Shazishiza"
    function minus (){
        const site = "UCBrowser"
        console.log(username);
    }
    // console.log(site);
    minus()
}
// add()

// **************scope concept in If Condition*************// 

if (true) {
    const username = "shiza"
    if (username === "shiza" ) {
        const site = " shazi"
        console.log(username + site);
    }
    // console.log(site);// this is error
}
// console.log(username); // this is ALSO error

// *********** some intteresting *********//

// just little bit overview of mini hoisting in JS // are given below  


// 1- this is just a simple function... yahan sirf function ko declare kiya ha 
console.log(hey(2)) //  isko ese function k upwer la k execute kr skte hain but neeche wale ko ni
function hey(num){
    return num + 1
}



// 2- this is also a function but it is also called a expression... you can hold json values and anything in variables in JS ,  but yahan hmne function ko declare krne k sth sth variable mein hold b krdiya ha
console.log(what(7)) // ReferenceError: Cannot access 'what' before initialization , this is the mian difference btwn these two functons k simple function ko uper le ja k execute kr skte hain but is ko is ese function se uper le ja k execute nai kr skte
const what = function(num){ // is ma function ko hm ne ek variale mein HOLD kiya huwa ha  
return num + 4
}