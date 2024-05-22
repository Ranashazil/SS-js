function cricket (...player1){
    return player1
    }
    
    // console.log(cricket("babar", "imam", "Rizwan"))
    function cricket (val1, val2, ...player1){
    return player1
    }
    
    // console.log(cricket("babar", "imam", "Rizwan"))
    
    
    
     // dealing functions with objects 
    const user = {
    username: "shazi",
    password: "shiza"
    }
    
    function handleobject(object){
    console.log(`username is ${object.username} and the password is ${object.password}`)}
    handleobject(user)
    
    
    
    //  Dealing functions with arrays
    // const num = [200, 300, 400, 500] //ye ese b kr skte hain array bana kr 
    
    function define(what){
        return what[2]
    }
    // console.log(define(num)); 
    console.log(define([1, 3, 5, 6]));
    
    // or direct console k ander b array bana skte hain
    
    