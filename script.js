// Get elements
const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task event
addTaskButton.addEventListener('click', addTask);

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;
    
    // Task complete toggle
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Edit task
    li.querySelector('.edit').addEventListener('click', (e) => {
        e.stopPropagation();
        const newText = prompt('Edit task:', taskText);
        if (newText) {
            li.querySelector('.task-text').textContent = newText;
        }
    });

    // Delete task
    li.querySelector('.delete').addEventListener('click', (e) => {
        e.stopPropagation();
        li.remove();
    });

    // Append task to the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
}

// Optional: Enable "Enter" key to add task
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
