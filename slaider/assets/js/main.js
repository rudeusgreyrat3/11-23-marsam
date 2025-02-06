const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let slideIndex = 0;
const slideWidth = slides[0].offsetWidth; 
const totalSlides = slides.length;

slider.style.width = slideWidth * totalSlides + 'px';

function showSlide(index) {
    if (index < 0) {
        slideIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        slideIndex = 0;
    } else {
        slideIndex = index;
    }

    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    showSlide(slideIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(slideIndex + 1);
});


showSlide(slideIndex);