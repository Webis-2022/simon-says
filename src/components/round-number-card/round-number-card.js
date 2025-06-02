import { createHtmlElement } from '../html-element/html-element.js';

export function createRoundNumberCard() {
  const controlSectionElements = document.querySelector(
    '.control-section__elements'
  );
  const roundNumberCard = createHtmlElement('div', 'round-number__card', '1');
  controlSectionElements.appendChild(roundNumberCard);
}
