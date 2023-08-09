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

//Testimonial
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


//Estilo imagen efecto 3D//
const el = document.getElementById('hero')
const height = el.clientHeight
const width = el.clientWidth

el.addEventListener('mousemove', (evt) => {
    const {layerX, layerY} = evt

    const yRotation = (
        (layerX - width / 2) / width
    )   * 20

    const xRotation = (
        (layerX - height / 2) / height
    )   * 20

    const string = `
    perpestive(500px)
    scale(1.1)
    rotateX(${xRotation}deg)
    rotateX(${yRotation}deg)`
el.style.transform = string    
})

el.addEventListener('mauseout', () =>{
    el.style.transform = `
    perpestive(500px)
    scale(1)
    rotateX(0)
    rotateY(0)`
})


