import { createHtmlElement } from '../html-element/html-element.js';
import { createButton } from '../button/button.js';
import { createSelectElement } from '../select-element/select-element.js';
import { createKeyboard } from '../keyboard-section/keyboard-section.js';
import { createButtonsSet } from '../buttons-set/buttons-set.js';
import { createRoundNumberCard } from '../../components/round-number-card/round-number-card.js';
import { removeButton } from '../../utils/remove-button.js';
import { createSequenceInput } from '../sequence-input/sequence-input.js';
import { runGame } from '../../utils/run-game.js';
import { toggleDisabledAttribute } from '../../utils/toggle-disabled-attribute.js';
import { scrollToElement } from '../../utils/scroll-to-element.js';

export function createMain() {
  const main = createHtmlElement('main');
  const controlsSection = createHtmlElement('section', 'controls-section');
  const controlsSectionContainer = createHtmlElement(
    'div',
    'controls-section__container'
  );
  const controlsSectionContent = createHtmlElement(
    'div',
    'controls-section__content'
  );
  const controlsSectionElements = createHtmlElement(
    'div',
    'control-section__elements'
  );

  const selectElement = createSelectElement();
  const startButton = createButton(['button', 'start-btn', 'Start']);
  startButton.addEventListener('click', async () => {
    toggleDisabledAttribute('.select');
    createRoundNumberCard();
    createButtonsSet(
      ['button', 'repeat-sequence__button', 'Repeat Sequence'],
      ['button', 'new-game__button', 'New Game']
    );
    removeButton('.start-btn');
    createSequenceInput();
    scrollToElement('.keyboard-section__content');
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const selectInput = document.querySelector('.select');
    const selectInputNumber =
      selectInput.options[selectInput.selectedIndex].textContent;
    runGame(selectInputNumber);
  });
  const keyboardSection = createKeyboard();
  controlsSectionElements.append(selectElement);
  controlsSectionContent.append(controlsSectionElements, startButton);
  controlsSectionContainer.append(controlsSectionContent);
  controlsSection.append(controlsSectionContainer);
  main.append(controlsSection, keyboardSection);
  document.body.append(main);
}
