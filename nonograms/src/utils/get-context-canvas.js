
export function getContextCanvas(target) {
  // eslint-disable-next-line prefer-destructuring
  // const target = event.target;
  const canvas = target.closest('canvas');
  const ctx = canvas.getContext('2d');
  return ctx;
}