'use strict'

// Make navbar transparent when it is on the top
// 상단버튼 생성
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(navbarHeight < window.scrollY) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});


// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link==null){
    return;
  }
  scrollToTarget(link);
});


// Handle scrolling when tapping on the Contact Me Button
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', () => scrollToTarget('#contact'));

// 화면이 내려가면 홈화면 투명해지기
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = (1 - (window.scrollY / homeHeight));
});

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (homeHeight / 2 < window.scrollY) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

// Handle click on the "Arrou-Up" button
arrowUp.addEventListener('click', () => {
  scrollToTarget('#home');
});

// Scrolling to target function
function scrollToTarget(link) {
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: "smooth"});
}