import { createHtmlElement } from '../html-element/html-element.js';
import { createButton } from '../button/button.js';
import { repeatSequence } from '../../utils/repeat-sequence.js';
import { restartGame } from '../../utils/restart-game.js';

export function createButtonsSet(firstButton, secondButton) {
  const controlSectionElements = document.querySelector(
    '.control-section__elements'
  );
  const buttonsSet = createHtmlElement('div', 'buttons-set');
  const firstBtn = createButton(firstButton);
  firstBtn.addEventListener('click', repeatSequence);
  const secondBtn = createButton(secondButton);
  secondBtn.addEventListener('click', restartGame);

  buttonsSet.append(firstBtn, secondBtn);
  controlSectionElements.insertAdjacentElement('beforeend', buttonsSet);


  // const repeatSequenceBtn = document.createElement('button');
  // repeatSequenceBtn.classList.add('repeat-sequence__button', 'btn', 'btn-warning');
  // repeatSequenceBtn.textContent = 'Repeat Sequence';
  // buttonsSet.appendChild(repeatSequenceBtn);

  // const newGameBtn = document.createElement('button');
  // newGameBtn.classList.add('new-game', 'btn', 'btn-success');
  // newGameBtn.textContent = 'New Game';
  // buttonsSet.appendChild(newGameBtn);


  // document.querySelector('.repeat-sequence__button').remove();
  // const nextRoundBtn = document.createElement('button');
  // nextRoundBtn.classList.add('next-round__button', 'btn', 'btn-warning');
  // nextRoundBtn.textContent = 'Next';
  // buttonsSet.insertAdjacentElement('afterbegin', nextRoundBtn);
}