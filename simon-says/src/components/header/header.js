import { createHtmlElement } from '../html-element/html-element.js';

export function createHeader() {
  const header = createHtmlElement('header', 'header');
  const headerContainer = createHtmlElement('div', 'header__container');
  const gameTitle = createHtmlElement('div', 'game-title', 'Simon Says');

  headerContainer.appendChild(gameTitle);
  header.appendChild(headerContainer);
  document.body.appendChild(header);
}
