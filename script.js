const navBar = document.getElementById('nav-bar');
const  hamburger = navBar.querySelector('a img');
const nav = document.querySelector('.nav')

function closeUp(){
     hamburger.src = "./images/icon-hamburger.svg" ? '/images/icon-close.svg' : "./images/icon-hamburger.svg"
     nav.classList.toggle('nav--visible');
}

