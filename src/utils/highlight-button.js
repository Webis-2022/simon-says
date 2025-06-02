export async function highlightButton(index) {
  const items = document.querySelectorAll('.item');
  items[index].style.backgroundColor = '#f8ce9f';

  await new Promise((resolve) => setTimeout(resolve, 1000));

  items[index].style.backgroundColor = '#f0f0f0';

  await new Promise((resolve) => setTimeout(resolve, 300));
}