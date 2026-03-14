//---main---
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
    const todo = input[0].value;
    const deadline = input[1].value;
    const done = input[2].value;
    //fetch to database over node-server
    fetch("http://localhost:3000/insert-task", { //sents post request to node serrver insert-task
        method: "POST", //tells server that this is a post request
        headers: {"Content-type": "application/json"}, //tells server a json is send
        body: JSON.stringify({todo, deadline, done})

    })
        .then(res => res.json()) //converts the server response from JSON to a JS object
        .then(data => console.log(data)) //logs the response from the server
        .catch(err => console.error(err)); //catches any network errors and logs them
    
    //set all values in array back to null
    for(let i = 0; i <input.length; i++){
        input[i].value = null;
    }
}