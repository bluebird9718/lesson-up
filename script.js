document.addEventListener('DOMContentLoaded', () => {
    const lessonSections = document.querySelectorAll('.lesson-section');

    lessonSections.forEach(section => {
        // Get the title element (h2) within each lesson section
        const title = section.querySelector('.lesson-title');
        // Get the meta information (p) within each lesson section
        const meta = section.querySelector('.lesson-meta');
        // Get the collapsible content div
        const content = section.querySelector('.collapsible-content');

        // Add a click event listener to the section itself
        section.addEventListener('click', () => {
            // Toggle the 'show' class on the content
            content.classList.toggle('show');

            // Optional: You could add visual cues like an arrow icon, but for simplicity, we just toggle visibility.
            // For example, if you wanted an arrow:
            // if (content.classList.contains('show')) {
            //     title.textContent = title.textContent.replace('✨', '▼'); // Replace with a down arrow
            // } else {
            //     title.textContent = title.textContent.replace('▼', '✨'); // Replace with a right arrow
            // }
        });
    });
});