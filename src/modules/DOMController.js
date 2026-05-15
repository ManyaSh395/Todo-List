import {
    initApp,
    getProjects,
    getCurrentProject,
    setCurrentProject,
    createProject,
    createTodo,
    toggleTodo,
    deleteTodo,
    updateTodo
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
    addBtn.classList.add('add-todo-btn');

    addBtn.onclick = () => {
        const title = prompt("Title:");
        if (!title) return;

        const desc = prompt("Description:") || '';
        const date = prompt("Due Date:") || '';
        const priority = prompt("Priority (Low, Medium, High):") || 'Low';

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
    card.classList.add(`priority-${todo.priority.toLowerCase()}`);

    const header = document.createElement('div');
    header.classList.add('card-header');

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    checkbox.onchange = () => {
        toggleTodo(todo.id);
        renderApp();
    }

    const title = document.createElement("h4");
    title.textContent = todo.title;

    const actions = document.createElement('div');
    actions.classList.add('card-actions');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');

    editBtn.onclick = (e) => {
        e.stopPropagation();

        const newTitle = prompt('Title:', todo.title);
        if (!newTitle) return;

        const newDescription = prompt('Description:', todo.description);
        const newDueDate = prompt('Due Date:', todo.dueDate);
        const newPriority = prompt(
            'Priority (Low, Medium, High):',
            todo.priority
    );

        updateTodo(
        todo.id,
        newTitle,
        newDescription,
        newDueDate,
        newPriority
        );

        renderApp();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-btn');

    deleteBtn.onclick = (e) => {
        e.stopPropagation();
        deleteTodo(todo.id);
        renderApp();
    };

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    header.appendChild(checkbox);
    header.appendChild(title);
    header.appendChild(actions);

    // Meta information
    const meta = document.createElement('div');
    meta.classList.add('card-meta');

    const due = document.createElement('span');
    due.textContent = `📅 ${todo.dueDate || 'No due date'}`;

    const priority = document.createElement('span');
    priority.classList.add('priority-badge');
    priority.textContent = todo.priority;

    meta.appendChild(due);
    meta.appendChild(priority);

    // Expandable details
    const details = document.createElement('div');
    details.classList.add('card-details');
    details.textContent = todo.description || 'No description';

    // Toggle details
    card.addEventListener('click', () => {
        details.classList.toggle('show');
    });

    card.appendChild(checkbox);
    card.appendChild(title);
    card.appendChild(deleteBtn);
    card.appendChild(header);
    card.appendChild(meta);
    card.appendChild(details);

    return card;
}

export { renderApp };