'use strict'

// Make navbar transparent when it is on the top
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
navbarMenu.addEventListener('click', (event) => scrollToTarget(event));

// Handle scrolling when tapping on the Contact Me Button
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (event) => scrollToTarget(event));

// 화면이 내려가면 홈화면 투명해지기
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = (1 - (window.scrollY / homeHeight));
});


// Scrolling to target function
function scrollToTarget(event) {
  const target = event.target;
  const link = target.dataset.link;
  console.log(link);
  if (link==null){
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: "smooth"});
}