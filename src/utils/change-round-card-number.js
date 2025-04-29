export function changeRoundCardNumber() {
  let roundNumberCard = document.querySelector('.round-number__card');
  console.log(roundNumberCard.textContent);
  roundNumberCard.textContent = String(Number(roundNumberCard.textContent) + 1);
}