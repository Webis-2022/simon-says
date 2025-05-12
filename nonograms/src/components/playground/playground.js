import { createHtmlElement } from '../html-element/html-element';
import { paintBlackSquare } from '../../utils/paint-black-square';
import { clearCell } from '../../utils/clear-cell';
import { paintCross } from '../../utils/paint-cross';
import './playground.css';

const playground = createHtmlElement('div', 'playground');

function createCell(cellClassNames) {
  const cell = createHtmlElement('div', cellClassNames);
  const canvas = createHtmlElement('canvas', 'canvas');
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
    const { target } = event;
    if (target.classList.contains('cross')) {
      clearCell(target);
    } else {
      paintCross(target);
    }
  });
  setTimeout(() => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }, 300);
  playground.append(cell);
  return playground;
}

export function createPlayground() {
  const playgroundWrapper = createHtmlElement('div', 'playground-wrapper');
  let playgroundElement;
  for (let i = 0; i <= 35; i += 1) {
    if (i === 0) {
      playgroundElement = createCell('cell', 'header-empty');
    } else if (i > 0 && i < 6) {
      playgroundElement = createCell('cell', 'header-col');
    } else if (i % 6 === 0) {
      playgroundElement = createCell('cell', 'header-row');
    } else {
      playgroundElement = createCell('cell');
    }
  }
  playgroundWrapper.append(playgroundElement);
  document.body.append(playgroundWrapper);
}
