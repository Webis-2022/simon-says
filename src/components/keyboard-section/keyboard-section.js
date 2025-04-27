import { createHtmlElement } from '../html-element/html-element.js';
import { createKeyboardButton } from './keyboard-button.js';

export function createKeyboard() {
  const keyboardSection = createHtmlElement('section', 'keyboard-section');
  const keyboardSectionContent = createHtmlElement(
    'div',
    'keyboard-section__content'
  );
  const gridContainer = createHtmlElement('div', 'grid-container');

  // gridContainer.append(createKeyboardButton());
  createKeyboardButton();
  keyboardSectionContent.appendChild(gridContainer);
  keyboardSection.appendChild(keyboardSectionContent);
  return keyboardSection;
}

