"use strict";
var gameSize = 4; // Taille de la grille
var gameDiv = document.getElementById("gameDiv")
var grid;
var undoGrid;
var pawns;

// Initialise la taille du conteneur
function init_gameDiv_style()
{
    var totalSize = ((gameSize * (50 + 5)) + 5) + "px";
    gameDiv.style.width = totalSize;
    gameDiv.style.height = totalSize;
}

// Cree les  cellules
function init_cells()
{
    var i = 0;
    while (i < gameSize * gameSize)
    {
        var newCell = document.createElement("div");
        newCell.className = "cell";
        newCell.id = "cell" + i;
        gameDiv.appendChild(newCell);
        ++i;
    }
}

// Cree le tableau de valeurs
function init_grid()
{
    var grid = [];
    var x = 0;
    var y = 0;
    while (x < gameSize)
    {
        grid[x] = [];
        while (y < gameSize)
        {
            grid[x][y] = 0;
            ++y;
        }
        y = 0;
        ++x;
    }
    return (grid);
}

// Cree le tableau de pawns
function init_pawns()
{
    var pawns = [];
    var x = 0;
    var y = 0;
    while (x < gameSize)
    {
        pawns[x] = [];
        while (y < gameSize)
        {
            pawns[x][y] = 0;
            ++y;
        }
        y = 0;
        ++x;
    }
    return (pawns);
}

// Initialisation
function init_game()
{
    load_scores();
    print_scores();
    init_gameDiv_style();
    init_cells();
}

// Ces deux initialisations fonctionnent quùen dehors des fonctions (wtf)
grid = init_grid();
undoGrid = init_grid();
pawns = init_pawns();
add_pawn();
add_pawn();
