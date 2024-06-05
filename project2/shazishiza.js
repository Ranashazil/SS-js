const nope = document.querySelector('form')

// ye useCse apko empty value dega kiun ye addevent se bahir ha to jab page load load hoga to script bhi load hojygi to is liye ye empty value dega  
// const whatIs = parseInt(document.querySelector('#hey3').value);


nope.addEventListener('submit', function(event){
event.preventDefault();

const height = parseInt(document.querySelector('#hey3').value); //  ese ye string ma value dega isko integer ma convert krne k liye parse int krna pra
const weight = parseInt(document.querySelector('#hey2').value);
 const noYou = document.querySelector('#results');

 if (height === '' || height < 0 || isNaN(height)) {
  noYou.innerHTML = `please give a valid height ${height}` 
 } else if (weight === '' || weight < 0 || isNaN(weight)) {
  noYou.innerHTML = `please give a valid weight ${weight}` 
 } 
 else {
 const chai = (weight / ((height*height)/10000)).toFixed(2)
 // then we have to show the result 
noYou.innerHTML = `<span>${chai}</span>`

}

if (weight < 18.5) {
  noYou.innerHTML = "this is less than 18.5"
} else if (weight >= 18.5 && weight <= 24.9) {
  noYou.innerHTML = "between range 18.6 and 24.9"
} else if (weight > 24.9) {
  noYou.innerHTML = "greater then 24.9"
}
else{
  noYou.innerHTML = `<span>${chai}</span>`
}




})