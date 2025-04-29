import { createHeader } from './components/header/header.js';
import { createMain } from './components/main/main.js';
import { createKeyboardButton } from './components/keyboard-section/keyboard-button.js';
import { clickVirtualKeyboardButton } from './utils/click-virtual-keyboard-button.js';

createHeader();
createMain();
// document.addEventListener('DOMContentLoaded', clickVirtualKeyboardButton);

// document.addEventListener('DOMContentLoaded', () => {
//   const items = document.querySelectorAll('.item');
//   [...items].forEach((item) => {
//     item.addEventListener('click', (event) => {
//       const target = event.target;
//       const setInterval1 = setInterval(() => {
//         target.style.backgroundColor = 'green';
//         clearInterval(setInterval1);
//       }, 1000)
//       const setInterval2 = setInterval(() => {
//         target.style.backgroundColor = '#f0f0f0';
//         clearInterval(setInterval2);
//       }, 2000)
//     })
//   })
// })
