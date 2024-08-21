// navbar scroll bg-color change

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (this.window.scrollY > 50) {
            navbar.classList.remove('navbar-light');
            navbar.classList.remove('bg-white');
            navbar.classList.add('navbar-dark');
            navbar.classList.add('bg-black');
        } else {
            navbar.classList.add('navbar-light');
            navbar.classList.add('bg-white');
            navbar.classList.remove('navbar-dark');
            navbar.classList.remove('bg-black');
            // navbar.classList.remove('scrolled');
        }
    });
});