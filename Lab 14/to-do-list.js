const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function () {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    let listItem = document.createElement('li');
    listItem.textContent = taskText;
    taskList.appendChild(listItem);
    taskInput.value = '';
  } else {
    alert('Please enter a task');
  }
});

taskList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.textDecoration = 'line-through';
  }
});
