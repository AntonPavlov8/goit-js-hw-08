import throttle from 'lodash.throttle';

const form = document.querySelector('form');

if (localStorage.getItem('feedback-form-state')) {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  form.elements.email.value = data.email;
  form.elements.message.value = data.message;
}

form.addEventListener(
  'input',
  throttle(() => {
    const data = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
