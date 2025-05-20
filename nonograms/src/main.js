import { createStartPage } from './views/start-page/start-page';
import { clearPage } from './utils/clear-page';
import {
  createTemplateSizeSelectionPage,
  // fieldSize,
} from './views/template-size-selection-page/template-size-selection-page';
import { createTemplateSelectionPage } from './views/template-selection-page/template-selection-page';
import { createGamePage } from './views/game-page/game-page';
import './assets/css/styles.css';

createStartPage();

function renderRoute(path, buttonNumber, defaultFieldSize) {
  clearPage();
  setTimeout(() => {
    switch (path) {
      case '/template-size-selection': {
        createTemplateSizeSelectionPage();
        break;
      }
      case '/template-selection': {
        createTemplateSelectionPage(defaultFieldSize);
        break;
      }
      case '/': {
        createStartPage();
        break;
      }
      case '/game': {
        createGamePage(buttonNumber, defaultFieldSize);
        break;
      }
      default: {
        console.log('404');
        // createPage404();
      }
    }
  }, 400);
}

document.addEventListener('DOMContentLoaded', (_, buttonNumber, fieldSize) => {
  const route = window.location.pathname;
  renderRoute(route, buttonNumber, fieldSize);
})

export function navigateTo(route, buttonNumber, size) {
  // eslint-disable-next-line no-restricted-globals
  history.pushState({}, '', route);
  renderRoute(route, size, buttonNumber);
}

window.addEventListener('popstate', (_, buttonNumber, fieldSize) => {
  clearPage();
  renderRoute(window.location.pathname, buttonNumber, fieldSize);
})


