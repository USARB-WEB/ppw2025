document.addEventListener('DOMContentLoaded', () => {
    const switchModeBtn = document.getElementById('switchModeBtn');

    switchModeBtn.addEventListener('click', () => {
        document.body.dataset.theme = document.body.dataset.theme === "dark" ? "light" : "dark";
    });
})