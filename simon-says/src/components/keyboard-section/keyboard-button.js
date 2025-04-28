import { createHtmlElement } from '../html-element/html-element.js';
export const alphabetUpper = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
export const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export function createGridItem(gridItemText) {
  const gridItem = createHtmlElement('div', 'item', gridItemText);
  return gridItem;
}

export function createKeyboardButton(gridContainer) {
  for (let i = 0; i < numbers.length; i += 1) {
    gridContainer.append(createGridItem(numbers[i]));
  }
}
