const price_distance = 0.21
let ticket
let age
let distance
const button = document.querySelector('.btn')

button.addEventListener('click', function(){
    let age = document.getElementById('age').value
    let distance = document.getElementById('km').value
    ticket = distance * price_distance
    if (age<18) {
        ticket -= ticket * 0.2
    } else if(age>=65){
        ticket -= ticket * 0.4
    }
    ticketRounded = ticket.toFixed(2)
    console.log(ticketRounded)
})

