// Gnerate a random color

const randomColor = function () {
    const hex = "0123456789ABCDEF";
   let colouring = '#';
   for(i=0; i<6; i++){
    colouring += hex[Math.floor(Math.random()*16)];
   }
   return colouring
};


console.log(randomColor());



// *******how to change the colour************//
let intervalId;
const ChangeTheColor = function(){
    const bgColor = function(){
        document.body.style.backgroundColor = randomColor()
    }

    intervalId = setInterval(bgColor, 1000)
}
const DontChangeTheColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}
document.querySelector('#start').addEventListener('click', ChangeTheColor)
document.querySelector('#stop').addEventListener('click', DontChangeTheColor)

