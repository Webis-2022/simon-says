import { createHtmlElement } from '../html-element/html-element';

export function createButton(className, text) {
  const button = createHtmlElement('button', [className], text);
  return button;
}