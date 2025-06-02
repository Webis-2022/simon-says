import {
  alphabetUpper,
  numbers,
} from '../components/keyboard-section/keyboard-button.js';
import { highlightButton } from './highlight-button.js';
import { clickedButtonsArr } from './click-keyboard-button.js';
import {
  clickVirtualKeyboardButton,
  clickRealKeyboardButton,
} from './click-keyboard-button.js';
import { toggleDisabledAttribute } from './toggle-disabled-attribute.js';

export let savedRandomButtonsArr = [];
export let savedIndexArr = [];

export async function runGame(difficultyLevel) {
  let array = [];
  let arrayLength;
  if (difficultyLevel === 'Easy') {
    array = numbers;
    arrayLength = 10;
  } else if (difficultyLevel === 'Medium') {
    array = alphabetUpper;
    arrayLength = 26;
  } else {
    array = [...numbers, ...alphabetUpper];
    arrayLength = 36;
  }
  let i = 2;
  while (i <= 10) {
    if (i > 10) break;
    let randomButtonsArr = [];
    let indexArr = [];
    for (let j = 1; j <= i; j += 1) {
      const index = Math.floor(Math.random() * arrayLength);
      indexArr.push(index);
      const randomButton = array[index];
      randomButtonsArr.push(randomButton);
      savedRandomButtonsArr = randomButtonsArr;
      savedIndexArr = indexArr;
      await highlightButton(index);
    }
    toggleDisabledAttribute('.new-game__button');
    toggleDisabledAttribute('.repeat-sequence__button');
    await new Promise((resolve) => {
      clickedButtonsArr.length = 0;
      clickVirtualKeyboardButton(resolve);
      clickRealKeyboardButton(resolve);
    });
    i += 2;
  }
}
