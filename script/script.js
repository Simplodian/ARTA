const openOverlayBtn = document.querySelector('.header__button');
const closeOverlayBtn = document.querySelector('.overlay__close-btn');
const overlay = document.querySelector('.overlay')
const callback = document.querySelector('.callback')

function overlayActive(){
    overlay.classList.toggle('overlay-active');
    callback.classList.toggle('callback-active');
}

openOverlayBtn.addEventListener('click', overlayActive);
closeOverlayBtn.addEventListener('click', overlayActive);