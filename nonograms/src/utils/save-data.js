import { addUserAnswersToArray } from './create-user-answers-array';

export function saveData() {
  localStorage.removeItem('userAnswersArray');
  const userAnswersArray = addUserAnswersToArray();
  localStorage.setItem('userAnswersArray', JSON.stringify(userAnswersArray));
}