export function scrollToElement(className) {
  const element = document.querySelector(className);
  const y = element.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: y,
    behavior: 'smooth',
  });
}
