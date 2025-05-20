import { createHtmlElement } from '../html-element/html-element';
import { paintBlackSquare } from '../../utils/paint-black-square';
import { clearCell } from '../../utils/clear-cell';
import { paintCross } from '../../utils/paint-cross';
import './playground.css';

const playground = createHtmlElement('div', ['playground']);

function createCell(cellClassNames) {
  const cell = createHtmlElement('div', cellClassNames);
  const canvas = createHtmlElement('canvas', ['canvas']);
  if (
    !cell.classList.contains('header-row') &&
    !cell.classList.contains('header-col') &&
    !cell.classList.contains('header-empty')
  ) {
    cell.append(canvas);
    cell.addEventListener('click', (event) => {
      const { target } = event;
      if (target.classList.contains('square')) {
        clearCell(target);
      } else {
        paintBlackSquare(target);
      }
    });
  }
  cell.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    if (
      !cell.classList.contains('header-row') &&
      !cell.classList.contains('header-col') &&
      !cell.classList.contains('header-empty')
    ) {
      const { target } = event;
      if (target.classList.contains('cross')) {
        clearCell(target);
      } else {
        paintCross(target);
      }
    }
  });
  setTimeout(() => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }, 300);
  playground.append(cell);
  return playground;
}

export function createPlayground(fieldSize) {
  if (fieldSize === undefined) {
    // eslint-disable-next-line no-param-reassign
    fieldSize = localStorage.getItem('fieldSize');
  }
  console.log('F2', fieldSize);
  const playgroundWrapper = createHtmlElement('div', ['playground-wrapper']);
  playground.innerHTML = '';
  let playgroundElement;
  let cellsCount;
  let headerColCount;
  let headerRowCount;
  const cellSize = 'minmax(auto, 25%)';

  if (fieldSize === '5x5') {
    cellsCount = 35;
    headerColCount = 6;
    headerRowCount = 6;
  } else if (fieldSize === '10x10') {
    cellsCount = 120;
    headerColCount = 11;
    headerRowCount = 11;
  } else {
    cellsCount = 255;
    headerColCount = 16;
    headerRowCount = 16;
  }
  for (let i = 0; i <= cellsCount; i += 1) {
    if (i === 0) {
      playgroundElement = createCell(['cell', 'header-empty']);
    } else if (i > 0 && i < headerColCount) {
      playgroundElement = createCell(['cell', 'header-col']);
    } else if (i % headerRowCount === 0) {
      playgroundElement = createCell(['cell', 'header-row']);
    } else {
      playgroundElement = createCell(['cell', 'play']);
    }
  }
  setTimeout(() => {
    const cells = document.querySelectorAll('.play');
    console.log('length', cells.length);
    for (let j = 4; j <= cells.length - 1; j += 5) {
      cells[j].style.borderRight = '3px solid #000';
    }
    for (let k = 60; k <= cells.length - 1; k += 75) {
      for (let l = k; l < k + 15; l += 1) {
        cells[l].style.borderBottom = '3px solid #000';
      }
    }
  }, 100);
  playground.style.gridTemplateColumns = `repeat(${headerColCount}, ${cellSize})`;
  playground.style.gridTemplateRows = `repeat(${headerRowCount}, ${cellSize})`;
  playgroundWrapper.append(playgroundElement);
  document.body.append(playgroundWrapper);
}
