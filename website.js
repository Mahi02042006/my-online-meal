document.addEventListener('DOMContentLoaded', function () {
    // 1. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 2. Contact Form Validation + Logging
    const form = document.querySelector('#contact-box form');
    if (form) {
        form.addEventListener('submit', function (e) {
            const name = document.querySelector('#name').value.trim();
            const email = document.querySelector('#email').value.trim();
            const phone = document.querySelector('#phone').value.trim();
            const message = document.querySelector('#message').value.trim();

            if (!name || !email || !phone || !message) {
                e.preventDefault();
                alert('⚠ Please fill out all the fields!');
            } else {
                e.preventDefault(); // remove this if you actually want to submit
                alert('✅ Thanks for contacting us! Check the browser console.');

                // Log inputs
                console.log('📝 New Submission:');
                console.log('Name:', name);
                console.log('Email:', email);
                console.log('Phone:', phone);
                console.log('Message:', message);
            }
        });
    }

    // 3. "Order Now" Button Alert
    const orderBtn = document.querySelector('.btn');
    if (orderBtn) {
        orderBtn.addEventListener('click', function () {
            alert('🍽️ Thanks for your interest! Redirecting you to our menu...');
        });
    }

    // 4. Highlight Navbar Links on Scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('#navbar ul li a');

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 5. Hamburger Menu Toggle (Mobile)
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('#navbar ul');

    if (menuIcon && navList) {
        menuIcon.addEventListener('click', () => {
            navList.classList.toggle('show');
        });
    }
});
