
// put all Home page specific functionality inside this if statement so it only runs on the homepage
if (document.title === 'Home') {

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
    }else if (isEvening){
        welcomeMessage = 'Good Evening'
    }else{
        welcomeMessage = ''
    }
    
    document.querySelector('#welcome').textContent = welcomeMessage

    const secretMessage = "It's a secret to everybody. The legend of Zelda: Staring Link (not Zelda..)."
    localStorage.setItem('Secret Message', secretMessage)

    // Assignment 5 - Carousel
    const urls = [
        'https://2e.aonsrd.com/images/classes/classes2_mystic_iconic_chk_chk.webp',
        'https://2e.aonsrd.com/images/classes/classes6_witchwarper_iconic_zemir.webp',
        'https://2e.aonsrd.com/images/classes/classes4_solarian_iconic_dae.webp',
        'https://2e.aonsrd.com/images/classes/classes1_envoy_iconic_navasi.webp',
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
}

// Assignment 6 - To-Do List
if(document.title === 'Lists') {

    const listToDo = document.querySelector('.todo-list')

    // get the list from local storage or use an empty array if it doesn't exist
    todoItems = JSON.parse(localStorage.getItem('todoItems')) || []

    // for demonstration purposes, a hardcoded list of to-do items
    if (todoItems.length < 1) {
        // set default list of to-do items
        const todoItems = [
            {text: 'Buy milk', completed: false},
            {text: 'Walk the dog', completed: false},
            {text: 'Do homework', completed: false}
        ]
        // save the list to local storage
        localStorage.setItem('todoItems', JSON.stringify(todoItems))
    }

    const renderTodos = () => {

        // get the list from local storage or use an empty array if it doesn't exist
        todoItems = JSON.parse(localStorage.getItem('todoItems')) || []

        todoItems.forEach(todos => {
            const li = document.createElement('li') // create new li element
            li.textContent = todos.text // set the text content to the todo text
            listToDo.append(li) // add the li to the ul

            const html = `
                <span class="text">${todos.text}</span>
                <span class="completed">${todos.completed ? '✓' : '✗'}</span>
            `
            li.innerHTML = html
        });
    }

    renderTodos()
    
    // add new item to the list
    document.querySelector('#toDoButton').addEventListener('click', () => {
                
        console.log(document.querySelector('#new-todo').value)
        // add a new item to the list
        todoItems.push({text: document.querySelector('#new-todo').value, completed: false})
        // save the list to local storage
        localStorage.setItem('todoItems', JSON.stringify(todoItems))

        // clear the list display before refreshing displayed list
        listToDo.innerHTML = ''

        renderTodos()
    })

    
}   