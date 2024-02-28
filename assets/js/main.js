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

function createGrid(gridSide) {

    for (let i = 1; i < (gridSide ** 2) + 1; i++) {

        const cell = document.createElement('div');

        container.insertAdjacentElement('beforeend', cell).classList.add('cell');

        cell.style.width = `calc(100% / ${gridSide})`

        // console.log(cell.style.width = `calc(100% / ${gridSide})`);

        cell.innerHTML = `${i}`;
    };

};

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const difficulty = document.querySelector('select').value;

    // console.log(difficulty);

    let gridSide;

    if (difficulty === 'hard') {
        gridSide = 10;
    } else if (difficulty === 'medium') {
        gridSide = 9;
    } else if (difficulty === 'easy') {
        gridSide = 7;
    };

    // console.log(gridSide);

    container.replaceChildren();
    console.clear();

    createGrid(gridSide);

    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("click", activateCell);

        function activateCell() {
                cell.classList.add('active');
                // cell.classList.toggle('active');
            console.log(cell.innerHTML);
        };
    });
});