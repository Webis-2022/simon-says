export function scrollToElement(className) {
  const element = document.querySelector(className);
  const y = element.getBoundingClientRect().top + window.scrollY;
  console.log('+++', y);
  window.scrollTo({
    top: 1000,
    behavior: 'smooth',
  });
}
