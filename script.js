const navScreen = document.querySelectorAll('.nav_item');

navScreen.forEach(item => {
    item.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        // Perform the desired action, e.g., removing the 'show' class to hide the menu
        navMenu.classList.remove('show');
        
        // Optionally, you might want to handle the active link class here
        document.querySelector('.nav_link.active-link').classList.remove('active-link');
        item.querySelector('.nav_link').classList.add('active-link');
    });
});

const contactButton = document.querySelector('.button');

contactButton.addEventListener('click',function(){
    const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ 
                behavior: 'smooth' 
            });
        } else {
            console.error('Element with ID contact not found.');
        }
});

/*===== SCROLL REVEAL ANIMATION =====*/
document.addEventListener('DOMContentLoaded', function() {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
        // reset: true
    });

    sr.reveal('.home_data, .about_img, .skills_subtitle, .skills_text',{}); 
    sr.reveal('.home_img, .about_subtitle, .about_text, .skills_img',{delay: 400}); 
    sr.reveal('.home_social-icon',{ interval: 200}); 
    sr.reveal('.skills_data, .work_img, .contact_input',{interval: 200}); 

});
























// const showMenu = (toggleId, navId) => {
//     const toggle = document.getElementById(toggleId),
//         nav = document.getElementById(navId)

//     if(toggle && nav){
//         toggle.addEventListener('click', () => {
//             nav.classList.toggle('show')
//         })
//     }
// }

// showMenu('nav-toggle','nav-menu')

// /*=============== REMOVE MENU MOBILE ===============*/
// const navLink = document.querySelectorAll('.nav_link')

// function linkAction(){
//     const navMenu = document.getElementById('nav-menu')
//     // When we click on each nav_link, we remove the show-menu class
//     navMenu.classList.remove('show')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))



// document.addEventListener('DOMContentLoaded', () => {
//     /*===== MENU SHOW =====*/ 
//     const showMenu = (toggleId, navId) => {
//         const toggle = document.getElementById(toggleId),
//             nav = document.getElementById(navId)

//         if (toggle && nav) {
//             toggle.addEventListener('click', () => {
//                 nav.classList.toggle('show')
//             })
//         } else {
//             console.error(`Elements with IDs ${toggleId} and/or ${navId} not found.`);
//         }
//     }

//     showMenu('nav-toggle', 'nav-menu')

//     /*==================== REMOVE MENU MOBILE ====================*/
//     const navLink = document.querySelectorAll('.nav_link')

//     function linkAction(){
//         const navMenu = document.getElementById('nav-menu')
//         // When we click on each nav_link, we remove the show-menu class
//         if (navMenu) {
//             navMenu.classList.remove('show')
//         } else {
//             console.error('Element with ID nav-menu not found.');
//         }
//     }

//     navLink.forEach(n => n.addEventListener('click', linkAction))

//     /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
//     const sections = document.querySelectorAll('section[id]')

//     const scrollActive = () =>{
//         const scrollY = window.scrollY

//         sections.forEach(current =>{
//             const sectionHeight = current.offsetHeight,
//                   sectionTop = current.offsetTop - 58,
//                   sectionId = current.getAttribute('id'),
//                   sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

//             if (sectionsClass) {
//                 if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//                     sectionsClass.classList.add('active-link')
//                 } else {
//                     sectionsClass.classList.remove('active-link')
//                 }
//             }
//         })
//     }

//     window.addEventListener('scroll', scrollActive)

//     /*===== SCROLL REVEAL ANIMATION =====*/
//     const sr = ScrollReveal({
//         origin: 'top',
//         distance: '60px',
//         duration: 2000,
//         delay: 200,
//         // reset: true
//     });

//     sr.reveal('.home_data, .about_img, .skills_subtitle, .skills_text',{}); 
//     sr.reveal('.home_img, .about_subtitle, .about_text, .skills_img',{delay: 400}); 
//     sr.reveal('.home_social-icon',{ interval: 200}); 
//     sr.reveal('.skills_data, .work_img, .contact_input',{interval: 200}); 
// });