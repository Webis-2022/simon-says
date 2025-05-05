import {
  alphabetUpper,
  numbers,
} from '../components/keyboard-section/keyboard-button.js';


export function disableRealKeyboardButtons(event, selectInputNumber) {
  let array;
  console.log('herrrrr', selectInputNumber);
  if (selectInputNumber === '1') {
    array = numbers;
  } else {
    array = alphabetUpper;
  }
  disableDeleteButtons();
  console.log('...', !array.includes(event.key));
  return !array.includes(event.key);
}

export function disableDeleteButtons() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Delete' || event.key === 'Backspace') {
      event.preventDefault();
    }
  });
}
