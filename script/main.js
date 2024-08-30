
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

// mission section

// Function to check if the element is in the viewport

// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   console.log('Element rect:', rect);
//   return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// // Function to add the 'visible' class when the element is in the viewport
// function onScroll() {
//   const missionSection = document.querySelector('.mission-statement');
//   if (missionSection) {
//       console.log('Checking visibility'); // Debugging line
//       if (isInViewport(missionSection)) {
//           missionSection.classList.add('visible');
//       } else {
//           missionSection.classList.remove('visible'); // Optional: remove class if not in view
//       }
//   } else {
//       console.log('Element not found'); // Debugging line
//   }
// }

// // Event listener for scroll
// window.addEventListener('scroll', onScroll);

// // Initial check in case the element is already in the viewport
// onScroll();

