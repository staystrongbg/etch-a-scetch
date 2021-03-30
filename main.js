const gridContainer = document.querySelector('.grid-container');
const btn = document.querySelector('.btn');
//default grid onload
window.addEventListener('load', setDefaultGrid);

function setDefaultGrid() {
  setGridSize(16);
  drawGrid(16);
}

function setGridSize(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function drawGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-cell');
    gridContainer.appendChild(gridElement);
    gridElement.addEventListener(
      'mouseover',
      (changeColor = (e) => {
        let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        e.currentTarget.style.backgroundColor = color;
      })
    );
  }
}
//SET NEW GRID SIZE
btn.addEventListener('click', setNewSize);

function setNewSize() {
  let newSize = prompt('change size of the grid 1-100?');
  if (newSize < 1 || newSize > 100 || isNaN(newSize)) {
    alert('size should be a number between 1-100');
    newSize = 16;
    setDefaultGrid(newSize);
  }
  clearGrid();
  setGridSize(newSize);
  drawGrid(newSize);
}

function clearGrid() {
  const elements = [...gridContainer.childNodes];
  // console.log(elements);
  elements.forEach((ele) => {
    gridContainer.removeChild(ele);
  });
}
