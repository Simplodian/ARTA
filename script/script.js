const openOverlayBtn = document.querySelector('.submit');
const closeOverlayBtn = document.querySelector('.overlay__close-btn');
const overlay = document.querySelector('.overlay')
const callback = document.querySelector('.callback')

function overlayActive() {
  overlay.classList.toggle('overlay-active');
  callback.classList.toggle('callback-active');
}

openOverlayBtn.addEventListener('click', overlayActive);
closeOverlayBtn.addEventListener('click', overlayActive);

const telNumber = document.querySelector('.overlay__number'),
  overlaySubmit = document.querySelector('.overlay__submit');


overlaySubmit.onclick = function () {
  let i = telNumber.value;
  console.log(i.length)
  if (i.slice(0, 4) != '+375' || i.length != 13 || i.slice(4, 6) != '29' && i.slice(4, 6) != '25' && i.slice(4, 6) != '44') {
    alert('Введите телефон формата +375(**) *** - ** - **')
  } else {
    alert('Ваша заявка обрабатывается!')
  }
};


const openGallary = document.querySelectorAll('.designation');
const gallary = document.querySelectorAll('.designation-content');

openGallary.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (index == 0) {
      gallary[0].classList.toggle('designation-content-active-1');
    } else if (index == 1) {
      gallary[1].classList.toggle('designation-content-active-2');
    } else if (index == 2) {
      gallary[2].classList.toggle('designation-content-active-3');
    } else if (index == 3) {
      gallary[3].classList.toggle('designation-content-active-4');
    } else if(index == 4){
      gallary[4].classList.toggle('designation-content-active-5');
    } else if(index == 5){
      gallary[5].classList.toggle('designation-content-active-6');
    }else{
      console.log(undefined)
    }
  })
})

console.log(gallary)