import { getDate } from "date-fns";



export function taskFactory(title, description, priority, currentProject, notes) {
    const TASK = {
        title:title,
        description:description,
        complete:false,
        dueDate: new Date(),
        priority: priority,
        currentProject: currentProject,
        notes: notes,
    };
    
    return {
        [title]: TASK
    };
}

export function completeUncompleteTask(task) {
    let currentProject = getCurrentProject();
    let currentTask = JSON.parse(localStorage.getItem(currentProject));
    console.log(currentTask);
    if (task.complete === true) {
        currentTask['tasks'][task.title].complete = false;
        task.complete = false;
    } else {
        currentTask['tasks'][task.title].complete = true;
        task.complete = true;
    }
    localStorage.setItem(currentProject, JSON.stringify(currentTask));
}

export function updateTask(task) {
    assignTaskToProject(task);
}

export function assignTaskToProject(task) {
    let currentProject = getCurrentProject();
    let project = JSON.parse(localStorage.getItem(currentProject));
    project.tasks = task;
    localStorage.setItem(currentProject, JSON.stringify(project));
}

export function setDescription(task, description) {
    task.description = description;
    updateTask(task);
} 

export function setPriority (task, priority) {
    task.priority = priority;
    updateTask(task);
}

export function setDate(task, date) {
    task.dueDate = date;
    updateTask(task);
}


function createNewProject(name) {
    this.name = name;
    this.tasks = {

    };
}

export function updateCurrentProject(projectname) {
    localStorage.setItem('current-project', projectname);
    updateLocalProjects(projectname);
}

export function setIntiialProjects() {
    let today = new createNewProject('Today');
    localStorage.setItem(today.name, JSON.stringify(today));
    let work = new createNewProject('Work');
    localStorage.setItem(work.name, JSON.stringify(work));
    let personal = new createNewProject('Personal');
    localStorage.setItem(personal.name, JSON.stringify(personal));
}

function updateLocalProjects(projectname) {
    // Create and save the object to the localStorage
    localStorage.setItem(projectname, JSON.stringify(new createNewProject(projectname)));
}

export function getCurrentProject() {
    if (localStorage.getItem('current-project')) {
    let currentProject = localStorage.getItem('current-project');
    return currentProject;
    } else {
        return 'Today';
    }
}




