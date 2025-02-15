document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav_item');
    const navMenu = document.getElementById('nav-menu');

    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = item.querySelector('a').getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                if (navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                }

                document.querySelector('.nav_link.active-link').classList.remove('active-link');
                item.querySelector('.nav_link').classList.add('active-link');
            }
        });
    });

    /* Scroll Reveal Animation */
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200
    });

    sr.reveal('.projects-container', { interval: 200 });
});
