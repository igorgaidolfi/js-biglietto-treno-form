const price_distance = 0.21
let ticket
const button = document.querySelector('.submit')

button.addEventListener('click', function(){
    let user = document.getElementById('user').value
    document.getElementById('name-ticket').innerHTML = user
    let age = document.getElementById('age').value
    let distance = document.getElementById('km').value
    ticket = distance * price_distance
    if (age<18) {
        ticket -= ticket * 0.2
        document.getElementById('pass').innerHTML = 'Biglietto U18'
    } else if(age>=65){
        ticket -= ticket * 0.4
        document.getElementById('pass').innerHTML = 'Biglietto Over 65'
    } else{
        document.getElementById('pass').innerHTML = 'Biglietto Standard'
    }
    ticketRounded = ticket.toFixed(2)
    document.getElementById('ticket').innerHTML = ticketRounded
    let coach = Math.floor(Math.random() * 10 )+ 1 
    document.getElementById('coach').innerHTML = coach
    let cp = Math.floor(Math.random() * 100000 )+ 1
    document.getElementById('cp').innerHTML = cp
})

