// ***************getter setter based on class (this is common scenario other than these two)****************8//


class User {
    constructor(username, email, password){
this.username = username
this.email = email
this.password = password
    }
    get password(){ // is pr koi code to likha nai hato default value jo hoti ha wohi rehti ha ..... or jo b hm properties banate hain un k name se getter or setter as a method an jate hain automatically
        // 2- ab getter define kiya ha to setter b define krna hi pREGA ye zruri ha 
        // 3- iska perspective ye ha k class k bahir se koi value get krna chahte ho to wo getter hota agar class k ander  koi value set krna chahte ho wo setter hota ha 

        return `${this._password.toUpperCase()}shizashazi` // ye ek kisam ki privacy hogi k ham class ma kr kia rhe hain or kia passwrod ha to us ko ni pta k privacy k liye class ma kia password laya ha
        // return this._password.toUpperCase()
    }

set password(value){
    this._password = value // yahan upper case ni lagayenge yaha  pr ham as it is value lenge jo k get ki h h hmne wo hi ham set krden ge bas...
}

get email(){ // yahan p hmesha return krna prega kiun k koi na koi cheez get kr rha ha return ma kuch na ku na bejna prega  chahe empty hi kiu  na ho
    return this._email.toUpperCase()
}

set email(value){
this._email = value // setters ma kabhi b return ni krte 
}

}
const shizashazi = new User("meriZindagi", "dfsdf@gmail.com", "fasaa")
// console.log(shizashazi.password);
// console.log(shizashazi.email);




// ***********************k phle k time ma kese define hote the setter getter*******************8*******//
// **********************how to define geeter and setteer through properties ****************************//
// ****************modern syntax for getter setter*************************//
// **************getter setter based on properties***********************//
// *********this is common but less than class based*************//


function User2(name, password){
this._name = name
this._password = password
Object.defineProperty(this, 'name', {
    get: function(){
        return this._name.toUpperCase()
    }, 
    set: function(value){
        this._name = value
    }

})
Object.defineProperty(this, 'password', {
    get: function(){
        return this._password.toUpperCase()
    }, 
    set: function(value){
        this._password= value
    }

})

}

const shizashazi2 = new User2("mineEverthing", "eqeqrqx")
// console.log(shizashazi2.name);
console.log(shizashazi2.password);



// *************getter setter based on object****************8//
// **********this has wierd syntax it not used more**************//

const User3 = {
    _email1: 'dfadf@gmail.com', // this se variable ka access ni dte isma 
    _password1: 'abc', 

  get email1(){ // getter or setter ma underscore ka itna mean ni hota......is ne kaha k ma this._email le liya ha ab mjhe ni pta k underscore h k ni ....
    return this._email1.toUpperCase()
  }, 


  set email1(value){ // set ma b value access kr k store kr di gyi ha 
this._email1 = value
  }


}

const mine = Object.create(User3)// kis ki base p object create kiya jaye to ham user3 ki base p object create krenge  

// console.log(mine.email1); // OBJECT MA underscore ka getter setter k liye  koi  itna mean ni hota .. to is ne direct email1 ko print kra ha jo k get set ne liye ha or set kiyehain baqi kisi b underscore se koi mean ni ha 

