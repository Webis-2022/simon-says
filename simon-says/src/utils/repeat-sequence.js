import { savedRandomButtonsArr } from './run-game.js';
import { highlightButton } from './highlight-button.js';

export async function repeatSequence() {
  for (let i = 0; i < savedRandomButtonsArr.length; i += 1) {
    await highlightButton(savedRandomButtonsArr[i]);
  }
};