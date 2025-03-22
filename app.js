function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    let li = document.createElement("li");
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    let span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;
    
    let editButton = document.createElement("button");
    editButton.className = "edit-btn";
    editButton.textContent = "Editar";
    editButton.onclick = function() { editTask(span); };
    
    let removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.onclick = function() { li.remove(); };
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(removeButton);
    
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function editTask(span) {
    let newText = prompt("Edite a tarefa:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
        span.textContent = newText.trim();
    }
}