import { getDate } from "date-fns";

export function taskFactory(title, description, dueDate, priority, currentProject, notes) {
    this.title = title;
    this.description = description;
    this.complete = false;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.project = currentProject;
    this.dateCreated = new Date();
}

export function completeUncompleteTask(task) {
    if (task.complete === true) {
        task.complete = false;
    } else {
        task.complete = true;
    }
    localStorage.setItem(task.title, JSON.stringify(task));
}

export function updateTask(task) {
    localStorage.setItem(task.title, JSON.stringify(task));
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
} 

export function updateCurrentProject(projectname) {
    localStorage.setItem('current-project', projectname);
    updateLocalProjects(projectname);
}

function updateLocalProjects(projectname) {
    let projectList = ['Today', 'Work', 'Personal'];
    projectList.push(projectname);
    // Save the projectList array in the localStorage
    localStorage.setItem(('projectList'), JSON.stringify(projectList));
}

export function getCurrentProject() {
    if (localStorage.getItem('current-project')) {
    let currentProject = localStorage.getItem('current-project');
    return currentProject;
    } else {
        return 'Today';
    }
}




