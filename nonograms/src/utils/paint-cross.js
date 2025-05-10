import { clearCell } from './clear-cell';
import { getContextCanvas } from './get-context-canvas';

export function paintCross(target) {
  console.log(target);
  if (target.classList.contains('square')) {
    clearCell(target);
  }
  target.classList.toggle('cross', true);
  const ctx = getContextCanvas(target);
  ctx.moveTo(10, 10);
  ctx.lineTo(37, 37);
  ctx.stroke();

  ctx.moveTo(37, 10);
  ctx.lineTo(10, 37);
  ctx.stroke();
}