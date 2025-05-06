import { createHeader } from '../components/header/header.js';
import { createMain } from '../components/main/main.js';

export function restartGame() {
  const selectInput = document.querySelector('.select');
  const selectInputNumber = selectInput.value;
  document.body.innerHTML = '';
  createHeader();
  createMain();

  const newSelectInput = document.querySelector('.select');
  if (newSelectInput) {
    newSelectInput.value = selectInputNumber;
  }
}