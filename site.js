console.log('Greetings')

const secretMessage = "It's dangerous to go alone."
localStorage.setItem("It's a secret to everybody.", secretMessage)

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

    /*10/12/2024 Carousel*/
    const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ].map(url => { (new Image()).src = url; return url })

    const images = document.querySelectorAll('#carousel img')

    let currentImage = 0
    const showImages = () => {
    const offset = currentImage % urls.length

    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
    }

    showImages()   
       
    setInterval(() => {
        // code to run EVERY 5 seconds
        currentImage++;
        showImages()
    }, 5000)

    const prevButton = document.querySelector('#prev');
    prevButton.addEventListener('click', () => 
    {
        
        currentImage--;
        showImages()
    })

    const nextButton = document.querySelector('#next');
    nextButton.addEventListener('click', () => 
    {
        currentImage++;
        showImages()
    })