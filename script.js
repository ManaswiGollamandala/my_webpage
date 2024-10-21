function toggleUserInfo() {
    const userInfo = document.getElementById('userInfo');
    userInfo.classList.toggle('hidden');
}

function toggleProjects() {
    const projectsInfo = document.getElementById('projectsInfo');
    projectsInfo.classList.toggle('hidden');
}

function updateTaskProgress() {
    let completedTasks = document.getElementById('completedTasks');
    let currentTasks = parseInt(completedTasks.textContent);

    if (currentTasks < 15) {
        completedTasks.textContent = currentTasks + 1;
    } else {
        alert("All tasks are already completed!");
    }
}

document.getElementById('storyForm').addEventListener('submit', function(e) {
    const storyInput = document.getElementById('storyInput').value;
    const storyError = document.getElementById('storyError');

    storyError.classList.add('hidden');

    if (storyInput.length < 3) {
        e.preventDefault();
        storyError.classList.remove('hidden');
    } else {
        alert("Story submitted successfully!");
    }
});

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', function() {
    document.getElementById('body').classList.toggle('dark-mode');
});
