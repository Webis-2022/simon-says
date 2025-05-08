import { savedIndexArr } from './run-game.js';
import { highlightButton } from './highlight-button.js';

export async function repeatSequence() {
  console.log('---', savedIndexArr);
  for (let i = 0; i < savedIndexArr.length; i += 1) {
    await highlightButton(savedIndexArr[i]);
  }
};