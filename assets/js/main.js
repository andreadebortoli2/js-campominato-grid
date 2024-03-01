// console.log('HI');

// - create a grid with 100 cells (10 x 10)
//     -create the container in html with minimum css
//     -select it and add cells in js
//     -style the cells in css

const container = document.querySelector('.container');

/* const cell = document.createElement('div');
console.log(cell);
container.insertAdjacentElement('beforeend', cell).classList.add('cell');
console.log(container); */

/* for (let i = 1; i < 101; i++) {
    
    const cell = document.createElement('div');

    container.insertAdjacentElement('beforeend', cell).classList.add('cell');
    
    // - add a number to the cells
    //     -use the index of the array to attach the number

    cell.innerHTML = `${i}`;
}
 */

/* function createGrid() {

    for (let i = 1; i < 101; i++) {

        const cell = document.createElement('div');

        container.insertAdjacentElement('beforeend', cell).classList.add('cell');

        cell.innerHTML = `${i}`;
    };

}; */

// - add the grid creation to the button click
//     -select the button

/* const playBtn = document.querySelector('button'); */

//     -add eventListener

/* playBtn.addEventListener('click', function () {
    //     -insert the grid function
    createGrid();


    // - add color to the clicked cell
    //     -add event listener to cells
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("click", activateCell);


        //     -add class to the clicked cell
        function activateCell() {
            // cells.classList.add('active');
            cell.classList.add('active');
            // - print in console the number of the cell clicked
            //     -print in console the index of the clicked cell
            console.log(cell.innerHTML);
        };
    });
});
 */

//-----Bonus-----

// - edit function to work with differen measures set by the selector

const form = document.querySelector('form');

/* form.addEventListener('submit', function (e) {
    e.preventDefault()


    const difficulty = document.querySelector('select').value;
    // console.log(difficulty);


    if (difficulty === 'hard') {
        gridSideLength = 10;
    } else if (difficulty === 'medium') {
        gridSideLength = 9;
    } else if (difficulty === 'easy') {
        gridSideLength = 7;
    };
    // console.log(gridSideLength);

    console.clear();

    createGrid(gridSideLength);

}); */


//#######functionsStart#######

/**
 * create a cell for the grid
 * @returns a cell for the grid
 */
function createCell() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell
};

/**
 * generate a grid
 * create a grid with a changeble size removing old grids
 * @param {number} size number of cells for the width
 * @returns array of cells
 */
function createGrid(size) {

    container.replaceChildren();

    for (let i = 1; i <= size ** 2; i++) {

        const cell = createCell()

        container.insertAdjacentElement('beforeend', cell);

        cell.style.width = `calc(100% / ${size})`;
        // console.log(cell.style.width = `calc(100% / ${gridSide})`);

        // cell.innerHTML = `${i}`;

    };

    const cells = document.querySelectorAll('.cell');
    // console.log(cells);

    return cells
};

/**
 * add class active to a node
 * @param {*} node node to add the class
 */
function activateCell(node) {
    node.classList.add('active');
    // console.log(node.innerHTML);
};

/**
 * generate a number between 1 and max
 * @param {*} max highest number/limit 
 * @returns a random number
 */
function getFlowerPositionNumber(max) {
    return Math.floor(Math.random() * (max - 1 + 1)) + 1;
};

/**
 * create an array of random numbers (position for flowers)
 * @param {*} numb position max limit
 * @returns an array of numbers (position for flowers)
 */
function getFlowersPosition(numb) {

    const flowerQuantity = 16;

    const flowerPositionNumbers = [];

    // console.log(flowerPositionNumbers);

    while (flowerPositionNumbers.length < flowerQuantity) {

        const flowerPosition = getFlowerPositionNumber(numb ** 2);

        if (!flowerPositionNumbers.includes(flowerPosition)) {
            flowerPositionNumbers.push(flowerPosition);
        };
    };
    // console.log(flowerPositionNumbers);

    return flowerPositionNumbers
};

/**
 * add flowers to cells
 * @param {*} grid the array where to position flowers 
 * @param {*} positions the array with the positions of the flowers
 */
function flowerPositioning(grid, positions) {
    for (let i = 0; i < grid.length; i++) {

        if (positions.includes(i)) {
            // grid[i].innerHTML = 'F'; (placeholder)
            grid[i].classList.add('flower')
            grid[i].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-flower3" viewBox="0 0 16 16">
            <path d="M11.424 8c.437-.052.811-.136 1.04-.268a2 2 0 0 0-2-3.464c-.229.132-.489.414-.752.767C9.886 4.63 10 4.264 10 4a2 2 0 1 0-4 0c0 .264.114.63.288 1.035-.263-.353-.523-.635-.752-.767a2 2 0 0 0-2 3.464c.229.132.603.216 1.04.268-.437.052-.811.136-1.04.268a2 2 0 1 0 2 3.464c.229-.132.489-.414.752-.767C6.114 11.37 6 11.736 6 12a2 2 0 1 0 4 0c0-.264-.114-.63-.288-1.035.263.353.523.635.752.767a2 2 0 1 0 2-3.464c-.229-.132-.603-.216-1.04-.268M9 4a2 2 0 0 1-.045.205q-.059.2-.183.484a13 13 0 0 1-.637 1.223L8 6.142l-.135-.23a13 13 0 0 1-.637-1.223 4 4 0 0 1-.183-.484A2 2 0 0 1 7 4a1 1 0 1 1 2 0M3.67 5.5a1 1 0 0 1 1.366-.366 2 2 0 0 1 .156.142q.142.15.326.4c.245.333.502.747.742 1.163l.13.232-.265.002a13 13 0 0 1-1.379-.06 4 4 0 0 1-.51-.083 2 2 0 0 1-.2-.064A1 1 0 0 1 3.67 5.5m1.366 5.366a1 1 0 0 1-1-1.732l.047-.02q.055-.02.153-.044.202-.048.51-.083a13 13 0 0 1 1.379-.06q.135 0 .266.002l-.131.232c-.24.416-.497.83-.742 1.163a4 4 0 0 1-.327.4 2 2 0 0 1-.155.142M9 12a1 1 0 0 1-2 0 2 2 0 0 1 .045-.206q.058-.198.183-.483c.166-.378.396-.808.637-1.223L8 9.858l.135.23c.241.415.47.845.637 1.223q.124.285.183.484A1.3 1.3 0 0 1 9 12m3.33-6.5a1 1 0 0 1-.366 1.366 2 2 0 0 1-.2.064q-.202.048-.51.083c-.412.045-.898.061-1.379.06q-.135 0-.266-.002l.131-.232c.24-.416.497-.83.742-1.163a4 4 0 0 1 .327-.4q.07-.074.114-.11l.041-.032a1 1 0 0 1 1.366.366m-1.366 5.366a2 2 0 0 1-.155-.141 4 4 0 0 1-.327-.4A13 13 0 0 1 9.74 9.16l-.13-.232.265-.002c.48-.001.967.015 1.379.06q.308.035.51.083.098.024.153.044l.048.02a1 1 0 1 1-1 1.732zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
          </svg>`;
        }
    };
};

/**
 * create a box for the result message
 * @param {*} message message to print in the box 
 */
function createResultMessage(message) {
    const resultMessage = document.createElement('div');
    resultMessage.classList.add('result_message');
    container.insertAdjacentElement('beforeend', resultMessage);
    resultMessage.innerHTML = `${message}`;
};

//#######functionsEnd#######


// --First Part
// - generate 16 casual numbers between 1 and 100
//     -generate a casual number between 1 and 100
/* const min = 1;
const max = 100;
function getFlowerPositionNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}; */
//     -put numbers in an array

/* const flowerQuantity = 16;
const flowerPositionNumbers = [];
console.log(flowerPositionNumbers); */
//     -now genmerate 16 of them
/* while (flowerPositionNumbers.length < flowerQuantity) {

    const flowerPosition = getFlowerPositionNumber(max)

    //     -check if numbers are doubled
    if (!flowerPositionNumbers.includes(flowerPosition)) {
        //     -put them in the array
        flowerPositionNumbers.push(flowerPosition)
    }
}
console.log(flowerPositionNumbers); */

// -set the limits of the random generation of numbers
//     -set the generation as a function
//     -edit the parameters of the function
/* function getFlowerPositionNumber(max) {
    return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}; */

// -put a flower in the random cell
//     -join grid cells with random generated numbers
/* for (let i = 0; i < cells.length; i++) {
    
    if (i === flowerPositionNumbers.value) {
        //     -add flower to the defined cell
        cell[i].innerHTML = 'F'
    }
} */

// --Second Part
// -set eventListener to flower cells
//     -create css style of .flower.active
/* cells.forEach((cell) => {
    cell.addEventListener("click", function () {
            activateCell(cell);
        };
    });
}); */

// --Third Part
// -create a function to end the game
//     -set conditions to end the game
//         -if click on the flower cell
/* if (cell.classList.contains('flower' && 'active')) {
    console.log('end game');
} */
//         -if click all the not flower cells
//              -set a click counter
/* let clicksNumber = 0;

clicksNumber++ */
//              -set a variable for the winning clicks number
/* const winNumber = cells.length - flowerPositionNumbers.length;
if (clicksNumber === winNumber) {
    console.log('end game');
} */
// -print a message


form.addEventListener('submit', function (e) {
    e.preventDefault()

//----generate the grid
    const difficulty = document.querySelector('select').value;
    // console.log(difficulty);


    if (difficulty === 'hard') {
        gridSideLength = 10;
    } else if (difficulty === 'medium') {
        gridSideLength = 9;
    } else if (difficulty === 'easy') {
        gridSideLength = 7;
    };
    // console.log(gridSideLength);

    const cells = createGrid(gridSideLength);
    // console.log(cells);

//----add flowers
    const flowerPositionNumbers = getFlowersPosition(gridSideLength);
    // console.log(flowerPositionNumbers);

    flowerPositioning(cells, flowerPositionNumbers);

//----play the game
    const winNumber = cells.length - flowerPositionNumbers.length;
    // const winNumber = 5; (debug)

    let clicksNumber = 0;

    let flower

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', click);
    };

//----end the game
    /**
     * add click function and check the cell
     * click add class active and increment the click counter
     * check when the game has to finish
     * if click flower or click all the other cells
     * then block the game removing the eventListener(click)
     * give the type of end through the flower variable to print the result
     */
    function click() {

        this.classList.add('active');
        this.removeEventListener('click', click);
        clicksNumber++

        if (this.classList.contains('flower')) {
            document.querySelectorAll('.flower').forEach((flower) => flower.classList.add('active'));
            for (let i = 0; i < cells.length; i++) {
                cells[i].removeEventListener('click', click);
            };
            // console.log('yes');
            flower = 'found';

        } else if (clicksNumber === winNumber) {
            this.classList.add('active');
            for (let i = 0; i < cells.length; i++) {
                cells[i].removeEventListener('click', click);
            };
            // console.log('not');
            flower = 'not found';

        }

        // console.log(clicksNumber);
        // console.log(flower);
//----print the result
        const attempt = clicksNumber === 1 ? 'try' : 'tries';
        const foundMessage = `You found the FLOWER in ${clicksNumber} ${attempt}`;
        const notFoundMessage = `You missed the FLOWER all the tries ( ${clicksNumber} )`;

        if (flower === 'found') {
            // console.log('FOUND');
            createResultMessage(foundMessage);
        } else if (flower === 'not found') {
            // console.log('NOT FOUND');
            createResultMessage(notFoundMessage);
        };
    };
});
























































































































































