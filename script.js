const resetButton = document.createElement("button")

resetButton.style.margin = '0 auto'
resetButton.textContent = "Create Grid"

const container = document.createElement("div")
container.id = "container"

document.body.appendChild(container)
container.appendChild(resetButton)

let gridDimension = 16

resetButton.addEventListener("click", () => {
    gridDimension = prompt("Enter grid dimension:")
    console.log(gridDimension)
    createGrid(gridDimension)
})


const gridSquareWidth = '50px'
const fullGridSize = '720px'

container.style.height = fullGridSize
container.style.width = fullGridSize
container.style.margin = '0 auto'

function createGrid(gridDimension) {
    document.querySelectorAll('.gridBoxY').forEach(el => el.remove());

    for (let j = 0; j < gridDimension; j++) {
        const gridDivY = document.createElement("div")
        gridDivY.className = 'gridBoxY'
        container.appendChild(gridDivY)
        gridDivY.style.display = 'flex';
        gridDivY.style.flexDirection = 'row';
        gridDivY.style.justifyContent = 'center';
        gridDivY.style.flex = '1 1 0';

        for (let i = 0; i < gridDimension; i++) {
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
}
