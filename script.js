const body = document.querySelector('body');

const mainDiv = document.createElement('div');
mainDiv.setAttribute('id', 'main-container');
body.appendChild(mainDiv);

const leftContainer = document.createElement('div');
const rightContainer = document.createElement('div');

leftContainer.classList.add('container');
rightContainer.classList.add('container');

// Left side
const titleSection = document.createElement('div');

    const firstTitleWord = document.createElement('div');
    const secondTitleWord = document.createElement('div');
    const thirdTitleWord = document.createElement('div');

    firstTitleWord.classList.add('titleWords');
    secondTitleWord.classList.add('titleWords');
    thirdTitleWord.classList.add('titleWords');

    firstTitleWord.textContent = 'Etch';
    secondTitleWord.textContent = '-A-';
    thirdTitleWord.textContent = 'Sketch';

    titleSection.appendChild(firstTitleWord);
    titleSection.appendChild(secondTitleWord);
    titleSection.appendChild(thirdTitleWord);

titleSection.setAttribute('id', 'title-style');
const image1 = document.createElement('div');
image1.classList.add('image');
const buttonsSection = document.createElement('div');

buttonsSection.classList.add('buttonContainer');
    const btnTitle = document.createElement('div');
    btnTitle.textContent = 'Select drawing color';

    const blackColorBtn = document.createElement('button');
    blackColorBtn.textContent = 'Black Color';
    blackColorBtn.classList.add('colorButtons');
    
    const randomColorBtn = document.createElement('button');
    randomColorBtn.textContent = 'Random colors';
    randomColorBtn.classList.add('colorButtons');

buttonsSection.appendChild(btnTitle);
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

leftContainer.appendChild(titleSection);
leftContainer.appendChild(buttonsSection);
leftContainer.appendChild(image1);
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

blackColorBtn.addEventListener('mouseenter', () => {
    blackColorBtn.style.backgroundColor = 'black';
    blackColorBtn.style.color = 'white';
    blackColorBtn.style.boxShadow = '3px 3px rgb(255, 255, 255)';
    blackColorBtn.style.transform = 'scale(1.2)';
    blackColorBtn.style.transition = '.15s';
});

blackColorBtn.addEventListener('mouseleave', () => {
    blackColorBtn.style.backgroundColor = 'white';
    blackColorBtn.style.color = 'black';
    blackColorBtn.style.boxShadow = '3px 3px rgb(0, 0, 0)';
    blackColorBtn.style.transform = 'scale(1)';
});

randomColorBtn.addEventListener('mousemove', () => {

    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);

    randomColorBtn.style.backgroundColor = `rgb(${r},${g},${b})`;
    randomColorBtn.style.color = 'black';
    randomColorBtn.style.boxShadow = `black`;
    randomColorBtn.style.transform = 'scale(1.2)';
    randomColorBtn.style.transition = '.15s';
});

randomColorBtn.addEventListener('mouseleave', () => {
    randomColorBtn.style.backgroundColor = 'white';
    randomColorBtn.style.color = 'black';
    randomColorBtn.style.boxShadow = '3px 3px rgb(0, 0, 0)';
    randomColorBtn.style.transform = 'scale(1)';
});