// // we are doing this after ES6


// // when will constructor will call?
// // jese hi class se ek object initialize hoga ya jese hi new keyword kaam ma lenge ham wese hi constrcutor apne aap call hojata ha 


// // class User {
// //     constructor(username, email, password){
// //         this.username = username
// //         this.email = email
// //         this.password = password
// //     }

// //     minePassword(){
// //         return `${this.password}abc`
// //     }
// //     myUsername(){
// //         return`${this.username.toUpperCase()}`
// //     }

// // }

// // const hey = new User("shizashazi", "dfdf@gmail.com", "2423525")
// // console.log(hey.minePassword());
// // console.log(hey.myUsername()
// // );



// // behind the scene kese huwa ye sab//

// function User(username, email, password){
//     this.username = username
//     this.email = email
//    this.password = password
// }
//     User.prototype.minePassword = function(){
//         return `${this.password}aas`
//     }
//     User.prototype.chngeThis = function(){
//         return `${this.username.toUpperCase()}`
//     }

//     const she = new User("zindagi", "aaqweq@gmail.com","45452")
//     // console.log(she.minePassword());
//     // console.log(she.chngeThis());



//     // ***********inheritance***************//

//     class User2{
// constructor(username){
// this.username  = username
// }
// trusted(){

// console.log(`thisis my ${this.username}`);

// }
//     }

//     class behaviour extends User2{// aB SAri user2 ki functionality available ha 
//       constructor(username, email, password){
//         super(username) // ye kehta ha k ma this automatically yahan se la jaonga wahan p uper ja kr username set krdoonga or value b or ap directly uska access le skte ho ab yhn par or apko kisi call vall ki zrurt ni ha ab....
//         this.email = email
//         this.password = password
//       }

//       mineEverything (){
//         // console.log(`you r my ${this.username}`);
        
//       }

//     }
    
//     const heyThere = new behaviour("chand", "sdfdf@gmail.com", 452453 )
// //    heyThere.mineEverything()
//    heyThere.trusted()


//    const define = new User2 ("helloWorld")
//    define.trusted()
// console.log(heyThere === define);
// console.log(heyThere instanceof behaviour);
// console.log(heyThere instanceof User2);



// **********Static properties**************//
// class User3{
//     constructor(username){
//         this.username = username
//     }

    // findMe(){
    //     console.log(`this is ${this.username}`);
        
    // }
//    static creationofID(){ // static us method or property ko access hone se rokdeta ha  jo ap  shazishza ko dena chahte ho ya jo b ap shizashazi ko karao ge
//         return `4452`
//     }
// }


// const shizashazi = new User3("myLove")
// shizashazi.findMe()
// console.log(shizashazi.creationofID());



// another example 

class User3{
    constructor(username){
        this.username = username
    }
    findMe(){
        console.log(`this is ${this.username}`);
        
    }
    static creationofID(){ // static us method or property ko access hone se rokdeta ha  jo ap  shazishza ko dena chahte ho ya jo b ap shizashazi ko karao ge
        return `4452`
    }
}
class teacher extends User3{
constructor (username, email){
super(username)
this.email = email
}

}

const heyMine  = new teacher ("meri jan", "mylove@gmail.com")
heyMine.findMe()
heyMine.creationofID() // ye static krne k bd kisi ko b access ni de rha is ne access rok diya ha child k liye b sab k liye paerent k liye b