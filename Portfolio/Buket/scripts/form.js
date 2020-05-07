let modalWindow = document.querySelector('.modal__overlay'),
    lock = document.querySelector('body'),
    btnCloseModal = document.querySelector('.modal__close'),
    btnOpenModal = document.querySelector('.modal__open');

let form = document.querySelector('form'),
    btnSubmit = form.querySelector('button');  


form.addEventListener('submit', () => {
  event.preventDefault();

  let name = form.querySelector('input[type=name]'),
      phone = form.querySelector('input[type=phone]'),
      errors = form.querySelectorAll('.error');

  if (errors) {
    for(let i = 0; i < errors.length; i++){
      errors[i].remove();
    }
  }

  if (!name.value) {    
    showErr(name);
  }
  else {
    hideErr(name);
  }

  if (!phone.value) {
    showErr(phone);
  } 
  else {
    hideErr(phone);
  }

  function showErr(filed) {
    // let error = document.createElement('div');

    // error.className = 'error';
    // error.textContent = text;
    filed.style.border = '1px solid red';
    // filed.after(error);
  }

  function hideErr(filed) {
    filed.style.border = '';
  }
})




btnOpenModal.addEventListener('click', () => {
    modalWindow.style.display = 'flex';
    modalWindow.classList.add('animated', 'fadeIn');
    lock.classList.add('locked');
    body.style.paddingRight = "17px"
});

btnCloseModal.addEventListener('click', () => {
  modalWindow.style.display = 'none';
  lock.classList.remove('locked');
  body.style.paddingRight = ""
});