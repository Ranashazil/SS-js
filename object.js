  // ****learning object and new keyword in object******//

  function multiply(num){
    return num*6
    }
    
    
    multiply.power = 3
    
    console.log(multiply(4));  
    console.log(multiply.power);
    console.log(multiply.prototype);  // is ma or b wo prototype ki properties hoti hain + this ka context hota h
    
    
    // 1-  this measns that function array or string k pas b wohi properties hain jo objeck k pas hain or array or string to reference krte hain object ko but function b kabhi kabhi refernce krta ha opject ko ye sab function array or string ka prototype object ha or object ka prototype null hota ha ....means empty{}
    
    // 2- javascript jldi se haar ni manti ye uper se uper layer or grand se grand parent ko access krti jati ha jab tak k value null na hoojye 
    // 3- js classes k through constructor function ni deti ha js new keyword k through constructor function deti ha 
    
    
    function shizaShazi2(username, price) {
       this.username = username
       this.price = price
    }
    
    shizaShazi2.prototype.increment = function(){
        this.price++
    }
    shizaShazi2.prototype.printMe = function(){
        console.log(`the price is ${this.price}`);
    }
    
    const she =  new shizaShazi2("shazishiza", 234) // ye new keyword batye ga k hmre pas ye additional properties ayi ha tb koi error ni ayega
    const he  = new  shizaShazi2("shazishiza2", 2343)
    he. printMe()
    
    
    
    // **********learning prototype************//
    
    let myHeroes  = ["superman", "batman"]
    
    let thePower = {
      superman: "strong",
      batman: "flying",
      getPower: function(){
        console.log(`the power of superman is ${this.superman}`);
        
      }
    }
    
    Object.prototype.shizashazi = function(){
      console.log(`we are here in all`);
      
    }
    
    
    Array.prototype.lover = function(){
      // console.log(`i love you so much merin shiza`);
    }   // Array ma uper wale k pas power hoti ha k us ma inject krliya jaye fr agar wo pas krta ha neeche to power neeche paas hoti ha direct neeche power ni hoti 
    
    
    
    thePower.shizashazi()
    myHeroes.shizashazi()
    // myHeroes.lover()
    
    
    
    
    // ********inheritance concept******88//
    
    
    // const person = {
    //   name: "shazishiza",
    //   password: 45455523
    // }
    
    // const mind = {
    //   running: "fast" ,
    //   __proto__: eyes
    // }
    
    // const eyes = {
    //   shining: "true"
    // }
    
    // const ears = {
    //   deaf: false,
    //   // __proto__: mind
    // }
    
    // eyes.__proto__ = person // ap kiisi or ki property ko access kr skte hain isey prototyple inheritance kehte hain
    
                //OR//
    
    // *******new approach "modern syntax"**********//
    
    // Object.setPrototypeOf(mind, eyes) // ye thora modern syntaX HA baqi uper wale se same hi ha to mind ko acces de dete hain k ap properties accesss krlo eyes ki
    
    
    
    // ******some concept about truelegth********//
    
    let myName = "shazishiza        "
    // console.log(myName.trim().length); //  method chahhiey property ni 
    
          ////////OR///////////
    
    let username = "meriDuniya      "
    
    String.prototype.truelength = function(){ // TRUE length name k illawa b koi b or name ho skta ha ye bas ese hi likha ha 
      console.log(`${this}`); // kiun k username k nder refernce hi meri duniya ka tha
      console.log(`true length is: ${this.trim().length}`);
      
    }
    
    username.truelength() // jahan jahan string ha this usi usi ko access krega jis ne usey call kiya ha 
    "merizindagi   ".truelength() // yahan p merizindagi ne call kiya this ko to uski property ha ye to iski length change krdi ha or properly answrr b mil pa rha ha 
    "meraphool    ".truelength()