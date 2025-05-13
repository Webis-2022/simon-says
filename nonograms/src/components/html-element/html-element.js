// export function createHtmlElement(tag, className1 = '', className2 = '',  text = '') {
//   const element = document.createElement(tag);
//   if (className1 && className2) {
//     element.classList.add(className1, className2);
//   } else if (className1) {
//     element.classList.add(className1);
//   }
//   if (typeof text === 'string' && text.length > 0) {
//     element.textContent = text;
//   }
//   return element;
// }

export function createHtmlElement(tag, classNames = [], text = '') {
  const element = document.createElement(tag);
  classNames.forEach(cls => {
    if (cls) element.classList.add(cls);
  });
  if (typeof text === 'string' && text.length > 0) {
    element.textContent = text;
  }
  return element;
}
