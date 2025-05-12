import { clearPage } from '../../utils/clear-page';
import { createHtmlElement } from '../../components/html-element/html-element';
import { createButton } from '../../components/button/button';
import templateImage from '../../assets/img/template.png';
import './template-size-selection-page.css';

export function createTemplateSizeSelectionPage() {
  let nextSize = 0;
  clearPage();

  const fieldSizeWrapper = createHtmlElement('div', ['field-size__wrapper']);
  const title = createHtmlElement('h1', ['title'], 'Please select size of template');
  const selectRandomTemplate = createButton(
    ['select-random-template__button'],
    'Select Random Template'
  );
  fieldSizeWrapper.append(title);

  for (let i = 0; i < 3; i += 1) {
    const smallestSize = 5;
    const fieldSizeSelector = createHtmlElement('div', ['field-size__selector']);

    const selectorImage = createHtmlElement('img');
    selectorImage.src = templateImage;
    const fieldSize = createHtmlElement(
      'span',
      [],
      `${smallestSize + nextSize}x${smallestSize + nextSize}`
    );
    nextSize += 5;

    fieldSizeSelector.append(selectorImage, fieldSize);
    fieldSizeWrapper.append(fieldSizeSelector);
  }
  fieldSizeWrapper.append(selectRandomTemplate);
  document.body.append(fieldSizeWrapper);
}
