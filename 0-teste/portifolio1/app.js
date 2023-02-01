const btnMobile = document.getElementById('btn-mobile');
const btnNav = document.getElementById('nav');

function toggleMenu(event) {
    nav.classList.toggle('active');
}
btnNav.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
