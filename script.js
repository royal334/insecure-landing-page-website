const navBar = document.getElementById('nav-bar');
const  hamburger = navBar.querySelector('a img');
const nav = document.querySelector('.nav')

let toggle = false

function closeUp(){
    
     
     if (toggle === false ){
          hamburger.src = '/images/icon-close.svg'
          console.log(toggle)
     }
     else{
          hamburger.src = "./images/icon-hamburger.svg"
     }
     toggle = !toggle
     nav.classList.toggle('nav--visible');
     
}

