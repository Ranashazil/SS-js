// Javascript Execution Context

// 1- global execution context ('this' k ander refer kiya jata ha)
// 2- function execution context 
// 3- eval execution context 


// they run in some phases

// 1- first is memory creation phase or creation phase(in which space allocate for the variables and other declaration)
// 2- execution phase (in this the execution occurs like +, -,etc)


let val1 = 10
let val2 = 20
 function add(num1, num2){
    let total = num1 + num2
    return total
 }
 let result1  = add(val1, val2) 
 let result2 = add(4, 6)


//  the every whole code requires these steps //


//  1- one is global execution context ( is ko 'this' ma allocate kiya jata ha  )

// 2-  2nd is memory phase  (cycle 1 it will be done always)
// val1 -> undefined
// val2 -> undefined
// add -> definiion
// result1 -> undefined
// result2 -> undefined


// Execution Phase (Cycle 2)

// val1 -> 10
// val2 -> 20
// add -> new variable environment + exectionThread = (new executional context),  
// jitni bar function execute hote hain utni bar new executional context create hota ha 
// jitni bar new function execute hota ha utni bar cycle1 or cycle2 chlta ha 



// so the memoryPhase and ExecutionPhase of above code are here :

// 1- Memory Phase 

//  val1 -> undefined
//  val2 -> undefined
// total -> undefined

// 2- Execution Phase

// num1 -> 10
// num2 -> 20
// total -> 30 (this total will return to global execution Context  )
// result1 -> 30
//  resul2 ->  for this again we have to make two phase 1- memory and 2- execution phase



// Memory Phase 
// val1-> undefined
// val2-> undefined
// total -> undefined


// execution Phase

// num1 -> 4
// num2 -> 6
// total -> 10 (this total will return to glbal execution context) so this is the whole cycle....



// ******************Call Stack*************//

// 1- one(), two(), three() will add to global execution context for execution after execution one(), two(), three() will have to out from global execution context
// 2- the prblem is there when you call one() for execution suddenly you call two() at a time and at a time three() after that we will see who will go out first so here is the lifo concept(last in first out) so the three will go out 