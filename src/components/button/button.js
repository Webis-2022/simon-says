import { createHtmlElement } from '../html-element/html-element.js';

export function createButton(tag, className, buttonText) {
  const button = createHtmlElement(tag, className, buttonText);
  return button;
}