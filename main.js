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