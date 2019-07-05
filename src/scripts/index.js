import '../styles/index.scss';

console.log('webpack starterkit');

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let close = document.getElementById('close');
let menu = document.getElementById('toggle');
let phone = document.getElementById('phone');
let search = document.getElementById('search');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
  close.classList.toggle('menu')
  menu.classList.toggle('menu')
  phone.classList.toggle('menu')
  search.classList.toggle('menu')
});

