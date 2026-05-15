import Project from "./project.js";
import Todo from "./todo.js";
import {saveData, loadData} from "./storage.js";

let projects = [];
let currentProjectId = null;

function initApp() {
  const storedProjects = loadData();

  if (storedProjects.length > 0) {
    projects = storedProjects.map((projectData) => {
      const project = new Project(projectData.name);
      project.id = projectData.id;

      project.todos = projectData.todos.map((todoData) => {
        const todo = new Todo(
          todoData.title,
          todoData.description,
          todoData.dueDate,
          todoData.priority
        );

        todo.id = todoData.id;
        todo.completed = todoData.completed;

        return todo;
      });

      return project;
    });
  } else {
    const defaultProject = new Project("Default");
    projects.push(defaultProject);
    currentProjectId = defaultProject.id;
    saveData(projects);
  }

  if (!currentProjectId && projects.length > 0) {
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

function deleteProject(projectId) {
  projects = projects.filter((project) => project.id !== projectId);

  // Ensure at least one project exists
  if (projects.length === 0) {
    const defaultProject = new Project("Default");
    projects.push(defaultProject);
  }

  currentProjectId = projects[0].id;
  saveData(projects);
}

function createTodo(title, description, dueDate, priority) {
    const currentProject = getCurrentProject();

    if (!currentProject) return;

    const newTodo = new Todo(title, description, dueDate, priority);
    currentProject.addTodo(newTodo);
    saveData(projects);
}

function toggleTodo(todoId) {
    const currentProject = getCurrentProject();

    if (!currentProject) return;

    const todo = currentProject.todos.find(t => t.id === todoId);
    
    if (!todo) return;
    
    todo.toggleComplete();
    saveData(projects);
}

function deleteTodo(todoId) {
    const currentProject = getCurrentProject();

    if (!currentProject) return;

    currentProject.deleteTodo(todoId);
    saveData(projects);
}

function updateTodo(todoId, title, description, dueDate, priority) {
    const currentProject = getCurrentProject();

    if (!currentProject) return;

    const todo = currentProject.todos.find((t) => t.id === todoId);

    if (!todo) return;

    todo.update(title, description, dueDate, priority);
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
    deleteTodo,
    deleteProject,
    updateTodo
};