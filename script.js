
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {

    // Mobile navigation toggle
    menuToggle.addEventListener('click', () => {

        const isOpen = navLinks.classList.toggle('active');

        menuToggle.classList.toggle('toggle', isOpen);

        menuToggle.setAttribute(
            'aria-expanded',
            String(isOpen)
        );

    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll('a').forEach((link) => {

        link.addEventListener('click', () => {

            navLinks.classList.remove('active');

            menuToggle.classList.remove('toggle');

            menuToggle.setAttribute(
                'aria-expanded',
                'false'
            );

        });

    });

}
