import { createButton } from '../components/button/button.js';
import { createModal } from '../components/modal-window/modal-window.js';
import { removeButton } from './remove-button.js';
import { animateRoundNumberCard } from './animate-round-number-card.js';
import { changeRoundCardNumber } from '../utils/change-round-card-number.js';
import { clickVirtualKeyboardButton } from './click-virtual-keyboard-button.js';
import { repeatSequence } from './repeat-sequence.js';

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
        removeButton('.next-level__button');
        const repeatSequenceButton = createButton([
          'button',
          'repeat-sequence__button',
          'Repeat Sequence',
        ]);
        buttonsSet.prepend(repeatSequenceButton);
        repeatSequenceButton.addEventListener('click', repeatSequence);
        setTimeout(() => {
          changeRoundCardNumber();
          resolve();
        }, 3000);
      });
      buttonsSet.prepend(nextLevelButton);
      createModal('Round Completed!');
    }
  } else {
    if (mistakeCounter >= 1) {
      createModal('Game Over');
      return;
    } else {
      createModal('You are wrong, please try again');
      mistakeCounter += 1;
      console.log(mistakeCounter);
    }
  }
}

