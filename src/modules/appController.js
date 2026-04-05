import Project from "./project.js";
import Todo from "./todo.js";
import {saveData, loadData} from "./storage.js";

let projects = [];
let currentProjectId = null;

function initApp() {
    const stored = loadData();
    if(stored.length > 0) {
        projects = stored;
    } else {
        const defaultProject = new Project('Default');
        projects.push(defaultProject);
        currentProjectId = defaultProject.id;
        saveData(projects);
    }

    if(!currentProjectId) {
        currentProjectId = projects[0].id;
    }
}

function getProjects() {
    return projects;
}

function getCurrentProject() {
    return projects.find(p => p.id === currentProjectId);
}

function setCurrentProject(id) {
    currentProjectId = id;
}

function createProject(name) {
    const newProject = new Project(name);
    projects.push(newProject);
    saveData(projects);
}

function createTodo(title, description, dueDate, priority) {
    const currentProject = getCurrentProject();
    const newTodo = new Todo(title, description, dueDate, priority);
    currentProject.addTodo(newTodo);
    saveData(projects);
}

function toggleTodo(todoId) {
    const currentProject = getCurrentProject();
    const todo = currentProject.todos.find(t => t.id === todoId);
    todo.toggleComplete();
    saveData(projects);
}

function deleteTodo(todoId) {
    const currentProject = getCurrentProject();
    currentProject.deleteTodo(todoId);
    saveData(projects);
}

export {
    initApp,
    getProjects,
    getCurrentProject,
    setCurrentProject,
    createProject,
    createTodo,
    toggleTodo,
    deleteTodo
};