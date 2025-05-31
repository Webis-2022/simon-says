import { createHtmlElement } from '../html-element/html-element';
import { createButton } from '../button/button';
import './button-set.css';
// eslint-disable-next-line import/no-cycle
import {
  saveButtonHandler,
  loadButtonHandler,
  resetButtonHandler,
  showSolutionButtonHandler,
} from '../../button-handlers/button-handlers';

export function createButtonSet() {
  const buttonSet = createHtmlElement('div', ['button-set']);
  const resetButton = createButton('reset-button', 'Reset Game');
  resetButton.addEventListener('click', resetButtonHandler);
  const saveButton = createButton('save-button', 'Save Game');
  saveButton.addEventListener('click', saveButtonHandler);
  const loadButton = createButton('load-button', 'Load Game');
  loadButton.setAttribute('disabled', '');
  loadButton.addEventListener('click', loadButtonHandler);
  const showSolutionButton = createButton('show-solution-button', 'Solution');
  showSolutionButton.addEventListener('click', showSolutionButtonHandler);

  buttonSet.append(resetButton);
  buttonSet.append(saveButton);
  buttonSet.append(loadButton);
  buttonSet.append(showSolutionButton);
  document.body.append(buttonSet);
}