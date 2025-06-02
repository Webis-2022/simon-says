import { createHtmlElement } from '../html-element/html-element.js';

export function createButton(buttonParams) {
  const button = createHtmlElement(
    buttonParams[0],
    buttonParams[1],
    buttonParams[2]
  );
  return button;
}