import { addUserAnswersToArray } from './create-user-answers-array';
import { nonograms } from '../assets/nonograms';
import { createModalWindow } from '../components/modal-window/modal-window';
// eslint-disable-next-line import/no-cycle
import { clearTimer } from './timer';
import { saveDataForResultTable } from './save-data-for-result-table';

export function checkIfUserWin() {
  const fieldSize = localStorage.getItem('fieldSize');
  const templateNumber = localStorage.getItem('buttonNumber');
  const userAnswersArray = addUserAnswersToArray();
  const correctAnswer = nonograms[fieldSize][templateNumber].answers;
  const gameWin = userAnswersArray.every((subArr, index1) => {
    return subArr.every((answer, index2) => {
      return answer === correctAnswer[index1][index2];
    });
  });
  if (gameWin) {
    createModalWindow();
    const time = document.querySelector('.timer-value').textContent;
    clearTimer(time);
    saveDataForResultTable(time);
  }
}