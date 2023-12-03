// !!!!! Надоедалка при нажатии !!!!!!!

// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;
// const refs = {
//   notifacation: document.querySelector('.js-alert'),
// };

// refs.notifacation.addEventListener('click', onNotificationClick);

// showNotification();

// function onNotificationClick() {
//   hiddenNotification();
//   clearTimeout(timeoutId);
// }

// function showNotification() {
//   refs.notifacation.classList.add('is-visible');

//   timeoutId = setTimeout(() => {
//     hiddenNotification();
//   }, NOTIFICATION_DELAY);
// }

// function hiddenNotification() {
//   refs.notifacation.classList.remove('is-visible');
// }

// !!!!!!!! Надоедалка с интервалом !!!!!!

// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;

// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('Зупиніть інтервал!!!!');
//     clearInterval(intervalId);
//     return;
//   }
//   console.log('Підпишись на розсилку! - ' + Date.now());
//   promptCounter += 1;
// }, PROMPT_DELAY);

// !!!! Робимо модалку через через bootstrap!!!!!

import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

const refs = {
  modal: document.getElementById('myModal'),
  saveButton: document.querySelector('button[data-subscribe]'),
};

const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;
let hasSubscribed = false;
let promptCounter = 0;
const myModal = new bootstrap.Modal(refs.modal);

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);
refs.saveButton.addEventListener('click', onClickSave);

function onClickSave() {
  hasSubscribed = true;
  myModal.hide();
}

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    return;
  }

  setTimeout(() => {
    console.log('Відкриваємо набруднілку!!!');
    myModal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}
