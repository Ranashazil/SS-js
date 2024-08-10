//  console.log(Math.PI)//  cant be overright 


const mine  = Object.getOwnPropertyDescriptor(Math, "PI")// jese hm pi ki property ko mNg rhe hain 
//  console.log(mine); // values ko is trike se hardcoded false kiya gya ha k wo true ni ho skti jjo jo false ki gyi hain but kuch treeke hian ...


const shizashazi = {
    username: "myzindagi", 
    email: "sdfdf@gmail.com",
    password: 4524525,

buyThis: function(){
    console.log("this is bad yar ");
    
}

}

console.log(Object.getOwnPropertyDescriptor(shizashazi, "username"));  // to ye property ka descriptor  mang ra ha but shizashazi to object ha to ese undefeind ayega  to object ki property batani paregi to username uski property ha k uski property  ka descriptive chaiye .....



 Object.defineProperty(shizashazi, 'username', {
    // writable: false,
    enumerable: false, // is pr for of loop ni laga skte hm kiun k enumeration ni horhi iteration ni ho ra...  is se enumberable ruk gy ha to username ni arha print ho kr to jese h true krdenge enumeration start hojygi or username property ki description b show hogi

    // enumerable: true, // to ab is property k uper hmra  iteration hora ha mtlb for off lopp work kr ra 
 })
 console.log(Object.getOwnPropertyDescriptor(shizashazi, "username"));




//************************** */ appLYINg for of loop on this****************** //

for (const [key, value] of Object.entries(shizashazi)) { // entries k bghr likhne se error ata ha k shizashazi not iteratable kiun object ye object ha object kuch situation ma iteratable hota ha kuch ma ni hota ....to object ko itwerate ko krne k liye hmen entries use krna hoga 

if (typeof value !== 'function') { // kiun k key to koi b name ho skta ha 
    console.log(`${key} : ${value}`);
}
    
}