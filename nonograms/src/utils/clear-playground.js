import { clearCell } from './clear-cell';

export function clearPlayground() {
  const playgroundCells = document.querySelectorAll('.canvas');
  playgroundCells.forEach((cell) => {
    console.log(cell);
    clearCell(cell);
  })
}