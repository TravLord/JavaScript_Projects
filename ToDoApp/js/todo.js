/* this function gets the task from input*/
function get_todos() { 
    /*This creates an array of tasks that are inputed*/
    var todos = new Array;
    /*this pulls the task that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todo'); // storing result of method in todos_str var for if stmt
    /* If the input is not null then JSON.parse will
     communicate with the web browser to convert the task to a JS object. */
    if (todos_str !== null) {
    todos = JSON.parse(todos_str);
    }
    return todos;
}
/*This function adds the inputed task to the get_todos function array*/
function add() {
    /* This takes the inputed task and creates a variable of it */ /*user input text is value*/
    var task = document.getElementById('task').value;

    var todos = get_todos(); // linking funcs together retrieving returned json objs in array
    /*This adds a new task at the end of the array*/
    todos.push(task);
    /* this converts the task to a JSON string*/
    localStorage.setItem('todo', JSON.stringify(todos)); // converting todo value into string for display
    document.getElementById('task').value = ""; /*user input text is value*/
    show(); //calls next function in chain

    return false;
}



/* this function keeps the tasks permently displayed on the screen*/
function show() {
    /* This sets the task that was retrieved as a variable*/
    var todos = get_todos();

    /* This sets up each task as an ordered list*/
    var html = '<ul>'; 
    /*This displays a task to the list in the order that is is inputed*/
    for (var i=0; i < todos.length; i++) {
        /*adding list index value to html with button with close X button*/
        html += '<li>' + todos[i] + '<button class="remove" id="' + i +' ">x</button></li>';

    };
    html += '</ul>';
    /*This displays the task as a list*/
    document.getElementById('todos').innerHTML = html;
    /*This tells the browser how to display the todo
    array after an item has been removed*/
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',remove); //linking to remove func below
    };
}
/*This displays the inputed task when the 'Add item' button is clicked*/
document.getElementById('add').addEventListener('click',add);
/*this will keep the inuts diplayed permanetly on the screen*/
show();

function Close() {
    
}
/*This creates the functionality of removing a todo item from the array*/
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /*this looks in the show() how to display a removed item on the screen*/
    show();

    return false;
}

