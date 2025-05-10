import { getContextCanvas } from './get-context-canvas';

export function clearCell(target) {
  const ctx = getContextCanvas(target);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  if (target.classList.contains('square')) {
    target.classList.toggle('square', false);
  } else {
    target.classList.toggle('cross', false);
  }
}