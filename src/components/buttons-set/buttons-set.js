import { createHtmlElement } from '../html-element/html-element.js';
import { createButton } from '../button/button.js';
import { repeatSequence } from '../../utils/repeat-sequence.js';
import { restartGame } from '../../utils/restart-game.js';
import { changeDifficultyLevel } from '../../utils/change-difficulty-level.js';
import { toggleDisabledAttribute } from '../../utils/toggle-disabled-attribute.js';

export function createButtonsSet(firstButton, secondButton) {
  const controlSectionElements = document.querySelector(
    '.control-section__elements'
  );
  const buttonsSet = createHtmlElement('div', 'buttons-set');
  const repeatSequenceBtn = createButton(firstButton);
  repeatSequenceBtn.setAttribute('disabled', '');
  setTimeout(() => {
    repeatSequenceBtn.addEventListener('click', () => {
      console.log('hello');
      repeatSequence();
      toggleDisabledAttribute('.repeat-sequence__button');
    });
  }, 600);
  const newGameBtnBtn = createButton(secondButton);
  newGameBtnBtn.addEventListener('click', () => {
    restartGame();
    changeDifficultyLevel();
  });

  buttonsSet.append(repeatSequenceBtn, newGameBtnBtn);
  controlSectionElements.insertAdjacentElement('beforeend', buttonsSet);
}