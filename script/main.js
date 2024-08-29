// navbar dropdown and submenu
// document.querySelectorAll(".dropdown-menu a").forEach(function (e) {
//   let nextEl = e.nextElementSibling;
//   if (nextEl && nextEl.classList.contains("sub-menu")) {
//     e.addEventListener("click", function (e) {
//       e.preventDefault();
//       e.stopPropagation();
//     });
//   }
// });

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
        }
    });
});

// cool stuff section
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 200;

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target
        }
    };

    const scrollHandler = () => {
        const rect = counter.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            updateCounter();
            window.removeEventListener('scroll',scrollHandler);
        }
    };

    window.addEventListener('scroll', scrollHandler);
})
const currentYear = new Date().getFullYear();

document.getElementById('currentYear').textContent = currentYear;


// Testimonial section
let swiperCards = new Swiper('.card__content', {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
   
    768:{
      slidesPerView: 2,
    },
    968:{
      slidesPerView: 3,
    },
  },
});
