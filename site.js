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

    /*Carousel 02/28/2025*/
        const urls = [
            'http://www.dorkistan.com/Images/PFRPG_Tengu.gif', //Tengu
            'https://files.d20.io/images/366922689/Mxo_koiV5H6PTU5lLsIZbA/original.png', //Human
            'https://files.d20.io/images/86890186/oa6nxXljyf2iqN4LzGooYA/med.png?1563574007', //Dwarf
            'https://theonyxpath.com/wp-content/uploads/2016/03/Scarred-One_BryanSyme.png', //Yoski
            'https://2e.aonprd.com/Images/Ancestries/Elf02.png' //Elf
            
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

        const nextButton = document.querySelector('#next');
        const prevButton = document.querySelector('#prev');        

        const nextImage = () => {
            currentImage++;
            showImages()
        }
        const prevImage= () => {
            currentImage--;
            showImages()
        }

        setTimeout(() => {
            // code to run ONCE after 5 seconds
            nextImage()
        }, 5000)
        setInterval(() => {
            // code to run EVERY 5 seconds
            setInterval()
        }, 5000)

        
        prevButton.addEventListener('click', () => {
            prevImage()
        })        
        nextButton.addEventListener('click', () => {
            nextImage()
        })

    /*Carousel 02/28/2025*/