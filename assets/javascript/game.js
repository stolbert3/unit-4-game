$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var userScore = 0;
    var goalScore = 0;
    var yellowValue = 0;
    var blueValue = 0;
    var emeraldValue = 0;
    var purpleValue = 0;

    $('#newGameButton').on('click', () => {
        console.log("NEW GAME STARTED");
        userScore = 0;
        newScore = 0;
        $("#userScoreNumber").text(userScore);
        goalScore = Math.floor(Math.random()*111) + 19;
        yellowValue = Math.floor(Math.random()*11) + 1;
        blueValue = Math.floor(Math.random()*11) + 1;
        emeraldValue = Math.floor(Math.random()*11) + 1;
        purpleValue = Math.floor(Math.random()*11) + 1;
        $("#goalScoreNumber").text(goalScore);
    });

    $('#yellow').on('click', function() {
        userScore = userScore + yellowValue;
        gameCounter(userScore, goalScore);
    });

    $('#blue').on('click', function() {
        userScore = userScore + blueValue;
        gameCounter(userScore, goalScore);
    });

    $('#emerald').on('click', function() {
        userScore = userScore + emeraldValue;
        gameCounter(userScore, goalScore);
    });
    
    $('#purple').on('click', function() {
        userScore = userScore + purpleValue;
        gameCounter(userScore, goalScore);
    });

    function gameCounter(userNum, goalNum) {
        if (userNum < goalNum) {
            $('#userScoreNumber').text(userNum);
        }
        else if (userNum > goalNum) {
            $('#userScoreNumber').text(userNum);
            alert("You lost! Click New Game to try again.");
            $("#lossesNumber").text(losses + 1);
        }
        else if (userNum === goalNum) {
            $('#userScoreNumber').text(userNum);
            alert("You won!!! Click New Game to play again.");
            $('#winsNumber').text(wins + 1);
        };
    };
});