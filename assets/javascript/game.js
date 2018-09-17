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
        //console.log("userScore: " + userScore);
        //console.log("newScore: " + newScore);
        goalScore = Math.floor(Math.random()*20);
        //console.log("goalScore: " + goalScore);
        yellowValue = Math.floor(Math.random()*10);
        //console.log("yellowValue: " + yellowValue);
        blueValue = Math.floor(Math.random()*10);
        //console.log("blueValue: " + blueValue);
        emeraldValue = Math.floor(Math.random()*10);
        //console.log("emeraldValue: " + emeraldValue);
        purpleValue = Math.floor(Math.random()*10);
        //console.log("purpleValue: " + purpleValue);
        $("#goalScoreNumber").text(goalScore);

        $('#yellow').on('click', function() {
            userScore = userScore + yellowValue;
            gameCounter(userScore, goalScore);
            //console.log("yellow selected");
        });

        $('#blue').on('click', function() {
            userScore = userScore + blueValue;
            gameCounter(userScore, goalScore);
            //console.log("blue selected");
        });

        $('#emerald').on('click', function() {
            userScore = userScore + emeraldValue;
            gameCounter(userScore, goalScore);
            //console.log("emerald selected");
        });
    
        $('#purple').on('click', function() {
            userScore = userScore + purpleValue;
            gameCounter(userScore, goalScore);
            //console.log("purple selected");
        });
    });

    function gameCounter(userNum, goalNum) {
        if (userNum < goalNum) {
            $('#userScoreNumber').text(userNum);
            console.log("keep going");
            console.log("userScore: " + userScore);
        }
        else if (userNum > goalNum) {
            $('#userScoreNumber').text(userNum);
            alert("You lost! Click New Game to try again.");
            $("#lossesNumber").text(losses + 1);
            console.log("lose");
        }
        else if (userNum === goalNum) {
            $('#userScoreNumber').text(userNum);
            alert("You won!!! Click New Game to play again.");
            $('#winsNumber').text(wins + 1);
            console.log("win");
        };
    };
});