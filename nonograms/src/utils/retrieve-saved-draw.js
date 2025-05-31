/* eslint-disable no-use-before-define */
import { paintBlackSquare } from './paint-black-square';
import { timerState } from '../components/playground/playground';


export function retrieveSavedDraw() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const { userAnswersArray } = userData;
  const arrayOfArrays = createArrayOfArrays();
  drawImage(arrayOfArrays, userAnswersArray);
}

export function createArrayOfArrays() {
  const playgroundCells = document.querySelectorAll('.canvas');
  const cellsInRow = localStorage.getItem('fieldSize').split('x')[0];
  const newArr = [];
  for (let i = 0; i < playgroundCells.length; i += Number(cellsInRow)) {
    const subArr = [];
    for (let j = i; j < playgroundCells.length / Number(cellsInRow) + i; j += 1) {
      subArr.push(playgroundCells[j]);
    }
    newArr.push(subArr);
  }
  return newArr;
}

export function drawImage(arrayOfCanvasCells, answersArray) {
  for (let i = 0; i < answersArray.length; i += 1) {
    for (let j = 0; j < answersArray[i].length; j += 1) {
      if (answersArray[i][j] === true) {
        const row = i;
        const index = j;
        paintBlackSquare(arrayOfCanvasCells[row][index], timerState.isTimerStarted);
      }
    }
  }
}