import {
    initApp,
    getProjects,
    getCurrentProject,
    setCurrentProject,
    createProject,
    createTodo,
    toggleTodo,
    deleteTodo
} from './appController.js';

function renderApp() {
    const app = document.getElementById('app');
    app.innerHTML = '';

    app.appendChild(createLayout());
}

function createLayout() {
    const container = document.createElement("div");
    container.classList.add("container");

    container.appendChild(renderSidebar());
    container.appendChild(renderMain());

    return container;
}

function renderSidebar() {
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    const projects = getProjects();

    projects.forEach(p => {
        const btn = document.createElement("button");
        btn.textContent = p.name;

        btn.onclick = () => {
            setCurrentProject(p.id);
            renderApp();
        };
        sidebar.appendChild(btn);
    });

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add Project";

    addBtn.onclick = () => {
        const name = prompt("Project Name:");
        if(name) {
            createProject(name);
            renderApp();
        }
    }; 
    sidebar.appendChild(addBtn);
    return sidebar;
}

function renderMain() {
    const main = document.createElement("div");
    main.classList.add("main");

    const project = getCurrentProject();

    if (!project) {
        main.textContent = "No project selected";
        return main;
    }

    const title = document.createElement("h2");
    title.textContent = project.name;
    main.appendChild(title);
    main.appendChild(renderColumns(project)); 
    
    return main;
}

function renderColumns(project) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("columns");

    const inProgress = document.createElement("div");
    const completed = document.createElement("div");

    inProgress.innerHTML = "<h3>In Progress</h3>";
    completed.innerHTML = "<h3>Completed</h3>";

    project.todos.forEach(todo => {
        const card = createTodoCard(todo);
        if(todo.completed) {
            completed.appendChild(card);
        } else {
            inProgress.appendChild(card);
        }
    });

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add Todo";

    addBtn.onclick = () => {
        const title = prompt("Title:");
        const desc = prompt("Description:");
        const date = prompt("Due Date:");
        const priority = prompt("Priority (Low, Medium, High):");

        createTodo(title, desc, date, priority);
        renderApp();
    };

    inProgress.appendChild(addBtn);
    wrapper.appendChild(inProgress);
    wrapper.appendChild(completed);

    return wrapper;
}

function createTodoCard(todo) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h4");
    title.textContent = todo.title;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    checkbox.onchange = () => {
        toggleTodo(todo.id);
        renderApp();
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = () => {
        deleteTodo(todo.id);
        renderApp();
    };

    card.appendChild(checkbox);
    card.appendChild(title);
    card.appendChild(deleteBtn);
    return card;
}

export { renderApp };