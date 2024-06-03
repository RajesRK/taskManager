document.getElementById('add-task-btn').addEventListener('click', addTask);
document.getElementById('new-task').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => toggleTaskCompletion(span, checkbox));
    li.appendChild(checkbox);

    const span = document.createElement('span');
    span.className = 'task';
    span.textContent = taskText;
    li.appendChild(span);

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTask(li, span));
    actionsDiv.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', () => deleteTask(li));
    actionsDiv.appendChild(deleteButton);

    li.appendChild(actionsDiv);
    taskList.appendChild(li);

    taskInput.value = '';
}

function toggleTaskCompletion(taskSpan, checkbox) {
    if (checkbox.checked) {
        taskSpan.classList.add('completed');
    } else {
        taskSpan.classList.remove('completed');
    }
}

function editTask(taskItem, taskSpan) {
    const newTaskText = prompt('Edit your task', taskSpan.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskSpan.textContent = newTaskText.trim();
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}
