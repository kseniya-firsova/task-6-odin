const slides = document.querySelectorAll('.slide');
let current = 0;

function show(index) {
  slides.forEach(s => s.classList.remove('active'));
  slides[index].classList.add('active');
  current = index;
}

document.querySelector('.prev').onclick = () => {
  current = (current === 0) ? slides.length - 1 : current - 1;
  show(current);
};

document.querySelector('.next').onclick = () => {
  current = (current === slides.length - 1) ? 0 : current + 1;
  show(current);
};