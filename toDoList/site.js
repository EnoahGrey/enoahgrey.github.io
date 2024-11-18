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

    // To Do List 11/08/24
               
    //  2. Create a function that will create and add new list items to the DOM. This function should be an arrow function called renderTodos. Call the function when the page loads to display any existing items. You will then call the function again when the user adds a new item to the list.
    function renderTodos() // get and display localstorage
    {
        const doList = document.getElementById('doList');

        //Clear previous values
        doList.innerHTML = '';

        const getToDo = localStorage.getItem('toDoList')
        try
        {
            //  3. In your render function, use an array method to loop through the list of items. (Don't use a for loop.)
            //console.log(JSON.parse(getToDo))
            const logDos = ({text, completed}) => 
                {
                    console.log(text, completed)
                    
                    const listItem = document.createElement('li');
                    listItem.textContent = `${text}: ${completed}`;
                    doList.appendChild(listItem);
                }
            JSON.parse(getToDo).forEach(logDos)
        }
        catch
        {
            console.log('invalid JSON in local storage')
        }
    }

    window.onload = renderTodos 

function addToDos()
{
    // Get the list from local storage
    const todos = JSON.parse(localStorage.getItem('toDoList')) || []

    //  1. The to-do list should store items in local storage. It should be an array of objects, where each object has a text property and a completed property.
    // Add a new item to the list
    todos.push({ text: document.getElementById('new-do').value, completed: false })
    localStorage.setItem('toDoList', JSON.stringify(todos))

    renderTodos()
}
    //  4. When the user adds an item to the list, it should be added to local storage. After it's been added, call the function you created in step 2 to update the html.
    document.getElementById("addDo").addEventListener('click', addToDos)