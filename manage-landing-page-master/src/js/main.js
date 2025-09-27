const container = document.querySelector('.commts-contain > div');
const dots = document.querySelectorAll('.dot');

container.addEventListener('scroll', () => {
  const scrollLeft = container.scrollLeft;
  const itemWidth = 350;
  const activeIndex = Math.round(scrollLeft / itemWidth); //1
  
  dots.forEach(dot => dot.classList.remove('active'));
  
  // Adiciona active na atual
  if (dots[activeIndex]) {
    dots[activeIndex].classList.add('active');
  }
});

//Basicamnete ele pega a posicao do scroll e divide 
//pela largura e depois aredonda pra o inteiro mais porximo.

