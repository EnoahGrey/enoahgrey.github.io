console.log("Console.log: 'Testing'. This works~ ")

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

let welcomeMessage;

if (isMorning){
    welcomeMessage = 'Good Morning'
}else if (isAfternoon){
    welcomeMessage = 'Good Afternoon'
}else{
    welcomeMessage = 'Good Evening'
}

document.querySelector('#welcome').textContent = welcomeMessage


const secretMessage = "It's a secret to everybody. The legend of Zelda: Staring Link (not Zelda..)."
localStorage.setItem('Secret Message', secretMessage)

// Assignment 5 - Carousel
const urls = [
    // looked for something slightly diffrent from the provided images. Hope you like them.
    //'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://2e.aonsrd.com/images/classes/classes2_mystic_iconic_chk_chk.webp',
    //'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://2e.aonsrd.com/images/classes/classes6_witchwarper_iconic_zemir.webp',
    //'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://2e.aonsrd.com/images/classes/classes4_solarian_iconic_dae.webp',
    //'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://2e.aonsrd.com/images/classes/classes1_envoy_iconic_navasi.webp',
    //'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    'https://2e.aonsrd.com/images/classes/classes5_soldier_iconic_obozaya.webp',
    'https://2e.aonsrd.com/images/classes/classes3_operative_iconic_iseph.webp'
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

const prevButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')

prevButton.addEventListener('click', () => {    
    currentImage = (currentImage - 1 + urls.length) % urls.length
    showImages()
})

nextButton.addEventListener('click', () => {
    currentImage = (currentImage + 1) % urls.length
    showImages()
})

const interval = setInterval(() => {
    currentImage = (currentImage + 1) % urls.length
    showImages()
}, 5000)

showImages()