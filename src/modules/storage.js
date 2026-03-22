function saveData(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}

function loadData() {
    const data = localStorage.getItem('projects');
    return data ? JSON.parse(data) : [];
}

export { saveData, loadData };