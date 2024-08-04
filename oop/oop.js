const user = {
    username: "shizashazi",
    phoneno: "534524524524",
    signedIn: true,


    getmeIn: function(){ 
console.log("you r my last love");
// console.log(`Username: ${this.username}`); // this keyword current context k liye use kiyajata ha


// console.log(this);  // this will give a whole contxt and said what you want from this


    }
}

// console.log(user.username);
console.log(user.getmeIn()); // run krwana prega kiun k ye method ha reference ni de skte just
// console.log(this);  // agar ese global context ma print krenge this ko ye empty object dega 


// function Chand(username, phoneNo, isLoggedIn){
// this.username = username // jo this k sath username ha wo variable ha or jo doosra ha wo perimeter ha uper wala
// this.phoneNo = phoneNo
// this.isLoggedIn = isLoggedIn

// this.celebration = function(){
//     console.log(`hey${phoneNo}`);
    
// }

// return this  //  likhen ya na likhen koi farak ni prta implicitly defined hota ha
// }

// const hey1 = new Chand("shazishiza", 42452544, true) // new na lagana se value jo ha wo overright krti hain
// const hey2 = new Chand("shazishiza2", 7688734534, false)
// // console.log(hey1);
// console.log(hey1.constructor); // constructor property kuch b ni bas ap khudi ka referce hoti ha 
// // console.log(hey2);



// // 1- new keyword se empty object create hota ha ...//
// // 2- new keyword se constructor function create hota ha 
// // 3- this keyword jo ha or sabhi arguments us k ander inject hoajte hain
// // 4- function k ander hamen mil jate hain..
