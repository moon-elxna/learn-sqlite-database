//---main---
const input = [
    {name: "todo", id: "todo_input"},
    {name: "deadline", id:"deadline_input"},
    {name: "done", id:"done_input"}
];
document.getElementById("save_btn").addEventListener("click", () => {
    insert_task();
})
get_task();

//---functions---
function insert_task(){
    //pull values from html
    const todo = document.getElementById(input[0].id).value;
    const deadline = document.getElementById(input[1].id).value;
    const done = document.getElementById(input[2].id).checked;
   
    //fetch to database over node-server as post request
    fetch("http://localhost:3000/insert-task", { //sents post request to node serrver insert-task
        method: "POST", //tells server that this is a post request
        headers: {"Content-type": "application/json"}, //tells server a json is send
        body: JSON.stringify({todo, deadline, done})

    })
    .then(res => res.json()) //converts the server response from JSON to a JS object
    .then(data => console.log(data)) //logs the response from the server
    .catch(err => console.error(err)); //catches any network errors and logs them
    
    //clean input in html
        for(let i = 0; i < input.length; i++){
        document.getElementById(input[i].id).value = "";
    };

    //alert the user
    alert("To-Do sucessfully added!");

    get_task();
}

function get_task(){
    fetch("http://localhost:3000/get-task")
    .then(res => res.json()) // convert server response to JS array
    .then(data => {
        console.log(data); // see all tasks in console  
        if(data.length === 0){
            console.log("Data is empty!")
        }
        else{
            display_task(data);
        }
    })
    .catch(err => console.error(err));
}

function display_task(array){
    const div = document.getElementById("display_task");
    div.innerHTML = "";
    const ul = document.createElement("ul");
    div.append(ul);
    for(let i = 0; i < array.length; i++){
        const task = array[i];
        const li = document.createElement("li");
        li.innerHTML = task.todo + ", " + task.deadline + ", " + task.done;
        ul.append(li); 
    }
}