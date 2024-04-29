// FUNCIONALIDAD DEL DESPLAZAMIENTO CON BOTONES

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FIN FUNCIONALIDAD DEL DESPLAZAMIENTO CON BOTONES

// FUNCIONALIDAD DEL SLIDER

let currentIndex = 0;

        function showNextImage() {
        const images = document.querySelectorAll('.slider img');
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1;
        }

        // Cambia la imagen cada 3 segundos
        setInterval(showNextImage, 3000);

// FIN FUNCIONALIDAD DEL SLIDER