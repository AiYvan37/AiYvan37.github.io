document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger-btn');
    const nav = document.querySelector('.interactive-nav');
    const closeBtn = document.querySelector('.interactive-nav .close-btn');

    burgerBtn.addEventListener('click', () => {
        nav.classList.toggle('fullscreen');
        closeBtn.classList.toggle('visible'); 
    });
    
    closeBtn.addEventListener('click', () => {
        nav.classList.remove('fullscreen');
        closeBtn.classList.remove('visible'); 
    });
    
});