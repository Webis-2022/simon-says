export function startTimer() {
  const timer = document.querySelector('.timer-value');
  let counter = 0;
  let minutes = `0${0}`;
  setInterval(() => {
    counter += 1;
    if (counter > 59) {
      minutes = Number(minutes) + 1;
      minutes = Number(minutes) < 10 ? `0${Number(minutes)}` : Number(minutes);
      counter = 0;
    }
    const seconds = counter < 10 ? `0${counter}` : counter;
    timer.textContent = `${minutes}:${seconds}`;
  }, 1000);
}