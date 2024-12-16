function leftSlide() {
  let navbar = document.getElementById('nav-menu1'); 

  navbar.style.display = 'flex';
  navbar.style.transform = 'translateX(0)';
  navbar.style.transition = '500ms';
}

function rightSlide() {
  let rightSect = document.getElementById('section-right');

  rightSect.style.transform = 'translateX(0)';
  rightSect.style.display = 'flex';
}