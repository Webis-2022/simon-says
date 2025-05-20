import { clearCell } from './clear-cell';
import { getContextCanvas } from './get-context-canvas';

export function paintCross(target) {
  if (target.classList.contains('square')) {
    clearCell(target);
  }
  target.classList.toggle('cross', true);
  const ctx = getContextCanvas(target);
  ctx.moveTo(5, 5);
  ctx.lineTo(23, 23);
  ctx.stroke();

  ctx.moveTo(23, 5);
  ctx.lineTo(5, 23);
  ctx.stroke();
}