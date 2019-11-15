const container = document.createElement('div');
const gridSizeBtn = document.createElement('button');
const randomColorBtn = document.createElement('button');
const clearBtn = document.createElement('button');

let gridSize = 16;
let paintColor = '#000';

function init() {
  gridSizeBtn.textContent = 'Grid Size';
  clearBtn.textContent = 'Clear';

  container.classList.add('container');

  document.body.appendChild(gridSizeBtn);
  document.body.appendChild(clearBtn);
  document.body.appendChild(container);

  createGrid();
}

function createGrid() {
  for (let i = 0; i < gridSize ** 2; i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = '#fff';
    container.appendChild(div);
  }

  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}

function paint(e) {
  const target = e.target;
  target.style.backgroundColor = paintColor;
}

function removeGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createGrid();
}

container.addEventListener('mouseover', paint);

clearBtn.addEventListener('click', removeGrid);

gridSizeBtn.addEventListener('click', () => {
  gridSize = prompt('How many sqaures per side would you like on your new grid?');

  while (!(gridSize >= 16) || !(gridSize <= 64)) {
    gridSize = prompt('Please enter a number between 16 to 64')
  }

  removeGrid();
});

init();
