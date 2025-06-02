import {
  alphabetUpper,
  numbers,
  createGridItem,
} from '../components/keyboard-section/keyboard-button.js';

export function changeDifficultyLevel() {
  const selectInput = document.querySelector('.select');
  const selectInputNumber =
    selectInput.options[selectInput.selectedIndex].textContent;
  const gridContainer = document.querySelector('.grid-container');
  const allCharsArray = [...numbers, ...alphabetUpper];

  gridContainer.innerHTML = '';

  if (selectInputNumber === 'Easy') {
    for (let i = 0; i < numbers.length; i += 1) {
      gridContainer.append(createGridItem(numbers[i]));
    }
  } else if (selectInputNumber === 'Medium') {
    for (let i = 0; i < alphabetUpper.length; i += 1) {
      gridContainer.append(createGridItem(alphabetUpper[i]));
    }
  } else {
    for (let i = 0; i < allCharsArray.length; i += 1) {
      gridContainer.append(createGridItem(allCharsArray[i]));
    }
  }
}