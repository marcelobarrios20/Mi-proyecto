document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector("#carouselExample");
    let bsCarousel = new bootstrap.Carousel(carousel, {
      interval: 3000, // 3 segundos por slide
      ride: "carousel",
      wrap: false, // Evita que el carrusel avance automáticamente al inicio
    });
  
    function restartCarousel() {
      setTimeout(() => {
        bsCarousel.to(0); // Vuelve a la primera imagen manualmente
      }, 3000); // Espera 3 segundos en la última imagen antes de volver a la primera
    }
  
    carousel.addEventListener("slid.bs.carousel", function (event) {
      let activeIndex = event.to;
      let totalSlides = document.querySelectorAll("#carouselExample .carousel-item").length;
  
      if (activeIndex === totalSlides - 1) {
        restartCarousel(); // Si está en la última imagen, reinicia el carrusel
      }
    });
  });
  



  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-content img"); // Seleccionar todas las imágenes

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Agregar la clase visible
        }
      });
    }, { threshold: 0.3 }); // Se activa cuando el 30% de la imagen está visible

    images.forEach(img => observer.observe(img)); // Observar cada imagen
  });

/* Preguntas frecuentes */

document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
      item.classList.toggle("active");
  });
});