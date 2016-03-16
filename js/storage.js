"use strict";
var pseudos = [];
var scores = [];

function load_scores()
{
    var i = 0;
    while (i < 10)
    {
        pseudos[i] = localStorage.getItem(i + "pseudo" + gameSize);
        scores[i] = localStorage.getItem(i + "score" + gameSize);
        i++;
    }
}

function print_scores()
{
    var leftAside = document.getElementById("leftAside");
    leftAside.innerHTML = "";
    var title_p = document.createElement("p");
    title_p.innerHTML = "Scores x" + gameSize;
    leftAside.appendChild(title_p);
    var i = 0;
    while (i < 10)
    {
        if (pseudos[i] && scores[i])
        {
            var spanPseudo = document.createElement("span");
            spanPseudo.className = "pseudo";
            spanPseudo.innerHTML = pseudos[i];

            var spanScore = document.createElement("span");
            spanScore.className = "score";
            spanScore.innerHTML = scores[i];

            leftAside.appendChild(spanPseudo);
            leftAside.appendChild(spanScore);
        }
        i++;
    }
    var resetButton = document.createElement("input");
    resetButton.id = "resetButton";
    resetButton.type = "button";
    resetButton.value= "Reset Score";
    resetButton.onclick = function()
    {
        if (confirm("Do you really want to reset the scores ?"))
        {
            localStorage.clear();
            load_scores();
            print_scores();
        }
    }
    leftAside.appendChild(resetButton);
}

function swap_value(val1, val2)
{
    var t = val1;
    val1 = val2;
    val2 = t;
}

function down_scores(i)
{
    var y = 9;
    while (y > i)
    {
        if (pseudos[y - 1] && scores[y - 1])
        {
            pseudos[y] = pseudos[y - 1];
            scores[y] = scores[y - 1];
            localStorage.setItem(y + "pseudo" + gameSize, pseudos[y]);
            localStorage.setItem(y + "score" + gameSize, scores[y]);
        }
        --y;
    }
}

function update_score()
{
    var playerName = document.getElementById("playerName").value;
    var playerScore = parseInt(document.getElementById("scoreContainer").innerHTML);

    if (playerName == "")
    {
        playerName = prompt("Name ?");
        document.getElementById("playerName").value = playerName;
    }

    var i = 0;
    while (i < 10)
    {
        if (!scores[i])
        {
            pseudos[i] = playerName;
            scores[i] = playerScore;
            localStorage.setItem(i + "pseudo" + gameSize, playerName);
            localStorage.setItem(i + "score" + gameSize, playerScore);
            print_scores();
            return ;
        }
        else if (scores[i] < playerScore)
        {
            down_scores(i);
            pseudos[i] = playerName;
            scores[i] = playerScore;
            localStorage.setItem(i + "pseudo" + gameSize, playerName);
            localStorage.setItem(i + "score" + gameSize, playerScore);
            print_scores();
            return ;
        }
        ++i;
    }
}

function clear_storage()
{
    localStorage.clear();
}
