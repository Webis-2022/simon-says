import { getContextCanvas } from './get-context-canvas';
import { clearCell } from './clear-cell';
import { addUserAnswersToArray } from './create-user-answers-array';

export function paintBlackSquare(target) {
  if (target.classList.contains('cross')) {
    clearCell(target);
  }
  const ctx = getContextCanvas(target);
  ctx.fillRect(5, 5, 20, 20);
  target.classList.toggle('square', true);
  addUserAnswersToArray();
}