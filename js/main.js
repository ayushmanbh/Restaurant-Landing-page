window.onscroll = () => {
  const nav = document.querySelector('.main-nav');
  if (this.scrollY <= 10) {
    nav.classList.remove('scroll')
  } else {
    nav.classList.add('scroll')
  }
};

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]
const nav = document.querySelector('.main-nav');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  nav.classList.toggle('nav-click')

})