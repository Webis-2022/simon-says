const fieldSize = localStorage.getItem('fieldSize').split('x')[0];
console.log('---', fieldSize);

export function createUserAnswersArray() {
  const arrayOfArrays = [];
  for (let i = 0; i < 5; i += 1) {
    const arr = new Array(fieldSize).fill(false);
    arrayOfArrays.push(arr);
  }
  return arrayOfArrays;
}

export function addUserAnswersToArray() {
  const allCanvasElements = document.querySelectorAll('.canvas');
  const userAnswersArray = createUserAnswersArray();
  allCanvasElements.forEach((item, index) => {
    if (item.classList.contains('square')) {
      const row = Math.floor(index / fieldSize);
      const col = index % fieldSize;
      userAnswersArray[row][col] = true;
    }
  });
  console.log('Array', userAnswersArray);
}