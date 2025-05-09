import {
  alphabetUpper,
  numbers,
} from '../components/keyboard-section/keyboard-button.js';

export function disableRealKeyboardButtons(event, selectInputNumber) {
  let array;
  if (selectInputNumber === '1') {
    array = numbers;
  } else {
    array = alphabetUpper;
  }
  disableDeleteButtons();
  return !array.includes(event.key.toUpperCase() || event.target.textContent);
}

export function disableDeleteButtons() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Delete' || event.key === 'Backspace') {
      event.preventDefault();
    }
  });
}
