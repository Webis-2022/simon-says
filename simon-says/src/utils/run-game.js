import {
  alphabetUpper,
  numbers,
} from '../components/keyboard-section/keyboard-button.js';
import { highlightButton } from './highlight-button.js';
import { clickedButtonsArr } from './click-virtual-keyboard-button.js';
import { checkUserInput } from './check-user-input.js';
import { clickVirtualKeyboardButton } from './click-virtual-keyboard-button.js';

export let savedRandomButtonsArr = [];

export async function runGame(difficultyLevel) {
  if (difficultyLevel === 'Easy') {
    let i = 2;
    while (i <= 5) {
      let randomButtonsArr = [];
      for (let j = 1; j <= i; j += 1) {
        const index = Math.floor(Math.random() * 10);
        const randomButton = numbers[index];
        randomButtonsArr.push(randomButton);
        savedRandomButtonsArr = randomButtonsArr;
        console.log('---', savedRandomButtonsArr);
        await highlightButton(randomButton);
      }
      await new Promise((resolve) => {
        clickedButtonsArr.length = 0;
        console.log('3', clickedButtonsArr);
        clickVirtualKeyboardButton(resolve);
      });
      i += 2;
    }
  }
}
