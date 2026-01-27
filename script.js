window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const navLinks = document.querySelectorAll('.nav a');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        sections.forEach(section => {
            section.style.display = 'none';
        });

        const sectionId = this.dataset.section;
        const sectionToShow = document.getElementById(sectionId);

        if (sectionToShow) {
            sectionToShow.style.display = 'block';
        }
    });
});

// Mostrar inicio por defecto
document.getElementById('inicio').style.display = 'block';

const categorias = document.querySelectorAll(".categoria-titulo");

categorias.forEach(btn => {
  btn.addEventListener("click", () => {
    const contenido = btn.nextElementSibling;

    contenido.style.display =
      contenido.style.display === "block" ? "none" : "block";
  });
});

