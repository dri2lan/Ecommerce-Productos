const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

let slideIndex = 0;
showSlides();

function showSlides() {
    const testimonials = document.querySelectorAll('.testimonial');
    
    for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = 'none';
    }
    
    slideIndex++;
    
    if (slideIndex > testimonials.length) {
        slideIndex = 1;
    }
    
    testimonials[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 5000); // Cambiar testimonio cada 5 segundos
}


