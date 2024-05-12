document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const burgerBtn = document.querySelector('.burger-btn');
    const nav = document.querySelector('.interactive-nav');
    const closeBtn = document.querySelector('.interactive-nav .close-btn');

    let slideIndex = 0;

    function showSlides(index) {
        const slides = document.querySelectorAll('.slide');
        if (index >= slides.length) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = slides.length - 1;
        }
        slides.forEach((slide, i) => {
            if (i === slideIndex) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        slideIndex--;
        showSlides(slideIndex);
    });

    nextBtn.addEventListener('click', () => {
        slideIndex++;
        showSlides(slideIndex);
    });

    showSlides(slideIndex);

    burgerBtn.addEventListener('click', () => {
        nav.classList.toggle('fullscreen');
        closeBtn.classList.toggle('visible'); 
    });
    
    closeBtn.addEventListener('click', () => {
        nav.classList.remove('fullscreen');
        closeBtn.classList.remove('visible'); 
    });
    

});