import { checkUserInput } from './check-user-input.js';
import { savedRandomButtonsArr } from './run-game.js';
export let clickedButtonsArr = [];

// export function clickVirtualKeyboardButton(resolve) {
//   const items = document.querySelectorAll('.item');
//   [...items].forEach((item) => {
//     item.addEventListener('click', async (event) => {
//       const target = event.target;
//       clickedButtonsArr.push(target.textContent);
//       const setInterval1 = setInterval(() => {
//         target.style.backgroundColor = 'green';
//         clearInterval(setInterval1);
//       }, 500);
//       const setInterval2 = setInterval(() => {
//         target.style.backgroundColor = '#f0f0f0';
//         clearInterval(setInterval2);
//       }, 900);
//       await checkUserInput(savedRandomButtonsArr, clickedButtonsArr, resolve);
//     });
//   });
// }

export function clickVirtualKeyboardButton(resolve) {
  const items = document.querySelectorAll('.item');

  [...items].forEach((item) => {
    item.addEventListener('click', async (event) => {
      const target = event.target;
      clickedButtonsArr.push(target.textContent);

      await new Promise((resolve) => {
        target.style.backgroundColor = 'green';

        setTimeout(() => {
          target.style.backgroundColor = '#f0f0f0';
          resolve();
        }, 900);
      });

      await checkUserInput(savedRandomButtonsArr, clickedButtonsArr, resolve);
    });
  });
}



