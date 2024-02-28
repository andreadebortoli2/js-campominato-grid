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

for (let i = 0; i < 100; i++) {
    
    const cell = document.createElement('div');

    container.insertAdjacentElement('beforeend', cell).classList.add('cell');
}

// - add a number to the cells
//     -use the index of the array to attach the number

// - add the grid creation to the button click
//     -select the button
//     -add eventListener
//     -insert the griid function

// - add color to the clicked cell
//     -add event listener to cells
//     -add class to the clicked cell

// - print in console the number of the cell clicked
//     -print in console the index of the clicked cell