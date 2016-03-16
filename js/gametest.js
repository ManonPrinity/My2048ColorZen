"use strict";
function show_score()
{
    var promptDiv = document.getElementById("promptDiv");
    promptDiv.style.display = "block";

    var prompt = document.getElementById("prompt");

    var promptTitle = document.createElement("h2");
    promptTitle.innerHTML = "Finished !";
    prompt.appendChild(promptTitle);

    var promptScore = document.createElement("p");
    var playerScore = document.getElementById("scoreContainer").innerHTML;
    promptScore.innerHTML = "You scored " + playerScore + ".";
    prompt.appendChild(promptScore);

    var promptButton = document.createElement("input");
    promptButton.type = "button";
    promptButton.value = "Try Again";
    prompt.appendChild(promptButton);
    promptButton.onclick = function()
    {
        prompt.innerHTML = "";
        promptDiv.style.display = "none";
        change_game_size(gameSize);
        inGame = 1;
    }
}

function count_zero()
{
    var ret = 0;
    var x = 0;
    var y = 0;
    while (y < gameSize)
    {
        while (x < gameSize)
        {
            if (grid[x][y] == 0)
                ++ret;
            ++x;
        }
        x = 0;
        ++y;
    }
    return (ret);
}

function test_cell(x, y)
{
    var val = grid[x][y];

    if (x < gameSize - 2 && val == grid[x + 1][y])
        return 1;
    if (x > 0 && val == grid[x - 1][y])
        return 1;
    if (y < gameSize - 2 && val == grid[x][y + 1])
        return 1;
    if (y > 0 && val == grid[x][y - 1])
        return 1;
    return 0;
}

function test_game()
{
    var zero_count = count_zero();
    if (zero_count != 0)
        return ;
    else
    {
        var x = 0;
        var y = 0;
        while (y < gameSize)
        {
            while (x < gameSize)
            {
                if (test_cell(x, y))
                    return ;
                ++x;
            }
            x = 0;
            ++y;
        }
        inGame = 0;
        update_score();
        show_score();
    }
}