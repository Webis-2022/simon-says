import { createButton } from '../components/button/button.js';
import { createModal } from '../components/modal-window/modal-window.js';
import { removeButton } from './remove-button.js';
import { animateRoundNumberCard } from './animate-round-number-card.js';
import { changeRoundCardNumber } from '../utils/change-round-card-number.js';
import { clickVirtualKeyboardButton } from './click-keyboard-button.js';
import { repeatSequence } from './repeat-sequence.js';
import {
  removeVirtualKeyboardListeners,
  itemClickHandler,
} from './click-keyboard-button.js';
import { toggleDisabledAttribute } from './toggle-disabled-attribute.js';
import { createButtonsSet } from '../components/buttons-set/buttons-set.js';

let mistakeCounter = 0;

export async function checkUserInput(
  randomButtonsArr,
  clickedButtonsArr,
  resolve
) {
  console.log('1', randomButtonsArr);
  console.log('2', clickedButtonsArr);
  const index = clickedButtonsArr.length - 1;
  const isCorrect = randomButtonsArr[index] === clickedButtonsArr[index];

  if (isCorrect) {
    if (randomButtonsArr.length === clickedButtonsArr.length) {
      removeButton('.repeat-sequence__button');
      const buttonsSet = document.querySelector('.buttons-set');
      const nextLevelButton = createButton([
        'button',
        'next-level__button',
        'Next Level',
      ]);
      nextLevelButton.addEventListener('click', async () => {
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
      if (randomButtonsArr.length >= 6) {
        createModal('You Win!');
      } else {
        createModal('Round Completed!');
      }
      removeVirtualKeyboardListeners();
      document.addEventListener('keydown', itemClickHandler);
    }
  } else {
    if (mistakeCounter >= 1) {
      createModal('Game Over');
      return;
    } else {
      createModal('You are wrong, please try again');
      mistakeCounter += 1;
    }
  }
}

