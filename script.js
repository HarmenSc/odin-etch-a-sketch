const container = document.createElement("div")
container.id = "container"

document.body.appendChild(container)

const gridXY = 16

for (let j = 0; j < gridXY; j++) {
    const gridDivY = document.createElement("div")
    gridDivY.className = 'gridBoxY'
    container.appendChild(gridDivY)
    for (let i = 0; i < gridXY; i++) {
        const gridDivX = document.createElement("div");
        gridDivX.className = 'gridBox';
        gridDivX.textContent = `${i + 1}, ${j + 1}`;
        gridDivY.appendChild(gridDivX)
    }}
