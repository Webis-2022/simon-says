import { createHtmlElement } from '../html-element/html-element';

export function createSelectTemplateButton() {
  const selectTemplateButton = createHtmlElement(
    'button',
    ['select-template__button'],
    'Select Template'
  );
  return selectTemplateButton;
}