"use strict";
function move_left()
{
    var x = 1;
    var y = 0;
    var moved = 0;

    while (y < gameSize)
    {
        while (x < gameSize)
        {
            if (grid[x][y] != 0 && x > 0)
            {
                var temp_x = x; // Future position en x
                while (temp_x > 0 && grid[temp_x - 1][y] == 0)
                    temp_x--;
                if (temp_x == 0 && temp_x != x) // Si la case peut arriver tout a gauche
                {
                    // On pose la case tout a gauche
                    grid[temp_x][y] = grid[x][y];
                    grid[x][y] = 0;
                    var movingPawn = pawns[x][y];
                    pawns[x][y] = 0;
                    pawns[temp_x][y] = movingPawn;
                    movingPawn.style.left = 5 + 55 * temp_x + "px";
                    moved = 1;
                }
                else
                {
                    if (grid[x][y] == grid[temp_x - 1][y])
                    {
                        // Les cases peuvent fusionner
                        add_score(grid[x][y]);
                        grid[temp_x - 1][y] *= 2;
                        grid[x][y] = 0;
                        var movingPawn = pawns[x][y];
                        pawns[x][y] = 0;
                        var pawnToDelete = pawns[temp_x - 1][y];
                        pawnToDelete.parentNode.removeChild(pawnToDelete);
                        pawns[temp_x - 1][y] = movingPawn;
                        movingPawn.innerHTML = grid[temp_x - 1][y];
                        movingPawn.style.left = 5 + 55 * (temp_x - 1) + "px";
                        movingPawn.style.background = set_pawn_color(grid[temp_x - 1][y]);
                        moved = 1;
                    }
                    else if (temp_x != x)
                    {
                        // On pose la case a [temp_x][y]
                        grid[temp_x][y] = grid[x][y];
                        grid[x][y] = 0;
                        var movingPawn = pawns[x][y];
                        pawns[x][y] = 0;
                        pawns[temp_x][y] = movingPawn;
                        movingPawn.style.left = 5 + 55 * temp_x + "px";
                        moved = 1;
                    }
                }
            }
            ++x;
        }
        x = 1;
        ++y;
    }
    if (moved == 1)
        add_pawn();
}

function move_top()
{
    var x = 0;
    var y = 1;
    var moved = 0;

    while (x < gameSize)
    {
        while (y < gameSize)
        {
            if (grid[x][y] != 0 && y > 0)
            {
                var temp_y = y; // Future position en x
                while (temp_y > 0 && grid[x][temp_y - 1] == 0)
                    temp_y--;
                if (temp_y == 0 && temp_y != y) // Si la case peut arriver tout en haut
                {
                    // On pose la case tout a gauche
                    grid[x][temp_y] = grid[x][y];
                    grid[x][y] = 0;
                    var movingPawn = pawns[x][y];
                    pawns[x][y] = 0;
                    pawns[x][temp_y] = movingPawn;
                    movingPawn.style.top = 5 + 55 * temp_y + "px";
                    moved = 1;
                }
                else
                {
                    if (grid[x][y] == grid[x][temp_y - 1])
                    {
                        // Les cases peuvent fusionner
                        add_score(grid[x][y]);
                        grid[x][temp_y - 1] *= 2;
                        grid[x][y] = 0;
                        var movingPawn = pawns[x][y];
                        pawns[x][y] = 0;
                        var pawnToDelete = pawns[x][temp_y - 1];
                        pawnToDelete.parentNode.removeChild(pawnToDelete);
                        pawns[x][temp_y - 1] = movingPawn;
                        movingPawn.innerHTML = grid[x][temp_y - 1];
                        movingPawn.style.top = 5 + 55 * (temp_y - 1) + "px";
                        movingPawn.style.background = set_pawn_color(grid[x][temp_y - 1]);
                        moved = 1;
                    }
                    else if (temp_y != y)
                    {
                        // On pose la case a [temp_x][y]
                        grid[x][temp_y] = grid[x][y];
                        grid[x][y] = 0;
                        var movingPawn = pawns[x][y];
                        pawns[x][y] = 0;
                        pawns[x][temp_y] = movingPawn;
                        movingPawn.style.top = 5 + 55 * temp_y + "px";
                        moved = 1;
                    }
                }
            }
            ++y;
        }
        y = 1;
        ++x;
    }
    if (moved == 1)
        add_pawn();
}

function move_right()
{
    var x = gameSize - 2;
    var y = gameSize - 1;
    var moved = 0;

    while (y >= 0)
    {
        while (x >= 0)
        {
            if (grid[x][y] != 0 && x < gameSize - 1)
            {
                var temp_x = x; // Future position en x
                while (temp_x < gameSize - 1 && grid[temp_x + 1][y] == 0)
                    temp_x++;
                //alert(x + '-' + temp_x);
                if (temp_x == gameSize - 1 && temp_x != x) // Si la case peut arriver tout a droite
                {
                    // On pose la case tout a gauche
                    grid[temp_x][y] = grid[x][y];
                    grid[x][y] = 0;
                    var movingPawn = pawns[x][y];
                    pawns[x][y] = 0;
                    pawns[temp_x][y] = movingPawn;
                    movingPawn.style.left = 5 + 55 * temp_x + "px";
                    moved = 1;
                }
                else
                {
                    if (grid[x][y] == grid[temp_x + 1][y])
                    {
                        // Les cases peuvent fusionner
                        add_score(grid[x][y]);
                        grid[temp_x + 1][y] *= 2;
                        grid[x][y] = 0;
                        var movingPawn = pawns[x][y];
                        pawns[x][y] = 0;
                        var pawnToDelete = pawns[temp_x + 1][y];
                        pawnToDelete.parentNode.removeChild(pawnToDelete);
                        pawns[temp_x + 1][y] = movingPawn;
                        movingPawn.innerHTML = grid[temp_x + 1][y];
                        movingPawn.style.left = 5 + 55 * (temp_x + 1) + "px";
                        movingPawn.style.background = set_pawn_color(grid[temp_x + 1][y]);
                        moved = 1;
                    }
                    else if (temp_x != x)
                    {
                        // On pose la case a [temp_x][y]
                        grid[temp_x][y] = grid[x][y];
                        grid[x][y] = 0;
                        var movingPawn = pawns[x][y];
                        pawns[x][y] = 0;
                        pawns[temp_x][y] = movingPawn;
                        movingPawn.style.left = 5 + 55 * temp_x + "px";
                        moved = 1;
                    }
                }
            }
            --x;
        }
        x = gameSize - 2;
        --y;
    }
    if (moved == 1)
        add_pawn();
}

function move_bottom()
{
    var x = gameSize - 1;
    var y = gameSize - 2;
    var moved = 0;

    while (x >= 0)
    {
        while (y >= 0)
        {
            if (grid[x][y] != 0 && y < gameSize - 1)
            {
                var temp_y = y; // Future position en x
                while (temp_y < gameSize - 1 && grid[x][temp_y + 1] == 0)
                    temp_y++;
                //alert(x + '-' + temp_x);
                if (temp_y == gameSize - 1 && temp_y != y) // Si la case peut arriver tout a droite
                {
                    // On pose la case tout a gauche
                    grid[x][temp_y] = grid[x][y];
                    grid[x][y] = 0;
                    var movingPawn = pawns[x][y];
                    pawns[x][y] = 0;
                    pawns[x][temp_y] = movingPawn;
                    movingPawn.style.top = 5 + 55 * temp_y + "px";
                    moved = 1;
                }
                else
                {
                    if (grid[x][y] == grid[x][temp_y + 1])
                    {
                        // Les cases peuvent fusionner
                        add_score(grid[x][y]);
                        grid[x][temp_y + 1] *= 2;
                        grid[x][y] = 0;
                        var movingPawn = pawns[x][y];
                        pawns[x][y] = 0;
                        var pawnToDelete = pawns[x][temp_y + 1];
                        pawnToDelete.parentNode.removeChild(pawnToDelete);
                        pawns[x][temp_y + 1] = movingPawn;
                        movingPawn.innerHTML = grid[x][temp_y + 1];
                        movingPawn.style.top = 5 + 55 * (temp_y + 1) + "px";
                        movingPawn.style.background = set_pawn_color(grid[x][temp_y + 1]);
                        moved = 1;
                    }
                    else if (temp_y != y)
                    {
                        // On pose la case a [temp_x][y]
                        grid[x][temp_y] = grid[x][y];
                        grid[x][y] = 0;
                        var movingPawn = pawns[x][y];
                        pawns[x][y] = 0;
                        pawns[x][temp_y] = movingPawn;
                        movingPawn.style.top = 5 + 55 * temp_y + "px";
                        moved = 1;
                    }
                }
            }
            --y;
        }
        y = gameSize - 2;
        --x;
    }
    if (moved == 1)
        add_pawn();
}

var inGame = 1;
document.onkeydown = function play_turn(e)
{
    if (inGame)
    {
        if (e.keyCode == 37) // Left Arrow
        {
            move_left();
            test_game();
        }
        else if (e.keyCode == 38) // Top Arrow
        {
            move_top();
            test_game();
        }
        else if (e.keyCode == 39)  // Right Arrow
        {
            move_right();
            test_game();
        }
        else if (e.keyCode == 40)  // Bottom Arrow
        {
            move_bottom();
            test_game();
        }
    }
    if (e.keyCode == 69) // E
        ;//clear_storage();
}