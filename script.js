const body = document.querySelector('body');

const mainDiv = document.createElement('div');
mainDiv.setAttribute('id', 'main-container');
body.appendChild(mainDiv);

const leftContainer = document.createElement('div');
const rightContainer = document.createElement('div');

leftContainer.classList.add('container');
rightContainer.classList.add('container');

body.insertBefore(leftContainer, mainDiv);
body.appendChild(rightContainer);

const gridGenerationBtn = document.createElement('button');
gridGenerationBtn.textContent = 'Generate Grid';

rightContainer.appendChild(gridGenerationBtn);

let gridNumber = 0;
const subDivsArray = [];


gridGenerationBtn.addEventListener('click', () => {
    while(subDivsArray.length > 0) {
        subDivsArray.pop();
    }

    mainDiv.replaceChildren();

    gridGeneration();
});

function gridGeneration() {
    gridNumber = +prompt('Enter grid number');

    for(i=0; i<gridNumber; i++) {
        let subDiv = document.createElement('div');
        subDiv.classList.add('subContainer')
        for(j=0; j<gridNumber; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            subDiv.appendChild(square);
        }
        subDivsArray[i] = subDiv;
    }

    subDivsArray.forEach((item) => {
        mainDiv.appendChild(item);
    });

    let squares = Array.from(document.getElementsByClassName('square'));
        squares.forEach((block) => {
        block.addEventListener('mouseenter', () => {
            block.style.backgroundColor = 'black';
        });
    });
}

