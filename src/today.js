import { getDisplayDate } from "./time.js";
import { completeUncompleteTask, getCurrentProject, setCurrentProject, setNewCurrentProject, setStartProject, taskFactory, updateCurrentProject, updateLocalProjects, updateTask } from "./item-constructor.js";
import { loadWidget } from "./widget.js";

let currentProject = 'Today';
export default currentProject;

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

    const TASKCONTAINER = document.createElement('div');
    TASKCONTAINER.id = 'taskcontainer';
    CONTAINER.appendChild(TASKCONTAINER);

    loadTaskCreator();
    addInputListeners();
    AddProjectsEventListner();
    getCurrentProject();
    loadProjects();
    updateTaskDisplay();
}

function loadTaskCreator() {
    const CONTAINER = document.getElementById('main');
    let inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.id = 'taskInput';
    inputBox.name = 'taskInput';
    inputBox.value = 'Add a task'; 
    CONTAINER.appendChild(inputBox);
}

function addInputListeners  () { 
    let input = document.getElementById('taskInput');
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && document.hasFocus() && input.value !== '') {
            let task = new taskFactory(input.value);
            updateTask(task);
            updateTaskDisplay();
            resetInput();
        }
    })
    input.addEventListener('focus', () => {
        input.value = '';
    })
    input.addEventListener('focusout', () => {
        resetInput();
    })
    
}

export function updateTaskDisplay() {
    const TASKCONTAINER = document.getElementById('taskcontainer');
    while (TASKCONTAINER.hasChildNodes()) {
        TASKCONTAINER.removeChild(TASKCONTAINER.firstChild);
    }

    let array = [];
    let currentProjectTasks = JSON.parse(localStorage.getItem(getCurrentProject())).tasks;
    for (const task in currentProjectTasks) { 
        array.push(currentProjectTasks[task]);
    }
    array.sort((function (a, b) {
        return a.dueDate.localeCompare(b.dueDate);
    } ))

    for (const taskObject in array) {
        let task = document.createElement('div');
        let titleElement = document.createElement('p');


        titleElement.id = 'title-element';
        titleElement.innerHTML = array[taskObject].title;
        let button = document.createElement('button');
        button.classList.add('do');

        // Adds the event listener to the task div that calls a widget load function
        if (!task.classList.contains('taskevl')) {
            task.addEventListener('click', () => {
                let currentProject = getCurrentProject();
                let taskName = titleElement.textContent;
                let taskObject = JSON.parse(localStorage.getItem(currentProject))['tasks'];
                let artificialObject = {};
                artificialObject[taskName] = taskObject[taskName];
                 // let taskObject =  JSON.parse(localStorage.getItem(titleElement.textContent));
                loadWidget(task, artificialObject);
            })
            task.classList.add('taskevl');
        }

        if (!task.classList.contains('hasevl')) {
            button.addEventListener('click', () => {
                completeUncompleteTask(array[taskObject]);
                button.classList.add('hasevl');
                task.classList.remove('done');
                let widgetButton = document.getElementById('widget-button');
                if (document.getElementById('widget')) {
                    if (array[taskObject].complete) {
                        widgetButton.style.backgroundColor = 'black';
                        let p = document.getElementById('widget-header').lastElementChild;
                        p.style.textDecorationLine = 'line-through';
                } else {
                        widgetButton.style.backgroundColor = 'white';
                        let p = document.getElementById('widget-header').lastElementChild;
                        p.style.textDecorationLine = 'none';
                    }
                }
                updateTaskDisplay();
            })

        }

        task.appendChild(button);
        task.appendChild(titleElement);
        TASKCONTAINER.appendChild(task);
        
        // Adds the styling to the button and a task title, if it's completed
        if (array[taskObject].complete === true ) {
            task.classList.add('done');
            titleElement.style.textDecorationLine = 'line-through';
            button.style.backgroundColor = 'black';
        }
        
    }   
}

function resetInput () {
    let input = document.getElementById('taskInput');
    input.value = 'Add a task';
    document.activeElement.blur();
}

function AddProjectsEventListner() {
    const BUTTON = document.getElementById('new-project');
    BUTTON.addEventListener('click', () => {
        showAddProjectWidget();
    })
}

function showAddProjectWidget() {
if (!document.getElementById('add-project-input')) {
    const NAVIGATION = document.getElementById('navigation')
    const ADDPROJECTCONTAINER = document.createElement('div');
    ADDPROJECTCONTAINER.id = 'create-project';
    const INPUTCONTAINER = document.createElement('div');
    ADDPROJECTCONTAINER.appendChild(INPUTCONTAINER);
    const ADDPROJECT = document.createElement('input');
    INPUTCONTAINER.appendChild(ADDPROJECT);
    ADDPROJECT.type = 'text';
    ADDPROJECT.id = 'add-project-input';
    const INPUTLABEL = document.createElement('label');
    INPUTCONTAINER.appendChild(INPUTLABEL);
    INPUTLABEL.htmlFor = 'add-project-input';
    
    NAVIGATION.appendChild(ADDPROJECTCONTAINER);
    ADDPROJECTCONTAINER.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            updateCurrentProject(ADDPROJECT.value);
            createNewProject(ADDPROJECT.value);
        }
    })
    } else {
        removeProjectInput();
    }

}

function removeProjectInput () {
    const ADDPROJECTCONTAINER = document.getElementById('create-project');
    ADDPROJECTCONTAINER.remove();
}

function createNewProject(title) {
    const PROJECTSCONTAINER = document.getElementById('projects');
    const PROJECTDIV = document.createElement('p');
    PROJECTDIV.textContent = title;
    PROJECTSCONTAINER.appendChild(PROJECTDIV);
    if (document.getElementById('add-project-input')) {
        removeProjectInput();
    }
    PROJECTDIV.addEventListener('click', ()=> {
        setNewCurrentProject(PROJECTDIV.textContent);
        switchProjects(PROJECTDIV.textContent);
    })
}

function switchProjects(newProject) {
    currentProject = newProject;
    updateTaskDisplay()
}

function loadProjects() {
    let PROJECTLIST = [];
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key) && key !== 'current-project') {
            PROJECTLIST.push(key);
        }
    }
    for (const project in PROJECTLIST) {
        createNewProject(PROJECTLIST[project]);
    }
}