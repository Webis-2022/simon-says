export function toggleDisabledAttribute(elementClass) {
  const element = document.querySelector(elementClass);
  element.toggleAttribute('disabled');
}