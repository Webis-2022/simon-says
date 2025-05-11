export function createUserAnswersArray() {
  const arrayOfArrays = [];
  for (let i = 0; i < 5; i += 1) {
    const arr = new Array(5).fill(false);
    arrayOfArrays.push(arr);
  }
  return arrayOfArrays;
}

export function addUserAnswersToArray() {
  const allCanvasElements = document.querySelectorAll('.canvas');
  const userAnswersArray = createUserAnswersArray();
  allCanvasElements.forEach((item, index) => {
    if (item.classList.contains('square')) {
      const row = Math.floor(index / 5);
      const col = index % 5;
      userAnswersArray[row][col] = true;
    }
  });
  console.log('Array', userAnswersArray);
}