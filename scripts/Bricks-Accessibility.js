document.addEventListener("DOMContentLoaded", function() {
    // Handle social icons and roles for accessibility
    const socialIcons = document.querySelectorAll('.brxe-social-icons');
    // Add role="list" to each ul with the class brxe-social-icons
    socialIcons.forEach(icon => {
        icon.setAttribute('role', 'list');

        const listItems = icon.querySelectorAll('li.repeater-item.has-link');
        // Add role="listitem" to each li element
        listItems.forEach(item => {
            item.setAttribute('role', 'listitem');
        });
    });

    // Enhance figures with img elements by adding figcaptions
    document.querySelectorAll('figure img').forEach(img => {
        // Check if the parent is a figure and there's no existing figcaption
        const parentFigure = img.closest('figure');
        if (parentFigure && !parentFigure.querySelector('figcaption')) {
            const figcaption = document.createElement('figcaption');
            // Use the image's title attribute for the figcaption text, with a fallback to alt attribute, and a default text
            figcaption.textContent = img.title || img.alt || 'Default caption text';
            parentFigure.appendChild(figcaption);
        }
    });
});
