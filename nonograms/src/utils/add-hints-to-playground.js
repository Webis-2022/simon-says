import { nonograms } from '../assets/nonograms';

export function addHintsToPlayground() {
  const allColumns = document.querySelectorAll('.header-col');
  const allRows = document.querySelectorAll('.header-row');
  // eslint-disable-next-line prefer-destructuring
  const columnHints = nonograms['5x5'][0].columnHints;
  // eslint-disable-next-line prefer-destructuring
  const rowHints = nonograms['5x5'][0].rowHints;
  console.log('===', rowHints);
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
