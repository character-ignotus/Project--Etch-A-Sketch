const body = document.querySelector('body');

const mainDiv = document.createElement('div');
mainDiv.setAttribute('id', 'main-container');
body.appendChild(mainDiv);

const leftContainer = document.createElement('div');
const rightContainer = document.createElement('div');

leftContainer.classList.add('container');
rightContainer.classList.add('container');

// Left side
const buttonsSection = document.createElement('div');
buttonsSection.classList.add('buttonContainer');
    const blackColorBtn = document.createElement('button');
    blackColorBtn.textContent = 'Black Color';
    const randomColorBtn = document.createElement('button');
    randomColorBtn.textContent = 'Random colors';

buttonsSection.appendChild(blackColorBtn);
buttonsSection.appendChild(randomColorBtn);
// Left side

// Right side
const buttonSection = document.createElement('div');
buttonSection.classList.add('buttonContainer');
    const gridGenerationBtn = document.createElement('button');
    gridGenerationBtn.textContent = 'Generate Grid';

buttonSection.appendChild(gridGenerationBtn);
// Right side

body.insertBefore(leftContainer, mainDiv);
body.appendChild(rightContainer);

leftContainer.appendChild(buttonsSection);
rightContainer.appendChild(buttonSection);

let gridNumber = 0;
const subDivsArray = [];

let r = 0;
let g = 0;
let b = 0;

gridGenerationBtn.addEventListener('click', () => {
    while(subDivsArray.length > 0) {
        subDivsArray.pop();
    }

    mainDiv.replaceChildren();

    gridGeneration();
});

function gridGeneration() {
    gridNumber = +prompt('Enter grid number');

    let inputValidation = /^[0-9]+$/; // RegEx thats used to check if entered input is a number

    while((!(inputValidation.test(gridNumber))) || (gridNumber > 100)) {
        gridNumber = +prompt('Enter a valid number!');
    }

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
}


randomColorBtn.addEventListener('click', () => {
    let squares = Array.from(document.getElementsByClassName('square'));
        squares.forEach((block) => {

            let percentage = -10;

        block.addEventListener('mouseenter', () => {

            if(percentage < 100) {
                percentage += 10;
            }

            r = Math.floor(Math.random()*255);
            g = Math.floor(Math.random()*255);
            b = Math.floor(Math.random()*255);
            block.style.backgroundColor = `rgb(${r-((r*percentage)/100)},${g-((g*percentage)/100)},${b-((b*percentage)/100)})`;
        });
    });
});


blackColorBtn.addEventListener('click', () => {
    let squares = Array.from(document.getElementsByClassName('square'));
        squares.forEach((block) => {

        block.addEventListener('mouseenter', () => {
            block.style.backgroundColor = `rgb(0,0,0)`;
        });
    });
});

mainDiv.addEventListener('click', () => {
    let squares = Array.from(document.getElementsByClassName('square'));
        squares.forEach((block) => {

        block.addEventListener('mouseenter', () => {
            block.style.backgroundColor = `rgb(255,255,255)`;
        });
    });
});