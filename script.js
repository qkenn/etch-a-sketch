const gridContainer = document.getElementById('grid-container');
const gridChangeBtn = document.getElementById('change-grid');

// initial grid render
renderGrid(40);

function getGridSize() {
  const gridSize = window.prompt('Enter grid size', 30);

  if (isNaN(+gridSize) && !gridSize) return;

  renderGrid(gridSize);
}

function renderGrid(gridSize) {
  if (!gridSize) return;

  gridContainer.innerHTML = '';

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'item';

    gridItem.style.width = `${800 / gridSize - 2}px`;
    gridItem.style.heigh = `${800 / gridSize - 2}px`;

    gridContainer.appendChild(gridItem);
  }

  changeGridColor();
}

function changeGridColor() {
  gridContainer.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = generateRandomColor();
  });
}

// re-render grid
gridChangeBtn.addEventListener('click', () => {
  getGridSize();
});

function generateRandomColor() {
  const randomInt = Math.floor(Math.random() * 5) + 1;

  let randomColor;

  switch (true) {
    case randomInt == 1:
      randomColor = '#2a9d8f';
      break;
    case randomInt == 2:
      randomColor = '#e9c46a';
      break;
    case randomColor == 3:
      randomColor = '#f4a261';
      break;
    case randomColor == 4:
      randomColor = '#e76f51';
      break;
    case randomColor == 5:
      randomColor = '#669bbc';
      break;
    default:
      randomColor = '#E2786F';
  }

  return randomColor;
}
