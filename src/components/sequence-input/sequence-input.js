import { createHtmlElement } from '../html-element/html-element.js';

export function createSequenceInput() {
  const sequenceInput = createHtmlElement('input', 'sequence-input');
  const controlsSectionContent = document.querySelector(
    '.controls-section__content'
  );
  controlsSectionContent.insertAdjacentElement('beforeend', sequenceInput);
}