import { checkUserInput } from './check-user-input.js';
import { savedRandomButtonsArr, savedIndexArr } from './run-game.js';
import { highlightButton } from './highlight-button.js';
import { disableRealKeyboardButtons } from './disable-real-keyboard-buttons.js';
import { insertCharToInput } from './insert-char-to-input.js';
export let clickedButtonsArr = [];

export async function changeButtonColor(event, resolve) {
  const target = event.target;
  const selectInputNumber = document.querySelector('.select').value;
  if (disableRealKeyboardButtons(event, selectInputNumber)) {
    event.preventDefault();
  } else {
    if (target.classList.contains('item')) {
      clickedButtonsArr.push(target.textContent);
      insertCharToInput(target.textContent);
    } else {
      clickedButtonsArr.push(event.key.toUpperCase());
    }
  }

  let clickedButtonIndex;
  let clickedButton =
    event.key === undefined ? target.textContent : event.key.toUpperCase();
  const allButtons = document.querySelectorAll('.item');
  [...allButtons].forEach((button, index) => {
    if (button.textContent.includes(clickedButton)) {
      clickedButtonIndex = index;
    }
  });
  await new Promise((resolve) => {
    highlightButton(clickedButtonIndex);
    resolve();
  });
  await checkUserInput(
    savedRandomButtonsArr,
    clickedButtonsArr,
    resolve,
    event
  );
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

export async function clickRealKeyboardButton(resolve) {
  resolveGlobal = resolve;
  document.addEventListener('keydown', itemClickHandler);
}

export function removeRealKeyboardListeners() {
  document.removeEventListener('keydown', itemClickHandler);
}

export function removeVirtualKeyboardListeners() {
  const items = document.querySelectorAll('.item');
  [...items].forEach((item) => {
    item.removeEventListener('click', itemClickHandler);
  });
}
