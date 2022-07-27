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
    btnTitle.setAttribute('id', 'btns-title');

    const blackColorBtn = document.createElement('button');
    blackColorBtn.textContent = 'Black Color';
    blackColorBtn.classList.add('colorButtons');
    
    const randomColorBtn = document.createElement('button');
    randomColorBtn.textContent = 'Random colors';
    randomColorBtn.classList.add('colorButtons');

    const eraseBtn = document.createElement('button');
    eraseBtn.textContent = 'Erase';
    eraseBtn.classList.add('colorButtons');

buttonsSection.appendChild(btnTitle);
buttonsSection.appendChild(blackColorBtn);
buttonsSection.appendChild(randomColorBtn);
buttonsSection.appendChild(eraseBtn);
// Left side

// Right side
const explanationSection = document.createElement('div');
explanationSection.setAttribute('id', 'explanation-style');

    const instructions = document.createElement('div');
    instructions.setAttribute('id', 'instructions');

    const firstExplanation = document.createElement('div');
    const secondExplanation = document.createElement('div');

    instructions.textContent = 'INSTRUCTIONS:';
    firstExplanation.innerHTML = '<strong>dblClick</strong> canvas to enter erase mode!';
    secondExplanation.innerHTML = '<strong>Click</strong> canvas to exit erase';

    explanationSection.appendChild(instructions);
    explanationSection.appendChild(firstExplanation);
    explanationSection.appendChild(secondExplanation);

const buttonSection = document.createElement('div');
buttonSection.classList.add('buttonContainer');
    const gridGenerationBtn = document.createElement('button');
    gridGenerationBtn.setAttribute('id', 'grid-generation-btn');
    gridGenerationBtn.textContent = 'Generate Grid';

const image2 = document.createElement('div');
image2.classList.add('image');

buttonSection.appendChild(gridGenerationBtn);
// Right side

body.insertBefore(leftContainer, mainDiv);
body.appendChild(rightContainer);

leftContainer.appendChild(titleSection);
leftContainer.appendChild(buttonsSection);
leftContainer.appendChild(image1);
rightContainer.appendChild(explanationSection);
rightContainer.appendChild(buttonSection);
rightContainer.appendChild(image2);

let gridNumber = 0;
const subDivsArray = [];

let r = 0;
let g = 0;
let b = 0;

let currentStyle

gridGenerationBtn.addEventListener('click', () => {
    while(subDivsArray.length > 0) {
        subDivsArray.pop();
    }

    mainDiv.replaceChildren();

    gridGeneration();
});

    gridGenerationBtn.addEventListener('mouseenter', () => {
        gridGenerationBtn.style.transform = 'scale(1.5)';
        gridGenerationBtn.style.transition = '.15s';
    });

    gridGenerationBtn.addEventListener('mouseleave', () => {
        gridGenerationBtn.style.transform = 'scale(1)';
    });

    gridGenerationBtn.addEventListener('mousedown', () => {
        gridGenerationBtn.style.transform = 'scale(1)';
        gridGenerationBtn.style.transition = '.09s';
    });


function gridGeneration() {
    gridNumber = +prompt(`Enter length of grid's side. Number must be <= 100!`);

    let inputValidation = /^[0-9]+$/; // RegEx thats used to check if entered input is a number

    while((!(inputValidation.test(gridNumber))) || (gridNumber > 100)) {
        gridNumber = +prompt('Enter a valid input!');
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
            currentStyle = block.style.backgroundColor = `rgb(${r-((r*percentage)/100)},${g-((g*percentage)/100)},${b-((b*percentage)/100)})`;
        });
    });
});

    randomColorBtn.addEventListener('mousemove', () => {

        r = Math.floor(Math.random()*255);
        g = Math.floor(Math.random()*255);
        b = Math.floor(Math.random()*255);

        randomColorBtn.style.backgroundColor = `rgb(${r},${g},${b})`;
        randomColorBtn.style.color = 'white';
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

    randomColorBtn.addEventListener('mousedown', () => {
        randomColorBtn.style.transform = 'scale(0.7)';
        randomColorBtn.style.transition = '.09s';
    });

    randomColorBtn.addEventListener('mouseup', () => {
        randomColorBtn.style.transform = 'scale(1)';
    });


blackColorBtn.addEventListener('click', () => {
    let squares = Array.from(document.getElementsByClassName('square'));
        squares.forEach((block) => {

        block.addEventListener('mouseenter', () => {
            currentStyle = block.style.backgroundColor = `rgb(0,0,0)`;
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

    blackColorBtn.addEventListener('mousedown', () => {
        blackColorBtn.style.transform = 'scale(0.7)';
        blackColorBtn.style.transition = '.09s';
    });

    blackColorBtn.addEventListener('mouseup', () => {
        blackColorBtn.style.transform = 'scale(1)';
    });


mainDiv.addEventListener('click', () => {
    let squares = Array.from(document.getElementsByClassName('square'));
        squares.forEach((block) => {

        block.addEventListener('mouseenter', () => {
            block.style.backgroundColor = currentStyle;
        });
    });
});

mainDiv.addEventListener('dblclick', () => {
    let squares = Array.from(document.getElementsByClassName('square'));
        squares.forEach((block) => {

        block.addEventListener('mouseenter', () => {
            block.style.backgroundColor = 'white';
        });
    });
});


eraseBtn.addEventListener('click', () => {
    let squares = Array.from(document.getElementsByClassName('square'));
        squares.forEach((block) => {
            block.style.backgroundColor = 'white';
    });
});

    eraseBtn.addEventListener('mouseenter', () => {
        eraseBtn.style.backgroundColor = 'white';
        eraseBtn.style.color = 'white';
        eraseBtn.style.boxShadow = '3px 3px rgb(0, 0, 0)';
        eraseBtn.style.transform = 'scale(1.2)';
        eraseBtn.style.transition = '.15s';
    });

    eraseBtn.addEventListener('mouseleave', () => {
        eraseBtn.style.backgroundColor = 'white';
        eraseBtn.style.color = 'black';
        eraseBtn.style.boxShadow = '3px 3px rgb(0, 0, 0)';
        eraseBtn.style.transform = 'scale(1)';
    });

    eraseBtn.addEventListener('mousedown', () => {
        eraseBtn.style.transform = 'scale(0.7)';
        eraseBtn.style.transition = '.09s';
    });

    eraseBtn.addEventListener('mouseup', () => {
        eraseBtn.style.transform = 'scale(1)';
    });
    


