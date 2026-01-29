const container = document.createElement("div")
container.id = "container"

document.body.appendChild(container)

const gridXY = 16
const gridSquareWidth = '50px'
const fullGridSize = '960px'

container.style.height = fullGridSize
container.style.width = fullGridSize
container.style.margin = '0 auto'

for (let j = 0; j < gridXY; j++) {
    const gridDivY = document.createElement("div")
    gridDivY.className = 'gridBoxY'
    container.appendChild(gridDivY)
    gridDivY.style.display = 'flex';
    gridDivY.style.flexDirection = 'row';
    gridDivY.style.justifyContent = 'center';
    gridDivY.style.flex = '1 1 0';

    for (let i = 0; i < gridXY; i++) {
        const gridDivX = document.createElement("div");
        gridDivX.className = 'gridBox';
        gridDivY.appendChild(gridDivX);
        gridDivX.style.flex = '1 1 0';
        gridDivX.style.aspectRatio = '1 / 1';
        gridDivX.style.borderStyle = 'solid';
        gridDivX.style.borderWidth = '1px';
        gridDivX.style.textAlign = 'center';

    }}

container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'stretch'

const gridBoxes = document.querySelectorAll('.gridBox');

gridBoxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = 'black';
    });
});
