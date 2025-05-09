import { createButton } from '../components/button/button.js';
import { createModal } from '../components/modal-window/modal-window.js';
import { removeButton } from './remove-button.js';
import { animateRoundNumberCard } from './animate-round-number-card.js';
import { changeRoundCardNumber } from '../utils/change-round-card-number.js';
import {
  removeVirtualKeyboardListeners,
  removeRealKeyboardListeners,
} from './click-keyboard-button.js';
import { toggleDisabledAttribute } from './toggle-disabled-attribute.js';
import { createButtonsSet } from '../components/buttons-set/buttons-set.js';
import { clearTextInput } from './clear-text-input.js';
import { insertCharToInput } from './insert-char-to-input.js';
import { removeLastElementFromArray } from './remove-last-element-from-array.js';
import { scrollToElement } from './scroll-to-element.js';

let mistakeCounter = 0;

export async function checkUserInput(
  randomButtonsArr,
  clickedButtonsArr,
  resolve,
  event
) {
  const index = clickedButtonsArr.length - 1;
  const isCorrect = randomButtonsArr[index] === clickedButtonsArr[index];
  if (isCorrect) {
    insertCharToInput(event.target.textContent);
    if (randomButtonsArr.length === clickedButtonsArr.length) {
      removeButton('.repeat-sequence__button');
      const buttonsSet = document.querySelector('.buttons-set');
      const nextLevelButton = createButton([
        'button',
        'next-level__button',
        'Next Level',
      ]);
      nextLevelButton.addEventListener('click', async () => {
        scrollToElement('.keyboard-section__content');
        clearTextInput();
        animateRoundNumberCard();
        const buttonsSet = document.querySelector('.buttons-set');
        buttonsSet.remove();
        createButtonsSet(
          ['button', 'repeat-sequence__button', 'Repeat Sequence'],
          ['button', 'new-game__button', 'New Game']
        );
        setTimeout(() => {
          changeRoundCardNumber();
          resolve();
          animateRoundNumberCard();
        }, 3000);
      });
      buttonsSet.prepend(nextLevelButton);
      if (randomButtonsArr.length >= 10) {
        createModal('You Win!');
        toggleDisabledAttribute('.next-level__button');
      } else {
        createModal('Round Completed!');
      }
      removeVirtualKeyboardListeners();
      removeRealKeyboardListeners();
    }
  } else {
    if (mistakeCounter >= 1) {
      event.preventDefault();
      toggleDisabledAttribute('.repeat-sequence__button');
      createModal('Game Over');
      return;
    } else {
      event.preventDefault();
      removeLastElementFromArray();
      createModal('You are wrong, please try again');
      mistakeCounter += 1;
    }
  }
}

