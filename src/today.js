import { getDisplayDate } from "./time.js";
import { taskFactory } from "./item-constructor.js";

let TASKARRAY = [];

export function loadToday() {
    const CONTAINER = document.getElementById('main');
    let date = getDisplayDate();
    
    const HEADER = document.createElement('p');
    const HEADERCONTAINER = document.createElement('div');
    HEADER.innerHTML = 'Today,';
    const HEADERDATE = document.createElement('p');
    HEADERDATE.id = 'headerdate';
    HEADERDATE.innerHTML = `${date}`;
    HEADERCONTAINER.appendChild(HEADER);
    HEADERCONTAINER.appendChild(HEADERDATE);
    HEADERCONTAINER.id = 'header';
    CONTAINER.appendChild(HEADERCONTAINER);

    loadTaskCreator();
    addInputListener();
}

function loadTaskCreator() {
    const CONTAINER = document.getElementById('main');
    let inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.id = 'taskInput';
    inputBox.name = 'taskInput';
    inputBox.placeholder = 'Add a task';
    CONTAINER.appendChild(inputBox);
}

function addInputListener() { 
    let dummy = document.getElementById('taskInput');
    dummy.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && document.hasFocus()) {
            let task = new taskFactory(dummy.value);
            TASKARRAY.push(task);
            console.log(TASKARRAY);
        }
    })
    
}