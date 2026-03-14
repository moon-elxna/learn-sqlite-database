//---main---
import * as db from "./database/data.js";
const input = [
    {name: "todo", id: "todo_input", value: null},
    {name: "deadline", id:"deadline_input", value: null},
    {name: "done", id:"done_input", value: null}
];
document.getElementById("save_btn").addEventListener("click", () => {
    alert("To-Do sucessfully added!");
    insert_database();
    for(let i = 0; i < input.length; i++){
        document.getElementById(input_id[i].id).value = "";
    };
})

//---functions---
function insert_database(){
    //pull values from html into array
    for(let i = 0; i <input.length; i++){
        document.getElementById(input[i].id).value = input[i].value;
    }
    //node server to db
    fetch('http://localhost:3000/insert-task', { // send POST request to backend
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ todo, deadline, done })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data); // confirmation message
        alert("Task added!");
    })
    .catch(err => console.error(err));

    //set all values in array back to null
    for(let i = 0; i <input.length; i++){
        input[i].value = null;
    }
}

function run_database(){
    fetch('/run-db')
        .then(response => response.text())
        .then(text => console.log(text))
        .catch(err => console.error(err));
}