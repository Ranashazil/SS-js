// *******************interview  important question******************//

// the problem of global context is that k jab apke pas window object ka access hota ha taBTO WO WINDOW object ko access krta ha ... this actually ma refer krta ha window objct ko , jab node wala environment hoga waahan p to window ka access ha nai to wahan p empty object ata ha 



// *********call**********//

// call jo ha hmra current execution context kisi or function ko pass krdeta ha //

function setName (male){
    this.gender = male 
    console.log("CALLED");
    }
    
    function createuser(name, email,  phonoNo){
    setName.call(this, name) // kiuun k hmen sirf uska refernce hold kr k rakhna ha is liye ma call use kr rha ..........or this call k bad ham optionally use kr skte hain.. or ye uper wala se this le lega or isko current context mil jyga .. or sab apna kam this ko dene k bad isko spurd krdeta ha abb wo rahe na rahe koi farak ni prta
    
    this.mail = email
    
    this.phonoNo = phonoNo
    }
    
    const mine  = new createuser("male", "shazishiza@gmail.com", 43463444)
    console.log(mine);
    