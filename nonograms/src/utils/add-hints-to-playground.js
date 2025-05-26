import { nonograms } from '../assets/nonograms';

export function addHintsToPlayground(buttonNumber, fieldSize) {
  if (buttonNumber === undefined || fieldSize === undefined) {
    // eslint-disable-next-line no-param-reassign
    buttonNumber = localStorage.getItem('buttonNumber');
    // eslint-disable-next-line no-param-reassign
    fieldSize = localStorage.getItem('fieldSize');
  }
  // localStorage.setItem('buttonNumber', buttonNumber);
  // localStorage.setItem('fieldSize', fieldSize);
  const allColumns = document.querySelectorAll('.header-col');
  const allRows = document.querySelectorAll('.header-row');
  // eslint-disable-next-line prefer-destructuring
  const columnHints = nonograms[fieldSize][Number(buttonNumber)].columnHints;
  // eslint-disable-next-line prefer-destructuring
  const rowHints = nonograms[fieldSize][Number(buttonNumber)].rowHints;
  for (let i = 0; i < columnHints.length; i += 1) {
    for (let j = 0; j < columnHints[i].length; j += 1) {
      allColumns[i].innerHTML += `<span>${columnHints[i][j]}</span>`;
    }
  }
  for (let k = 0; k < rowHints.length; k += 1) {
    for (let l = 0; l < rowHints[k].length; l += 1) {
      allRows[k].innerHTML += `<span>${rowHints[k][l]}</span>`;
    }
  }
}
