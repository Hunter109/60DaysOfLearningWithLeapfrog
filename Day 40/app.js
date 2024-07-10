document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const deleteModal = document.getElementById("delete-modal");
    const confirmDeleteBtn = document.getElementById("confirm-delete");
    const cancelDeleteBtn = document.getElementById("cancel-delete");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskToDelete = null;

    const saveTasks = () => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    const renderTask = (task) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task.text;

        if (task.completed) {
            li.classList.add("completed");
        }

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => {
            taskToDelete = task;
            deleteModal.style.display = "flex";
        };

        li.appendChild(span);
        li.appendChild(deleteBtn);
        li.addEventListener("click", (event) => {
            if (event.target.nodeName === "SPAN") {
                task.completed = !task.completed;
                saveTasks();
                renderTasks();
            }
        });
        taskList.appendChild(li);
    };

    const renderTasks = () => {
        taskList.innerHTML = "";
        tasks.forEach(renderTask);
    };

    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Task cannot be empty!");
            return;
        }
        const newTask = { text: taskText, completed: false };
        tasks.push(newTask);
        saveTasks();
        renderTasks();
        taskInput.value = "";
    };

    const deleteTask = () => {
        const taskIndex = tasks.indexOf(taskToDelete);
        tasks.splice(taskIndex, 1);
        saveTasks();
        renderTasks();
        deleteModal.style.display = "none";
        taskToDelete = null;
    };

    addTaskBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    confirmDeleteBtn.addEventListener("click", deleteTask);
    cancelDeleteBtn.addEventListener("click", () => {
        deleteModal.style.display = "none";
        taskToDelete = null;
    });

    renderTasks();
});
