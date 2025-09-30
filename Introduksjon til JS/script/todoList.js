//MODEL
let tasks = [
    { description: 'Peel potatoes', person: '', due: '', isDone: true, dateFinished: '' },
    { description: 'Recycle', person: '', due: '', isDone: false, dateFinished: '' },
];


//VIEW
const tasksTable = document.getElementById("tasksTable");
show();
function show() {
    let html = /*HTML*/ `
    <tr>
        <th>Task</th>
        <th>Person</th>
        <th>Due</th>
        <th>Completed</th>
    </tr>`;

    for (let i = 0; i < tasks.length; i++) {


        html += createHtmlRow(i);
    }
    tasksTable.innerHTML = html;
}

//CONTROLLER
let taskPersonInput = document.getElementById("taskPerson");
let taskDescriptionInput = document.getElementById("taskDescription");
let taskDateInput = document.getElementById("taskDate");
function addTask() {
    tasks.push({
        description: taskDescriptionInput.value,
        person: taskPersonInput.value,
        due: taskDateInput.value,
        isDone: false,
    })
    taskDescriptionInput.value = '';
    taskPersonInput.value = '';
    show();
}

function changeIsDone(checkbox, index) {
    
    tasks[index].isDone = checkbox.checked;
    if(tasks[index].isDone){
        let d = new Date().toLocaleDateString();
        tasks[index].dateFinished = `${d}`; }
    else{tasks[index].dateFinished = ''}
    show();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    show();
}

function editTask(index) {
    tasks[index].editMode = true;
    show();
}

function updateTask(index){
    const taskId = `editDescription${index}`
    const personId = `editPerson${index}`
    const taskInputTag = document.getElementById(taskId);
    const personInputTag = document.getElementById(personId);
    const task = tasks[index];
    task.description = taskInputTag.value;
    task.person = personInputTag.value;
    task.editMode = false;
    show();
}

function createHtmlRow(i) {
    const task = tasks[i];
    let d = new Date().toLocaleDateString();
    const checkedHtml = task.isDone ? 'checked="checked"' : '';
    const dateCheckedHtml = task.isDone ? `${d}` : 'Not Finished';
    if (!task.editMode) return `
        <tr>
            <td>${task.description}</td>
            <td>${task.person}</td>
            <td>${task.due}</td>
            <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} </td>
            <td>${dateCheckedHtml}</td>
            <td>
                <button onclick="editTask(${i})">Edit</button>
                <button onclick="deleteTask(${i})">X</button>
            </td>
        </tr>
        `;

        return `
        <tr>
            <td><input id="editDescription${i}" type="text" value="${task.description}"></td>
            <td><input id="editPerson${i}" type="text" value="${task.person}"></td>
            <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} </td>
            <td>
                <button onclick="updateTask(${i})">Save</button>
                <button onclick="deleteTask(${i})">X</button>
            </td>
        </tr>
        `;
}
