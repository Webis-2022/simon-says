import { createHtmlElement } from '../html-element/html-element.js';
import { createButton } from '../button/button.js';
import { createSelectElement } from '../select-element/select-element.js';
import { createKeyboard } from '../keyboard-section/keyboard-section.js';

export function createMain() {
  const main = createHtmlElement('main');
  const controlsSection = createHtmlElement('section', 'controls-section');
  const controlsSectionContainer = createHtmlElement(
    'div',
    'controls-section__container'
  );
  const controlsSectionElements = createHtmlElement(
    'div',
    'control-section__elements'
  );

  const selectElement = createSelectElement();
  const startButton = createButton('button', 'start-btn', 'Start');
  const keyboardSection = createKeyboard();

  controlsSectionElements.append(selectElement, startButton, keyboardSection);

  controlsSectionContainer.append(controlsSectionElements);
  controlsSection.append(controlsSectionContainer);
  main.append(controlsSection);
  document.body.appendChild(main);
}
