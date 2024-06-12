let randomNum = parseInt(Math.random() * 100 + 1); 

const Submittion = document.querySelector("#subt");
const input = document.querySelector("#guessingField");
const there2 = document.querySelector(".slute");
const there = document.querySelector(".offer");
const start = document.querySelector(".lowOrHigh");
const overall = document.querySelector(".result");

const nice = document.createElement('p');

let prevGuess = []; // as it is user ko arrray dikha den ge ta k guess value ko dobara se guess na kren
let numguess = 1; // k kitne guess wo maar cukka ha

let playGame = true;
if (playGame) {
  Submittion.addEventListener("click", function (shizashazi) {
    shizashazi.preventDefault(); // ye form ha to value server p chl jeygi jo b usey bula rha wahan p chl jaegyi to us ko rokne k liye k mujhe value ye chahiye ye prevent is liye use krte hain ta k jo phle load horha ha wo stop hojye
    const chai = parseInt(input.value);
    console.log(chai);
    validateGuess(chai);
  });
}

function validateGuess(chai) {
  // ye bht use hoga
  // value ko validate krenge guess krege k ye 100 k beech ma hi h kahin a,b to nia ha

  if (isNaN(chai)) {
    alert("please enter a valid number ");
  } else if (chai < 1) {
    alert("please enter greater then 1 number");
  } else if (chai > 100) {
    alert("please enter less than 100 number");
  } else {
    prevGuess.push(chai);
    if (numguess >= 11) {
      displayGuess(chai);
      displayMessage(`Game over. random number was ${randomNum}`);
      GameEnd();
    } else {
      displayGuess(chai);
      CheckGuess(chai);
    }
  }
}

function CheckGuess(chai) {
  // value ko check krega

  if (chai === randomNum) {
displayMessage(`you guessed it write`)
GameEnd()
  } else if(chai > randomNum){
displayMessage(`number is tooo high`)
  } else if(chai < randomNum){
displayMessage(`number is tooo low`)
  }
}
function displayGuess(chai) {
  // value ko clean krega previous ma value update krega or batye ga remiaing ko b update krga

  input.value = ''
  there2.innerHTML += `${chai},  ` // this is pushing the value 
  numguess++;
  there.innerHTML =`${11-numguess}`
}

function displayMessage(message) {
  //  low or high ma koi message pas kr k usko print krdenge
  start.innerHTML = `<h2>${message}</h2>`
}


function GameEnd() {
  // end krne k liye

  input.innerHTML = ''
  input.setAttribute('disabled', '') // attribute hmesha key value pair ma set hota ha agy koi key toha nai to is liye ye khali ha ye key value pair ha to parameters ese hi chor den 
  nice.classList.add('button');
  nice.innerHTML = `<h2 id ="newGame">Start New Game</h2>`;
  overall.appendChild(nice);
  playGame = false;
newGame()
}

function newGame() {
  // game ko shuruh krne k liye

  const event = document.querySelector('#newGame')
  event.addEventListener('click', function(){
    randomNum = parseInt(Math.random() * 100 + 1); 
    prevGuess = []
    numguess = 1
    input.removeAttribute('disabled')
    there2.innerHTML = ''
 there.innerHTML =`${11-numguess}`
 overall.removeChild(nice)
 playGame = true
  })
}