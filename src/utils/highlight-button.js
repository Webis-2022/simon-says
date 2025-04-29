// export function highlightButton(index) {
//   return new Promise((resolve) => {
//     const items = document.querySelectorAll('.item');
//     items[index].style.backgroundColor = 'green';
//     setTimeout(() => {
//       items[index].style.backgroundColor = '#f0f0f0';
//       setTimeout(() => {
//         resolve();
//       }, 300);
//     }, 1000);
//   });
// };

export async function highlightButton(index) {
  const items = document.querySelectorAll('.item');
  items[index].style.backgroundColor = 'green';

  await new Promise((resolve) => setTimeout(resolve, 1000));

  items[index].style.backgroundColor = '#f0f0f0';

  await new Promise((resolve) => setTimeout(resolve, 300));
}