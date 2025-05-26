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
import { addUserAnswersToArray } from '../utils/create-user-answers-array';
import { retrieveSavedDraw } from '../utils/retrieve-saved-draw';
import { clearPlayground } from '../utils/clear-playground';
import { showSolution } from '../utils/show-solution';

export function returnButtonHandler() {
  createTemplateSizeSelectionPage();
}

export function selectRandomTemplateButtonHandler() {
  const fieldSizeArr = ['5x5', '10x10', '15x15'];
  const index = Math.floor(Math.random() * 3);
  const randomSize = fieldSizeArr[index];
  const randomTemplate = Math.floor(Math.random() * 5);
  localStorage.setItem('buttonNumber', randomTemplate);
  localStorage.setItem('fieldSize', randomSize);
  navigateTo('/game', randomSize, randomTemplate);
}

export function resetButtonHandler() {
  clearPlayground();
  addUserAnswersToArray();
}

export function saveButtonHandler() {

}

export function loadButtonHandler() {
  clearPlayground();
  retrieveSavedDraw();
}

export function showSolutionButtonHandler() {
  showSolution();
}