// Singleton

// Object Literals

const sym = Symbol("shizashazi")

const user = {
    name: "shizaShazi",
    email: "shazi@gamil.com",
    "postName": "lecturer",
    isLoggedIn: false,
    [sym]: "key1",
    Number: 100,
    LastLoginDays: ["Monday", "Friday"]
}

// console.log(user.email); string ki trha likhne ki zrurt nai jab dot sath ho
// console.log(user["name"]); ye trika best ha jab b square mein likhna ha to dot nai lagana
// console.log(user["postName"]); // string wali value ko [""] se access kr skte or | 
// console.log(user.postName); // string vali value ko dot se access kr skte hain
console.log(user[sym]);

user.email = "shiza35@gmail.com"
// Object.freeze(user)
// user.email = "shiza355@gmail.com"
console.log(user)


user.what = function(){
    console.log("hey i am shazi");
}
// console.log(user.what) // is se just function ka reference ata ha function execute nai hota
console.log(user.what()) // for execute the function

user.then = function(){
    console.log(`hey i am shiza, ${this.email}`);
}
console.log(user.then())