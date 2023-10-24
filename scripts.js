let tasksArray = []
let pushTask = document.getElementById('push')
let tasks = document.getElementById('tasks')
let taskId = 0

pushTask.addEventListener('click', () => {
    pushTaskToArray()
    printArray()
})

function pushTaskToArray() {
    let inputValue = document.getElementById('input').value
    if (inputValue === '') {
        alert('Write something')
    }
    else {
        tasksArray.push({ id: taskId, text: '⦿ ' + inputValue })
        taskId++
    }
}

function printArray() {
    tasks.innerHTML = '';

    tasksArray.forEach(taskObj => {
        let taskDiv = document.createElement('div');
        taskDiv.textContent = taskObj.text;

        taskDiv.addEventListener('click', () => {
            removeTask(taskObj.id);
        });

        tasks.appendChild(taskDiv);
    });
}

function removeTask(taskId) {
    tasksArray = tasksArray.filter(taskObj => taskObj.id !== taskId);
    printArray();
}








