// Scroll Suave
document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Modo Escuro/Claro
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// Galeria de Fotos (preencha com suas imagens)
const galleryImages = [
    { src: 'img/galeria1.jpg', caption: 'Legenda 1' },
    { src: 'img/galeria2.jpg', caption: 'Legenda 2' },
    { src: 'img/galeria3.jpg', caption: 'Legenda 3' },
    // Adicione mais imagens
];

function initGallery() {
    const galleryContainer = document.querySelector('.gallery-grid');
    galleryImages.forEach(img => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'col-md-4 mb-4';
        galleryItem.innerHTML = `
            <div class="gallery-item">
                <img src="${img.src}" class="img-fluid rounded" alt="${img.caption}">
                <div class="caption">${img.caption}</div>
            </div>
        `;
        galleryContainer.appendChild(galleryItem);
    });
}

// Voltar ao topo
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Inicialização quando o documento carregar
document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    
    // Animação de entrada das seções
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
        section.style.transform = 'translateY(20px)';
        observer.observe(section);
    });
});