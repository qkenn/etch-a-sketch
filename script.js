const gridContainer = document.getElementById('grid-container');
const divs = document.querySelector('.item');

for (let i = 0; i < 50 * 50; i++) {
  const gridItem = document.createElement('div');
  gridItem.className = 'item';
  gridContainer.appendChild(gridItem);
}

gridContainer.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = 'black';
});
