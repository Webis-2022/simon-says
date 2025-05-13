import { createStartPage } from './views/start-page/start-page';
import { clearPage } from './utils/clear-page';
import {
  createTemplateSizeSelectionPage,
  fieldSize,
} from './views/template-size-selection-page/template-size-selection-page';
import { createTemplateSelectionPage } from './views/template-selection-page/template-selection-page';
import { createGamePage } from './views/game-page/game-page';
import './assets/css/styles.css';

createStartPage();

function renderRoute(path, buttonNumber, defaultFieldSize = '5x5') {
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

document.addEventListener('DOMContentLoaded', () => {
  const route = window.location.pathname;
  renderRoute(route);
})

export function navigateTo(route, buttonNumber = '') {
  // eslint-disable-next-line no-restricted-globals
  history.pushState({}, '', route);
  renderRoute(route, buttonNumber, fieldSize);
}

window.addEventListener('popstate', () => {
  clearPage();
  renderRoute(window.location.pathname, fieldSize);
})


