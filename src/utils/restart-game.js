import { createHeader } from '../components/header/header.js';
import { createMain } from '../components/main/main.js';

export function restartGame() {
  document.body.innerHTML = '';
  createHeader();
  createMain();
}