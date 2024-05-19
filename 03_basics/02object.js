// const why = new Object() // this is a singleton object
const why = {} // this is a non singleton object
why.id = "123we4"
why.name = "shazi"
why.number  = 1213
why.loggedIn = true
// console.log(why);

const what = {
    name: "shazil",
    email:"shazil45@gmail.com",
    fullname: {
        names: {
            firstname: "shazi",
            lastname: "shiza"
        }
    }
}
console.log(what.fullname);

const object1 = {1: "shazi", 2: "shiza"}
const object2 = {3: "HEY", 4: "ohh"}
const object3 = {5: "Aaa", 6: "any"}

//  const object4 = Object.assign({}, object1, object2, object3)

const obj4 = {...object1, ...object2, ...object3}

//  console.log(obj4);


const user = [
    {
        id: 4,
        email: "shzi43@gamil.com"
    },
    {
        id: 4,
        email: "shzi44@gamil.com"
    },
    {
        id: 4,
        email: "shzi43@gamil.com"
    }
]
// console.log(user[1].email)

console.log(Object.keys(why)) // important
// console.log(Object.values(why)) // important
console.log(Object.entries(why)) // kam use hota ha

// console.log(what.hasOwnProperty('email2'));




