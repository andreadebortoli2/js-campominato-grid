###PART 1

# instructions

Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;

- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;

- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

# Steps

- create a grid with 100 cells (10 x 10)
    -create the container in html with minimum css
    -select it and add cells in js
    -style the cells in css

- add a number to the cells
    -use the index of the array to attach the number

- add the grid creation to the button click
    -select the button
    -add eventListener
    -insert the griid function

- add color to the clicked cell
    -add event listener to cells
    -add class to the clicked cell

- print in console the number of the cell clicked
    -print in console the index of the clicked cell


# Tools

- const / let
- for loop
- eventListener
- click or toggle
- classList.add/remove


### PART 2

#Instructions

Consegna
Continuate a lavorare nella stessa repo di ieri.

-First Part
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: i funghi magici.
Attenzione: nella stessa cella può essere posizionato al massimo un fungo, perciò nell’array dei funghi non potranno esserci due numeri uguali.

-Second Part
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
- abbiamo calpestato una fungo
- la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

-Third Part
La partita termina quando il giocatore clicca su una fungo o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono funghi).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una fungo.


Nota: Se non vi piacciono i funghi :fungo: potete usare fiori :girasole: o cacca  :pupù: basta che non mettete bombe - purtroppo il nome della repo al momento non puó essere cambiato.

# Steps

--First Part
- generate 16 casual numbers between 1 and 100
    -generate a casual number between 1 and 100
    -now genmerate 16 of them
    -put them in an array
    -check if numbers are doubled
    -put in the array only non doubled numbers

-set the limits of the generation of numbers
    -set the generation as a function
    -edit the parameters of the function

-put a flower in the random cell
    -join grid cells with random generated numbers
    -add flower to the defined cell

--Second Part
-set eventListener to flower cells
    -create css style of .flower.active

--Third Part
-create a function to end the game
    -set conditions to end the game
        -if click on the flower cell
        -if click all the not flower cells
            -set a click counter
            -set a variable for the winning clicks number
-print a message