function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") return;

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function() {
        taskSpan.classList.toggle("completed", checkbox.checked);
    };

    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.classList.add("task-text");

    let editButton = document.createElement("button");
    editButton.textContent = "✏️";
    editButton.classList.add("edit-btn");
    editButton.onclick = function() {
        let newText = prompt("Editar tarefa:", taskSpan.textContent);
        if (newText !== null) {
            taskSpan.textContent = newText.trim();
        }
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    
    taskList.appendChild(li);
    
    taskInput.value = "";
}
