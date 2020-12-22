const navToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelectorAll('.navbar-link')


navToggle.addEventListener('click', ()=> {
  document.body.classList.toggle('navbar-open');
});

navLinks.forEach(link => { 
  link.addEventListener('click', () => {
    document.body.classList.remove('navbar-open')
  })
})
