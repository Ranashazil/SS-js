const hey = document.querySelectorAll('.button')
const bod = document.querySelector("body")

hey.forEach(function(nope){
    console.log(nope);
    nope.addEventListener('click', function(event){
      console.log(event);
      console.log(event.target);
      if (event.target.id === 'gray') {
        bod.style.backgroundColor = event.target.id
      }
      if (event.target.id === 'yellow') {
        bod.style.backgroundColor = event.target.id
      }
      if (event.target.id === 'blue') {
        bod.style.backgroundColor = event.target.id
      }
      if (event.target.id === 'red') {
        bod.style.backgroundColor = event.target.id
      }
      if (event.target.id === 'white') {
        bod.style.backgroundColor = event.target.id
      }
    })
})