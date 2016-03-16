"use strict";
function restart_game()
{
    remove_pawns();
    reset_score();
    add_pawn();
    add_pawn();
}

function undo_game()
{

}

function remove_cells()
{
    var i = 0;

    while (i < gameSize * gameSize)
    {
        var cellToDelete = document.getElementById("cell" + i);
        if (cellToDelete)
            cellToDelete.parentNode.removeChild(cellToDelete);
        i++;
    }
}

function remove_pawns()
{
    var x = 0;
    var y = 0;
    while (y < gameSize)
    {
        while (x < gameSize)
        {
            grid[x][y] = 0;
            var pawnToDelete = pawns[x][y];
            pawns[x][y] = 0;
            if (pawnToDelete)
                pawnToDelete.parentNode.removeChild(pawnToDelete);
            x++;
        }
        x = 0;
        y++;
    }
}

function change_game_size(size)
{
    remove_cells();
    remove_pawns();
    reset_score();
    grid = 0;
    pawns = 0;
    gameSize = size;
    init_gameDiv_style();
    init_cells();
    grid = init_grid();
    pawns = init_pawns();
    add_pawn();
    add_pawn();
    load_scores();
    print_scores();
}