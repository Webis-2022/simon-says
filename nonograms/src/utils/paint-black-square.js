import { getContextCanvas } from './get-context-canvas';
import { clearCell } from './clear-cell';
import { addUserAnswersToArray } from './create-user-answers-array';
// eslint-disable-next-line import/no-cycle
import { clearTimer, startTimer } from './timer';
import { checkIfUserWin } from './checkIfUserWin';

export function paintBlackSquare(target, isTimerStarted) {
  if (target.classList.contains('cross')) {
    clearCell(target);
  }
  const ctx = getContextCanvas(target);
  if (ctx === undefined) {
    return;
  }

  const canvasWidth = ctx.canvas.attributes[1].textContent;
  const x = 2;
  const y = x;
  ctx.fillRect(x, y, canvasWidth - x * y, canvasWidth - x * y);

  target.classList.toggle('square', true);
  const userAnswersArray = addUserAnswersToArray();
  checkIfUserWin();
  console.log(isTimerStarted);
  if (isTimerStarted) return;
  startTimer();
}