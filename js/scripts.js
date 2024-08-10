document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar ul');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.navbar ul li a');

    // Toggle menu for mobile view
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x'); // Change the icon when menu is active
        navbar.classList.toggle('active'); // Toggle the display of the navbar
    };

    // Smooth scrolling and updating active link on scroll
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('.navbar ul li a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    };

    // Smooth scroll and close menu on click (for mobile view)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Close the menu after clicking on a link if the screen width is 600px or less
            if (window.innerWidth <= 600) {
                navbar.classList.remove('active');
                menuIcon.classList.remove('bx-x');
            }
        });
    });
});
