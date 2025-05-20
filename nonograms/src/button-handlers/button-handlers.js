import {
  createTemplateSizeSelectionPage,
  fieldSize,
} from '../views/template-size-selection-page/template-size-selection-page';

import {
  smallFields,
  middleFields,
  bigFields,
} from '../views/template-selection-page/template-selection-page';
import { navigateTo } from '../main';

export function returnButtonHandler() {
  createTemplateSizeSelectionPage();
}

export function selectRandomTemplateButtonHandler() {
  const fieldSizeArr = ['5x5', '10x10', '15x15'];
  const index = Math.floor(Math.random() * 3);
  const randomSize = fieldSizeArr[index];
  const randomTemplate = Math.floor(Math.random() * 5);

  navigateTo('/game', randomSize, randomTemplate);
}