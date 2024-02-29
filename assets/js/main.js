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
 * generate a grid
 * create a grid with a changeble size removing old grids
 * @param {number} size number of cells for the width
 * @returns array of cells
 */
function createGrid(size) {

    container.replaceChildren();

    for (let i = 1; i <= size ** 2; i++) {

        const cell = document.createElement('div');
        cell.classList.add('cell');

        container.insertAdjacentElement('beforeend', cell);

        cell.style.width = `calc(100% / ${size})`;
        // console.log(cell.style.width = `calc(100% / ${gridSide})`);

        cell.innerHTML = `${i}`;

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
    console.log(node.innerHTML);
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
        cell[i].innerHTML = 'F'
    }
} */
//     -add flower to the defined cell

// --Second Part
// -

// --Third Part
// -


form.addEventListener('submit', function (e) {
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

    const cells = createGrid(gridSideLength);
    console.log(cells);

    const flowerPositionNumbers = getFlowersPosition(gridSideLength);
    console.log(flowerPositionNumbers);

    for (let i = 0; i < cells.length; i++) {
    
        if (flowerPositionNumbers.includes(i)) {
            cells[i].innerHTML = 'F'
        }
    }

});


//-------eventListener click-------
/* const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("click", function () {
            activateCell(cell);
        });
    }); */
