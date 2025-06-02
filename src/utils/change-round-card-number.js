export function changeRoundCardNumber() {
  let roundNumberCard = document.querySelector('.round-number__card');
  roundNumberCard.textContent = String(Number(roundNumberCard.textContent) + 1);
}