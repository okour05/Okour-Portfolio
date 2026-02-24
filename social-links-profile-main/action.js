const sections = document.querySelectorAll(".section-hidden");
const sideNav = document.querySelector(".side-nav"); // Select the side nav

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // Standard logic for fading in sections
        if(entry.isIntersecting){
            entry.target.classList.add("section-show");
        } else {
            entry.target.classList.remove("section-show");
        }

        // Specific logic for the Side Nav
        // If the 'about' section enters the view, show the side nav
        if (entry.target.id === "skills") {
            if (entry.isIntersecting) {
                sideNav.classList.add("section-show");
            } else if (entry.boundingClientRect.top > 0) {
                // Only hide it if we are scrolling UP away from About
                sideNav.classList.remove("section-show");
            }
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    observer.observe(section);
});
// Wrap everything to ensure HTML is loaded
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent any default button behavior
            navLinks.classList.toggle('active');
            console.log("Menu toggled!"); // Check your browser console (F12) to see if this appears
        });
    }
});