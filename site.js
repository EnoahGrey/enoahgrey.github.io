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

// /*API Fetch 03/15/2025*/

(async () => {
    
    // getRandomPokemon
    const getRandomPokemon = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
        const response = await fetch(url)
        const json = await response.json()
        const {name, sprites} = json
        const {front_default} = sprites
        console.log(front_default)
        console.log(name)
        return {name, front_default}
    }

    // renderPokemon
    const renderPokemon = pokemon => {
    
        const img = document.createElement('img')
        img.src = pokemon.front_default
        img.alt = pokemon.name
        const div = document.getElementById('pokemonSprite')
        div.append(img)
    }
    const pokemon = await getRandomPokemon()
    renderPokemon(pokemon)
})()

/* After adding API Fetch - 2 errors ocure in Console (likes 168 & 115 of site.js file). Unsure why this broke after adding API. Ask about it.*/
// /*API Fetch 03/15/2025*/



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

        setInterval(() => {
            // code to run EVERY 5 seconds
            nextImage()
        }, 5000)

        
        prevButton.addEventListener('click', () => {
            prevImage()
        })        
        nextButton.addEventListener('click', () => {
            nextImage()
        })
/*Carousel 02/28/2025*/

/*To Do List 03/08/2025*/
    //The to-do list should allow the user to add items to the list. The list should be saved to local storage so that the items persist even after the page is reloaded.
      
    // 2. Create a function that will create and add new list items to the DOM. This function should be an arrow function called renderTodos. Call the function when the page loads to display any existing items. You will then call the function again when the user adds a new item to the list.
    function renderTodos()
    {
        // Get the list from local storage
        const todos = document.getElementById('todo-list');
        
        // Clear the li's before we recreate them
        todos.innerHTML = ''

        const getToDo = localStorage.getItem('todo-list')
        try
        {
            // 3. In your render function, use an array method to loop through the list of items. (Don't use a for loop.) 
            // Create and add new list items to the DOM
            const logDoList = ({text, completed}) =>
            {
                console.log(text, completed)

                const li = document.createElement('li')
                li.textContent = `${text}: ${completed}`
                todos.append(li)
            }
            JSON.parse(getToDo).forEach(logDoList)
        }
        catch
        {
            console.log('invalid JSON in local storage')
        }
        console.log('Testing rednerToDos')
    }

    window.onload = renderTodos

    function addToDos()
    {
        // Get the list from local storage
        const todos = JSON.parse(localStorage.getItem('todo-list')) || []

        // 1. The to-do list should store items in local storage. It should be an array of objects, where each object has a text property and a completed property.
        // 4. When the user adds an item to the list, it should be added to local storage. After it's been added, call the function you created in step 2 to update the html.
        // Add a new item to the list
        todos.push({ text: document.getElementById('new-todo').value, completed: false })

        // Save the list to local storage
        localStorage.setItem('todo-list', JSON.stringify(todos))

        renderTodos()
    }

    function clearToDos()
    {
        // Get the list from local storage
        const todos = document.getElementById('todo-list');
        
        // Clear the li's before we recreate them
        todos.innerHTML = ''

        const getToDo = localStorage.removeItem('todo-list')
    }

    addDo.addEventListener('click', () => {
        addToDos()
    })    

    ClearDos.addEventListener('click', () => {
        clearToDos()
    })    
/*To Do List 03/08/2025*/