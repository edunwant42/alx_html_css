document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('navLinks');

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('nav-links-mobile');
        menuBtn.classList.toggle('open');
        
        // Handle smooth animations
        if (navLinks.classList.contains('nav-links-mobile')) {
            navLinks.style.display = 'flex';
            navLinks.offsetWidth; 
            navLinks.style.opacity = 1;
        } else {
            navLinks.style.opacity = 0;
            setTimeout(() => {
                navLinks.style.display = 'none';
            }, 300);
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
                menuBtn.classList.remove('open');
            }, 300);
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
                menuBtn.classList.remove('open');
            }, 300);
        }
    });
});
