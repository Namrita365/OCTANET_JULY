const tasks = [];

function addTask() {
    const name = document.getElementById('taskName').value;
    const description = document.getElementById('taskDescription').value;
    const deadline = document.getElementById('taskDeadline').value;
    const priority = document.getElementById('taskPriority').value;
    const labels = document.getElementById('taskLabels').value;

    if (name && description && deadline && priority && labels) {
        const task = {
            name,
            description,
            deadline,
            priority,
            labels,
            completed: false
        };

        tasks.push(task);
        renderTasks();

        // Clear the input fields after adding the task
        document.getElementById('taskName').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('taskDeadline').value = '';
        document.getElementById('taskPriority').value = 'High';
        document.getElementById('taskLabels').value = '';
    } else {
        alert('Please fill in all the fields.');
    }
}

function renderTasks() {
    const tasksList = document.getElementById('tasks');
    tasksList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.className = 'task' + (task.completed ? ' completed' : '');
        taskElement.innerHTML = `
            <div>
                <strong>${task.name}</strong>
                <p>${task.description}</p>
                <p>Deadline: ${task.deadline}</p>
                <p>Priority: ${task.priority}</p>
                <p>Labels: ${task.labels}</p>
            </div>
            <div class="actions">
                <button onclick="toggleComplete(${index})">${task.completed ? 'Unmark' : 'Complete'}</button>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        tasksList.appendChild(taskElement);
    });
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function editTask(index) {
    const task = tasks[index];
    document.getElementById('taskName').value = task.name;
    document.getElementById('taskDescription').value = task.description;
    document.getElementById('taskDeadline').value = task.deadline;
    document.getElementById('taskPriority').value = task.priority;
    document.getElementById('taskLabels').value = task.labels;

    tasks.splice(index, 1);
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
