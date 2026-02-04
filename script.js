const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

let tasks = [];

// Event handling
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskName = document.getElementById("taskName").value.trim();
  const category = document.getElementById("category").value;
  const deadline = document.getElementById("deadline").value;

  // Validation
  if (taskName === "" || category === "" || deadline === "") {
    showMessage("All fields are required!", "error");
    return;
  }

  const task = {
    id: Date.now(),
    name: taskName,
    category: category,
    deadline: deadline,
    completed: false
  };

  tasks.push(task);
  displayTasks();
  showMessage("Task added successfully!", "success");
  form.reset();
});

// DOM manipulation
function displayTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    li.innerHTML = `
      <span>
        ${task.name} | ${task.category} | ${task.deadline}
      </span>
      <div class="task-buttons">
        <button onclick="completeTask(${task.id})">✔</button>
        <button onclick="deleteTask(${task.id})">✖</button>
      </div>
    `;

    taskList.appendChild(li);
  });
}

// Functions & conditional logic
function completeTask(id) {
  tasks = tasks.map(task => {
    if (task.id === id) {
      task.completed = !task.completed;
    }
    return task;
  });
  displayTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  displayTasks();
}

// User feedback
function showMessage(text, type) {
  message.textContent = text;
  message.className = type;
  setTimeout(() => {
    message.textContent = "";
    message.className = "";
  }, 5000);
}