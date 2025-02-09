console.log('Greetings')
const secretMessage = "It's dangerous to go alone, again."
localStorage.setItem("It's a secret to everybody.", secretMessage)

//Get current hours
const hours = new Date().getHours() // get the current hour
//Morning, afternoon, or evening
const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const Welcome = document.getElementById('Welcome')
    if(isMorning){
        Welcome.textContent = 'Good Morning new friends!'
    }
    else if(isAfternoon){
        Welcome.textContent = 'Good Afternoon traveler.'
    }
    else{
        Welcome.textContent = 'Evening seekers of this page~'
    }