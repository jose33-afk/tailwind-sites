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

//!!N vou precisar das bolinhas no pc e nem do menuw!!

const menu = document.querySelector('.menu');
const bntMenu = document.querySelector('#bnt-menu');

bntMenu.addEventListener('click', () => {
  const bntImg = bntMenu.querySelector('img');
  const caminho = bntImg.getAttribute('src');

  if (caminho === './src/img/icon-hamburger.svg') {
    bntImg.src = './src/img/icon-close.svg';
  } else bntImg.src = './src/img/icon-hamburger.svg';

  menu.classList.toggle('opacity-0');
  menu.classList.toggle('invisible');
  menu.classList.toggle('opacity-100');
  menu.classList.toggle('visible');
});

//Com display none n da pra fazer uma transiçao
// mas com opacity e invisible que simula o display none da.

