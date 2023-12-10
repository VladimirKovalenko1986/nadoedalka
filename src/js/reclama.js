const box = document.querySelector('.js-box');
const timer = document.querySelector('.js-timer');
let counter = 11;
let timerId = null;

setTimeout(() => {
  box.style.display = 'block';
  timerId = setInterval(() => {
    counter -= 1;
    timer.textContent = counter;

    // if (!counter) {
    //   box.style.display = 'none';
    //   clearInterval(timerId);
    // }

    //   !!!! Робимо через кнопку !!!!
    if (!counter) {
      clearInterval(timerId);
      timer.textContent = 'X';
      timer.addEventListener('click', onClick);
    }
  }, 1000);
}, 5000);

function onClick() {
  box.style.display = 'none';
}
