// základní proměnné
var totalScore, roundScore, dice, activePlayer, playGame;






newStart()


function newStart() {
    totalScore = [0,0];
    roundScore = 0;
    activePlayer = 0;
    playGame = true;

    // vynulování a odstranění kostky
    document.getElementById("totalScorePlayer-0").textContent = 0;
    document.getElementById("totalScorePlayer-1").textContent = 0;

    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;

    // skrytí kostky
    document.querySelector(".diceImage").style.display = "none";

    // texty do původního stavu
    document.querySelector("#name-" + 0).textContent = "Player 1 score";
    document.querySelector("#name-" + 1).textContent = "Player 2 score";

    // vracení aktivního hráče k prvnímu a u druhého odstrnení
    document.querySelector(".totalScore0").classList.add("active");
    document.querySelector(".totalScore1").classList.add("active");
}


// hodit kostkou btn
document.querySelector(".rollDice").addEventListener("click", function () {
    if (playGame) {
        // generuje číslo od 1 do 6
        var dice = Math.ceil(Math.random() * 6); 

        // zobrazení rnd obrázku
        var diceElement = document.querySelector(".diceImage")
        diceElement.style.display = "block";
        diceElement.src = "img/" + dice + ".jpg";

        // měnění souč. score
        if (dice !== 1) {
            roundScore = roundScore + dice;
            document.getElementById("currentScore-" + activePlayer).textContent = roundScore;
        } else{
            // další hráč bude hrát
            nextPlayer()
        }
    }
    
    
    
   
});

// podržet skóre
document.querySelector(".holdScore").addEventListener("click", function(){
    if (playGame)
    {
        // sčítá současné skóre do skóre hráče
        totalScore[activePlayer] = totalScore[activePlayer] + roundScore;
        document.querySelector("#totalScorePlayer-" + activePlayer).textContent = totalScore[activePlayer];

        if (totalScore[activePlayer] >= 100) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner!!!!";
            document.querySelector(".diceImage").style.display = "none";
            playGame = false;
        } else {nextPlayer()}
    }
});

// nová hra btn
document.querySelector(".newGame").addEventListener("click", newStart)

// funkce přepne na druhého hráče
function nextPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
        
    } else {activePlayer = 0;
        
    }

    roundScore = 0;

    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;

    document.querySelector(".diceImage").style.display = "none";

    document.querySelector(".totalScore0").classList.toggle("active")
    document.querySelector(".totalScore1").classList.toggle("active")
    
}
