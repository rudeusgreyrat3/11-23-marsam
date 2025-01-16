// Burger menu
const burgerMenuBtn = document.querySelector('.burger-menu-btn');
const mainNav = document.querySelector('.main-nav');

burgerMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Modal window
const phoneBtn = document.querySelector('.phone-btn');
const phoneModal = document.getElementById('phone-modal');
const closeModal = document.querySelector('.close-modal');

phoneBtn.addEventListener('click', () => {
    phoneModal.classList.add('show');
});

closeModal.addEventListener('click', () => {
    phoneModal.classList.remove('show');
});
window.addEventListener('click', (event) => {
    if(event.target == phoneModal) {
       phoneModal.classList.remove('show');
    }
});

// Slider logic
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const sliderNavigation = document.querySelector('.slider-navigation');

let slideIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if(i === index){
       slide.style.display = 'block';
       sliderNavigation.children[i].classList.add('active');
    } else {
        slide.style.display = 'none';
        sliderNavigation.children[i].classList.remove('active');
    }
});
}
function createNavigation() {
     slides.forEach((slide, index) => {
       const navItem = document.createElement('span');
        navItem.addEventListener('click', () => {
            slideIndex = index;
            showSlide(slideIndex);
        });
        sliderNavigation.appendChild(navItem);
    });
}
createNavigation();
showSlide(slideIndex);

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}
setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Accordion Logic
const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
     header.addEventListener('click', () => {
       const item = header.closest('.accordion-item');
        const body = item.querySelector('.accordion-body');
        const headerActive = item.querySelector('.accordion-header');
         if(body.style.display === 'block') {
           body.style.display = 'none';
             headerActive.classList.remove('active');
         } else {
           body.style.display = 'block';
           headerActive.classList.add('active');
         }
     });
});