const container = document.createElement("div")
container.id = "container"

document.body.appendChild(container)

const gridXY = 16
const gridSquareWidth = '50px'

for (let j = 0; j < gridXY; j++) {
    const gridDivY = document.createElement("div")
    gridDivY.className = 'gridBoxY'
    container.appendChild(gridDivY)
    gridDivY.style.display = 'flex';
    gridDivY.style.flexDirection = 'row';
    gridDivY.style.justifyContent = 'center'

    for (let i = 0; i < gridXY; i++) {
        const gridDivX = document.createElement("div");
        gridDivX.className = 'gridBox';
        gridDivX.textContent = `${i + 1}, ${j + 1}`;
        gridDivY.appendChild(gridDivX)
        gridDivX.style.height = gridSquareWidth
        gridDivX.style.width = gridSquareWidth
        gridDivX.style.borderStyle = 'solid'
        gridDivX.style.borderWidth = '1px'
        gridDivX.style.textAlign = 'center'

    }}

container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center'