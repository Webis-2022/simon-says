import { getContextCanvas } from './get-context-canvas';
import { clearCell } from './clear-cell';

export function paintBlackSquare(target) {
  if (target.classList.contains('cross')) {
    clearCell(target);
  }
  const ctx = getContextCanvas(target);
  ctx.fillRect(10, 10, 30, 30);
  target.classList.toggle('square', true);
  setTimeout(() => {
    const allCanvasElements = document.querySelectorAll('.canvas');
    console.log(allCanvasElements);
    const arr = [];
    allCanvasElements.forEach((item, index) => {
      if (item.classList.contains('square')) {
        arr.push(index);
      }
    });
    console.log('Array', arr);
  }, 300);
}