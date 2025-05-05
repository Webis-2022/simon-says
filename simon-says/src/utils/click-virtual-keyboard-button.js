import { checkUserInput } from './check-user-input.js';
import { savedRandomButtonsArr, savedIndexArr } from './run-game.js';
import { highlightButton } from './highlight-button.js';
import { disableRealKeyboardButtons } from '../utils/disable-real-keyboard-buttons.js';
export let clickedButtonsArr = [];

export async function changeButtonColor(event, resolve) {
  const target = event.target;
  const selectInputNumber = document.querySelector('.select').value;
  if (disableRealKeyboardButtons(event, selectInputNumber)) {
    event.preventDefault();
  } else {
    if (target.classList.contains('item')) {
      clickedButtonsArr.push(target.textContent);
    } else {
      clickedButtonsArr.push(event.key);
    }
  }

  let clickedButtonIndex;
  let clickedButton = event.key === undefined ? target.textContent : event.key;
  const allButtons = document.querySelectorAll('.item');
  [...allButtons].forEach((button, index) => {
    if (button.textContent.includes(clickedButton)) {
      clickedButtonIndex = index;
    }
  });
  console.log('---', clickedButtonIndex);
  await new Promise((resolve) => {
    // target.style.backgroundColor = '#f8ce9f';
    // setTimeout(() => {
    //   target.style.backgroundColor = '#f0f0f0';
    //   resolve();
    // }, 900);
    highlightButton(clickedButtonIndex);
    resolve();
  });
  await checkUserInput(savedRandomButtonsArr, clickedButtonsArr, resolve);
}

export async function itemClickHandler(event) {
  changeButtonColor(event, resolveGlobal);
}

let resolveGlobal;

export async function clickVirtualKeyboardButton(resolve) {
  resolveGlobal = resolve;
  const items = document.querySelectorAll('.item');
  [...items].forEach((item) => {
    item.addEventListener('click', itemClickHandler);
  });
}

export function clickRealKeyboardButton() {
  document.addEventListener('keydown', itemClickHandler);
}

export function removeVirtualKeyboardListeners() {
  const items = document.querySelectorAll('.item');
  [...items].forEach((item) => {
    item.removeEventListener('click', itemClickHandler);
  });
}
