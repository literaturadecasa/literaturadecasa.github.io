const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let index = 0;

// Função para atualizar a posição do carrossel
function updateCarousel() {
  slides.style.transform = `translateX(${-index * 100}%)`;
}

// Botão: Próximo
document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % images.length;
  updateCarousel();
});

// Botão: Anterior
document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});

// Auto-play a cada 3 segundos
setInterval(() => {
  index = (index + 1) % images.length;
  updateCarousel();
}, 3000);
