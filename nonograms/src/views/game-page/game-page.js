import { createHeader } from '../../components/header/header';
import { createPlayground } from '../../components/playground/playground';
import { addHintsToPlayground } from '../../utils/add-hints-to-playground';
import { makeBackgroundWhite } from '../../utils/make-background-color-white';
import { clearPage } from '../../utils/clear-page';
import { createButtonSet } from '../../components/button-set/button-set';

export function createGamePage(buttonNumber, fieldSize) {
  clearPage();
  makeBackgroundWhite();
  createHeader();
  createButtonSet();
  createPlayground(fieldSize);
  addHintsToPlayground(buttonNumber, fieldSize);
}
