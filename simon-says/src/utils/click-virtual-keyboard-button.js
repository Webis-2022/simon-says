import { checkUserInput } from './check-user-input.js';
import { savedRandomButtonsArr } from './run-game.js';
export let clickedButtonsArr = [];

export function clickVirtualKeyboardButton(resolve) {
  const items = document.querySelectorAll('.item');

  [...items].forEach((item) => {
    item.addEventListener('click', async (event) => {
      const target = event.target;
      clickedButtonsArr.push(target.textContent);

      await new Promise((resolve) => {
        target.style.backgroundColor = '#f8ce9f';

        setTimeout(() => {
          target.style.backgroundColor = '#f0f0f0';
          resolve();
        }, 900);
      });

      await checkUserInput(savedRandomButtonsArr, clickedButtonsArr, resolve);
    });
  });
}
