console.log('hello, world!');

const GRID_DIMENSION = 32;
const CHALK_WHITE = '#FBF7F5';

let mouseDown = false;
document.body.addEventListener('mousedown', toggleMouseDown);
document.body.addEventListener('mouseup', toggleMouseDown);
// document.body.onmousedown = () => (mouseDown = true);
// document.body.onmouseup = () => (mouseDown = false);

function toggleMouseDown() {
  mouseDown = !mouseDown;
}

// get the grid wrapper element
const grid = document.getElementById('grid');

if (grid === null) {
  throw new Error('No element id: grid');
}

grid.style.gridTemplateColumns = `repeat(${GRID_DIMENSION}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${GRID_DIMENSION}, 1fr)`;

function initGrid() {
  for (let i = 0; i < GRID_DIMENSION * GRID_DIMENSION; i++) {
    // create a new grid item
    const gridEl = document.createElement('div');
    gridEl.classList.add('grid-item');
    gridEl.addEventListener('mouseover', colorGridItem);
    gridEl.addEventListener('mousedown', colorGridItem);
    grid?.appendChild(gridEl);
  }
}

function colorGridItem(e: Event) {
  if (e.type === 'mouseover' && !mouseDown) {
    return;
  } else {
    const gridEl = e.target as HTMLDivElement;
    gridEl.style.backgroundColor = CHALK_WHITE;
  }
}

initGrid();
