"use strict";
// Compte le nombre de cases vides
function count_empty_cells()
{
    var empty_cells = 0;
    var x = 0;
    var y = 0;
    while (x < gameSize)
    {
        while (y < gameSize)
        {
            if (grid[x][y] === 0)
            {
                empty_cells++;
            }
            ++y;
        }
        y = 0;
        ++x;
    }
    return (empty_cells);
}

// Random entre min(inclu) et max(inclu)
function random_number(min, max)
{
    max++;
    return (Math.floor(Math.random() * (max - min)) + min);
}

function set_pawn_color(pawn_value)
{
    if (pawn_value === 2)
    {
        return ("#bf61bf");
    }
    else if (pawn_value === 4)
    {
        return ("#ca7aca");
    }
    else if (pawn_value === 8)
    {
        return ("#47374b");
    }
    else if (pawn_value === 16)
    {
        return ("#493d4c");
    }
    else if (pawn_value === 32)
    {
        return ("#67536d");
    }
    else if (pawn_value === 64)
    {
        return ("#886d90");
    }
    else if (pawn_value === 128)
    {
        return ("#b243d3");
    }
    else if (pawn_value === 256)
    {
        return ("#a530c8");
    }
    else if (pawn_value === 512)
    {
        return ("#9351a6");
    }
    else if (pawn_value === 1024)
    {
        return ("#774287");
    }
    else if (pawn_value === 2048)
    {
        return ("#5f356c");
    }
    else if (pawn_value === 4096)
    {
        return ("#2e1224");
    }
    else if (pawn_value === 8192)
    {
        return ("#060204");
    }
    else
    {
        return ("#c55");
    }
}

var scoreContainer = document.getElementById("scoreContainer");
function add_score(n)
{
    scoreContainer.innerHTML = Number(scoreContainer.innerHTML) + n;
}

function reset_score()
{
    scoreContainer.innerHTML = "0";
}

// Ajoute un pawn sur une case vide
function add_pawn()
{
    var empty_cells = count_empty_cells();
    if (empty_cells > 0)
    {
        var cellVal = random_number(1, 6);
        if (cellVal === 6)
        {
            cellVal = 4
        }
        else
        {
            cellVal = 2
        }
        var newPawn = document.createElement("span");
        newPawn.className = "pawn";
        newPawn.innerHTML = cellVal;
        newPawn.style.background = set_pawn_color(parseInt(newPawn.innerHTML));
        add_score(parseInt(newPawn.innerHTML))

        var x = 0;
        var y = 0;
        var pawn_spawn = random_number(1, empty_cells) - 1;
        while (x < gameSize)
        {
            while (y < gameSize)
            {
                if (grid[x][y] === 0)
                {
                    if (pawn_spawn === 0)
                    {
                        newPawn.style.left = 5 + 55 * x + "px";
                        newPawn.style.top = 5 + 55 * y + "px";
                        grid[x][y] = parseInt(newPawn.innerHTML);
                        pawns[x][y] = newPawn;
                        gameDiv.appendChild(newPawn);
                        return ;
                    }
                    else
                    {
                        pawn_spawn--;
                    }
                }
                ++y;
            }
            y = 0;
            ++x;
        }
    }
}