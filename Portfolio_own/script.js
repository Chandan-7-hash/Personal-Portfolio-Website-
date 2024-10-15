const modeToggle = document.getElementById('mode-toggle');
const rootElement = document.documentElement;

modeToggle.addEventListener('click', () => {
    rootElement.classList.toggle('light-mode');

    // Toggle between day and night mode icons
    if (rootElement.classList.contains('light-mode')) {
        modeToggle.textContent = '🌙'; // Night icon for light mode
    } else {
        modeToggle.textContent = '🌞'; // Sun icon for dark mode
    }
});
