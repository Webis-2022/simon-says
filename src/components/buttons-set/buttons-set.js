import { createHtmlElement } from '../html-element/html-element.js';
import { createButton } from '../button/button.js';
import { repeatSequence } from '../../utils/repeat-sequence.js';
import { restartGame } from '../../utils/restart-game.js';
import { changeDifficultyLevel } from '../../utils/change-difficulty-level.js';
import { toggleDisabledAttribute } from '../../utils/toggle-disabled-attribute.js';
import { clearTextInput } from '../../utils/clear-text-input.js';

export function createButtonsSet(firstButton, secondButton) {
  const controlSectionElements = document.querySelector(
    '.control-section__elements'
  );
  const buttonsSet = createHtmlElement('div', 'buttons-set');
  const repeatSequenceBtn = createButton(firstButton);
  repeatSequenceBtn.setAttribute('disabled', '');
  setTimeout(() => {
    repeatSequenceBtn.addEventListener('click', () => {
      repeatSequence();
      clearTextInput();
      toggleDisabledAttribute('.repeat-sequence__button');
    });
  }, 600);
  const newGameBtn = createButton(secondButton);
  newGameBtn.setAttribute('disabled', '');
  newGameBtn.addEventListener('click', () => {
    restartGame();
    changeDifficultyLevel();
  });

  buttonsSet.append(repeatSequenceBtn, newGameBtn);
  controlSectionElements.insertAdjacentElement('beforeend', buttonsSet);
}