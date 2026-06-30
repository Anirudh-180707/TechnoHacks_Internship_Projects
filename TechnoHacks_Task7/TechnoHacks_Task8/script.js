const taskList = document.getElementById("taskList");

function addTask(){

    const input = document.getElementById("taskInput");

    const task = input.value.trim();

    if(task===""){
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;

    const actions = document.createElement("div");
    actions.className = "actions";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✓";

    completeBtn.onclick = function(){
        span.classList.toggle("completed");
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function(){
        li.remove();
    };

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);

    input.value = "";

}