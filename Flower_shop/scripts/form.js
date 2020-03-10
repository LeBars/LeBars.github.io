let modalWindow = document.querySelector('.modal__overlay'),
    lock = document.querySelector('body'),
    btnCloseModal = document.querySelector('.modal__close'),
    btnOpenModal = document.querySelector('.modal__open');

btnOpenModal.addEventListener('click', () => {
    modalWindow.style.display = 'flex';
    modalWindow.classList.add('animated', 'fadeIn');
    lock.classList.add('locked');
});

btnCloseModal.addEventListener('click', () => {
  modalWindow.style.display = 'none';
  lock.classList.remove('locked');
});