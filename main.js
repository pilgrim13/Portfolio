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
  navbarMenu.classList.remove('open');
  scrollToTarget(link);
});


// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
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


// Mywork Category
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null){
    return ;
  }


  // Remove Selection from the  previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('.selected');
  const target = 
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('.selected');
  
  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type){
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});


// Scrolling to target function
function scrollToTarget(link) {
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: "smooth"});
}