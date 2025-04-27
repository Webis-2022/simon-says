import { createHtmlElement } from '../html-element/html-element.js';
import { changeDifficultyLevel } from '../../utils/change-difficulty-level.js';

export function createSelectElement() {
  const difficultyLevel = createHtmlElement('div', 'difficulty-level');
  const label = createHtmlElement('label', 'label', 'Difficulty Level:');
  label.setAttribute('for', 'difficulty');
  const select = createHtmlElement('select', 'select');
  select.id = 'difficulty';
  select.addEventListener('change', changeDifficultyLevel);
  const easyOption = createHtmlElement('option', '', 'Easy');
  easyOption.value = '1';
  easyOption.selected = true;
  const mediumOption = createHtmlElement('option', '', 'Medium');
  mediumOption.value = '2';
  const hardOption = createHtmlElement('option', '', 'Hard');
  hardOption.value = '3';

  select.appendChild(easyOption);
  select.appendChild(mediumOption);
  select.appendChild(hardOption);
  difficultyLevel.append(label, select);
  return difficultyLevel;
}