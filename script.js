//Setting up main event listener
const submitBtn = document.getElementById("tasksubmitbtn");
submitBtn.addEventListener('click',createTask);

//Setting up global variables for sections of the page
const taskEntryBox = document.getElementById("taskname");
const taskList = document.getElementById("tasklist");
const completedTasks = document.getElementById("completedtasks");

//When submission button is clicked, this Event Handler function creates a 
//   new task div with a completion checkbox, task name, and prioritization 
//   buttons
function createTask() {
    //create task div
    let newTask = document.createElement('div');
    newTask.setAttribute('class','task');

    //add checkbox
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    checkbox.addEventListener('click',completeTask);
    newTask.appendChild(checkbox);

    //add task name
    let newTaskName = taskEntryBox.value;
    let spanTaskName = document.createElement('span');
    spanTaskName.innerHTML = newTaskName;
    newTask.appendChild(spanTaskName);

    //add prioritization buttons
    let priorityUpBtn = document.createElement('button');
    priorityUpBtn.innerHTML= "Up";
    priorityUpBtn.addEventListener('click',upPriority);
    let priorityDnBtn = document.createElement('button');
    priorityDnBtn.innerHTML= "Down";
    priorityDnBtn.addEventListener('click',downPriority);
    newTask.appendChild(priorityUpBtn);
    newTask.appendChild(priorityDnBtn);

    //add task to task list
    taskList.appendChild(newTask);
    taskEntryBox.value = "";
}

//When a task checkbox  is clicked, this Event Handler function moves
//  the task to the completed tasks section
//  Improvement opportunity - allow for uncompleting a task too
function completeTask(event) {
    let checkbox = event.target;
    let completedTask = checkbox.parentNode;
    let taskList = completedTask.parentNode;
    completedTask.style.backgroundColor="lightgrey";
    taskList.removeChild(completedTask);
    completedTasks.appendChild(completedTask);
}

//When the Up priority button is clicked, this Event Handler function moves 
//   the task div above the task above it
function upPriority(event) {
    let priButton = event.target;
    let taskToPrioritize = priButton.parentNode;
    let taskToDePrioritize = taskToPrioritize.previousSibling;
    let taskList = taskToPrioritize.parentNode;
    taskList.insertBefore(taskToPrioritize,taskToDePrioritize)
}

//When the Down priority button is clicked, this Event Handler function moves 
//   the task div below the task below it
function downPriority(event) {
    let priButton = event.target;
    let taskToDePrioritize = priButton.parentNode;
    let taskToPrioritize = taskToDePrioritize.nextSibling;
    let taskList = taskToPrioritize.parentNode;
    taskList.insertBefore(taskToPrioritize,taskToDePrioritize)
}