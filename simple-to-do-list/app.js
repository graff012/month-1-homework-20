let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (text) {
    const task = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    tasks.push(task);
    renderTasks();
    input.value = "";
  }
}

function deleteTasks(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  renderTasks();
}

function toggleTask(taskId) {
  tasks = tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "task-item";

    li.innerHTML = `
                    <input 
                        type="checkbox" 
                        class="task-checkbox" 
                        ${task.completed ? "checked" : ""}
                        onchange="toggleTask(${task.id})"
                    >
                    <span class="task-text ${
                      task.completed ? "completed" : ""
                    }">
                        ${task.text}
                    </span>
                    <button class="delete-btn" onclick="deleteTask(${task.id})">
                        Delete
                    </button>
                `;

    taskList.appendChild(li);
  });
}

document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
