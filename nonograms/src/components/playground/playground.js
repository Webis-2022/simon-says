import { createHtmlElement } from '../html-element/html-element';
import { paintBlackSquare } from '../../utils/paint-black-square';
import { clearCell } from '../../utils/clear-cell';
import { paintCross } from '../../utils/paint-cross';
import './playground.css';


export function createPlayground() {
  const playgroundWrapper = createHtmlElement('div', 'playground-wrapper');
  const playground = createHtmlElement('div', 'playground');

  for (let i = 0; i < 25; i += 1) {
    const cell = createHtmlElement('div', 'cell');
    const canvas = createHtmlElement('canvas', 'canvas');
    cell.append(canvas);
    playground.append(cell);
    cell.addEventListener('click', (event) => {
      const { target } = event;
      console.log(target);
      if (target.classList.contains('square')) {
        clearCell(target);
      } else {
        paintBlackSquare(target);
      }
    });
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
  }
  playgroundWrapper.append(playground);
  document.body.append(playgroundWrapper);
}
