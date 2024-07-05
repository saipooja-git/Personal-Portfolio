document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav_item');
    const navMenu = document.getElementById('nav-menu');

    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = item.querySelector('a').getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll to the target section
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Remove 'show' class from navMenu if it's visible on smaller screens
                if (navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                }

                // Remove 'active-link' class from current active link
                document.querySelector('.nav_link.active-link').classList.remove('active-link');

                // Add 'active-link' class to clicked link
                item.querySelector('.nav_link').classList.add('active-link');
            }
        });
    });

    const contactButton = document.querySelector('.button');
    contactButton.addEventListener('click', function(e) {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('Element with ID contact not found.');
        }
    });

    /*===== SCROLL REVEAL ANIMATION =====*/
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
        // reset: true
    });

    sr.reveal('.home_data, .about__img, .skills__subtitle, .skills__text', {});
    sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
    sr.reveal('.home__social-icon', { interval: 200 });
    sr.reveal('.skills__container, .work__img, .contact__input', { interval: 200 });
});
