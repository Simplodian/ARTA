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

const telNumber = document.querySelector('.overlay__number'),
      overlaySubmit = document.querySelector('.overlay__submit');


overlaySubmit.onclick = function(){
  let i = telNumber.value;
  console.log(i.length)
  if ( i.slice(0,4) != '+375' || i.length != 13 || i.slice(4,6) != '29' && i.slice(4,6) != '25' && i.slice(4,6) != '44'){
    alert('Введите телефон формата +375(**) *** - ** - **')
  } else {
    alert( 'Ваша заявка обрабатывается!')
  }
};
