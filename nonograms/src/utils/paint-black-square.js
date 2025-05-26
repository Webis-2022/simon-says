import { getContextCanvas } from './get-context-canvas';
import { clearCell } from './clear-cell';
import { addUserAnswersToArray } from './create-user-answers-array';
import { startTimer } from './start-timer';

export function paintBlackSquare(target) {
  if (target.classList.contains('cross')) {
    clearCell(target);
  }
  const ctx = getContextCanvas(target);
  if (ctx === undefined) {
    return;
  }
  ctx.fillRect(5, 5, 20, 20);
  startTimer();
  target.classList.toggle('square', true);
  addUserAnswersToArray();
}