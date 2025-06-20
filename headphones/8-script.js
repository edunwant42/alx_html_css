// 8-script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('navLinks');

    menuBtn.addEventListener('click', function() {
        // Toggle mobile menu class on nav-links
        navLinks.classList.toggle('nav-links-mobile');
        // Toggle 'open' class on the menu button for icon transformation
        menuBtn.classList.toggle('open');
        
        // Handle smooth animations
        if (navLinks.classList.contains('nav-links-mobile')) {
            // Show with fade-in animation
            navLinks.style.display = 'flex';
            // Trigger reflow to ensure transition works
            navLinks.offsetWidth; 
            navLinks.style.opacity = 1;
        } else {
            // Hide with fade-out animation
            navLinks.style.opacity = 0;
            setTimeout(() => {
                navLinks.style.display = 'none';
            }, 300); // This should match your CSS transition duration
        }
    });

    // Close menu when clicking on links
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.style.opacity = 0;
            setTimeout(() => {
                navLinks.style.display = 'none';
                navLinks.classList.remove('nav-links-mobile');
                menuBtn.classList.remove('open'); // Also close the icon
            }, 300); // This should match your CSS transition duration
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target) || menuBtn.contains(event.target);
        
        if (!isClickInsideNav && navLinks.classList.contains('nav-links-mobile')) {
            navLinks.style.opacity = 0;
            setTimeout(() => {
                navLinks.style.display = 'none';
                navLinks.classList.remove('nav-links-mobile');
                menuBtn.classList.remove('open'); // Also close the icon
            }, 300); // This should match your CSS transition duration
        }
    });
});
