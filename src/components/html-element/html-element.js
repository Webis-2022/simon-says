export function createHtmlElement(tag, className = '', text = '') {
  const element = document.createElement(tag);
  if (className) {
    element.classList.add(className);
  }
  if (typeof text === 'string' && text.length > 0) {
    element.textContent = text;
  }
  return element;
}
