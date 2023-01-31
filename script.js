const submitBtn = document.getElementById("tasksubmitbtn")
submitBtn.addEventListener('click',createTask)

const taskEntryBox = document.getElementById("taskname")
const taskList = document.getElementById("tasklist")

function createTask() {
    let newTaskName = taskEntryBox.value;
    let newTask = document.createElement('div');
    newTask.innerHTML = newTaskName;
    newTask.setAttribute('class','task')
    taskList.appendChild(newTask);
    taskEntryBox.value = "";
}