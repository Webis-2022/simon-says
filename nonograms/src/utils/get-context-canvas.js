
export function getContextCanvas(target) {
  // eslint-disable-next-line prefer-destructuring
  // const target = event.target;
  const canvas = target.closest('canvas');
  if (canvas === null) {
    return;
  }
  const ctx = canvas.getContext('2d');
  // eslint-disable-next-line consistent-return
  return ctx;
}