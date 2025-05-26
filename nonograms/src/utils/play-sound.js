import leftButtonClick from '../assets/audio/fill-cell.mp3';

export function playSoundForBlackSquare(isSoundEnabled) {
  console.log('+++++', isSoundEnabled);
  if (isSoundEnabled === true) {
    const blackSquareSound = new Audio(leftButtonClick);
    blackSquareSound.play();
  }
}
