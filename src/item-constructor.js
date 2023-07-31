import { getDate } from "date-fns";

export function taskFactory(title, description, dueDate, priority, notes, project) {
    this.title = title;
    this.description = description;
    this.complete = false;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.project = project;
    this.dateCreated = new Date();
}

export function saveTask(task) {
    localStorage.setItem(task.title, JSON.stringify(task));
}

function createNewProject(name) {
    this.name = name;
}  

function completeTask(task) {
    this.complete = true;
}



