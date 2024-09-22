console.log('Greetings')


    //Get the current hour
    const hours = new Date().getHours()
    //Morning, Afternooon, or Evening
    const isMorning = hours >= 4 && hours < 12 
    const isAfternoon = hours >= 12 && hours < 17
    const isEvening = hours >= 17 || hours < 4


    const Welcome = document.querySelector('h1')
    if(isMorning)
    {
        Welcome.textContent = 'Good Morning to you Friends'
    }
    else if (isAfternoon){
        Welcome.textContent = 'Good Afternoon Friends'
    }
    else{
        Welcome.textContent = 'Good Evening to you Friends'
    }