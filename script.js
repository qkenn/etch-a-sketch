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
    e.target.style.backgroundColor = 'black';
  });
}

// re-render grid
gridChangeBtn.addEventListener('click', () => {
  getGridSize();
});
