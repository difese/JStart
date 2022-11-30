// const textInput = document.querySelector('#text-input');
// const buttonForm = document.querySelector('#button-form');
// const textBlock = document.querySelector('#duplicate-field');

// textInput.addEventListener('keypress', function(event) {
//   textBlock.textContent = textBlock.textContent + event.key;
// });

// buttonForm.addEventListener('click', function(event) {
//   event.preventDefault();
//   console.log(textBlock.textContent);
//   textInput.value = '';
//   textBlock.textContent = '';
// });


const textInput = document.querySelector('#text-input');
const buttonForm = document.querySelector('#button-form');
const textBlock = document.querySelector('#duplicate-field');

textInput.addEventListener('input', function(event) {
  textBlock.textContent = textInput.value;
});

buttonForm.addEventListener('click', function(event) {
  event.preventDefault();
  console.log(textBlock.textContent);
  textInput.value = '';
  textBlock.textContent = '';
});