import { getDate } from "date-fns";

export function taskFactory(title, description, dueDate, priority, notes, currentProject) {
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




