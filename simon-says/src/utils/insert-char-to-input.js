export function insertCharToInput(char) {
  const textInput = document.querySelector('.sequence-input');
  textInput.value += char;
}