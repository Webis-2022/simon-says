import { createButton } from '../components/button/button.js';
import { createModal } from '../components/modal-window/modal-window.js';
import { removeButton } from './remove-button.js';
import { animateRoundNumberCard } from './animate-round-number-card.js';
import { changeRoundCardNumber } from '../utils/change-round-card-number.js';

let mistakeCounter = 0;

export async function checkUserInput(
  randomButtonsArr,
  clickedButtonsArr,
  resolve
) {
  const isCompleted =
    randomButtonsArr.length === clickedButtonsArr.length &&
    randomButtonsArr.every((el, i) => el === clickedButtonsArr[i]);

  if (isCompleted) {
    removeButton('.repeat-sequence__button');
    const buttonsSet = document.querySelector('.buttons-set');
    const nextLevelButton = createButton([
      'button',
      'next-level__button',
      'Next Level',
    ]);
    nextLevelButton.addEventListener('click', async () => {
      animateRoundNumberCard();
      setTimeout(() => {
        changeRoundCardNumber();
      }, 3000);
      resolve();
    });
    buttonsSet.prepend(nextLevelButton);
    createModal('Round Completed!');
  } else {
    if (mistakeCounter >= 1) {
      createModal('Game Over')
      return;
    }
    createModal('You are wrong, please try again');
    mistakeCounter += 1;
    console.log(mistakeCounter);
  }
}