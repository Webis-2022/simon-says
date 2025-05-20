import { createTemplateSizeSelectionPage } from '../../views/template-size-selection-page/template-size-selection-page';
import { createHtmlElement } from '../html-element/html-element';

export function createSelectTemplateButton() {
  const selectTemplateButton = createHtmlElement(
    'button',
    ['select-template__button'],
    'Select Template'
  );
  selectTemplateButton.addEventListener('click', createTemplateSizeSelectionPage);
  return selectTemplateButton;
}