$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var userScore = 0;
    var newScore = 0;

    $('#newGameButton').on('click', () => {
        console.log("new game started");
        userScore = 0;
        console.log("userScore: " + userScore);
        newScore = 0;
        console.log("newScore: " + newScore);
        var goalScore = Math.floor(Math.random()*10);
        console.log("goalScore: " + goalScore);
        var yellowValue = Math.floor(Math.random()*10);
        console.log("yellowValue: " + yellowValue);
        var blueValue = Math.floor(Math.random()*10);
        console.log("blueValue: " + blueValue);
        var emeraldValue = Math.floor(Math.random()*10);
        console.log("emeraldValue: " + emeraldValue);
        var purpleValue = Math.floor(Math.random()*10);
        console.log("purpleValue: " + purpleValue);
        $("#goalScoreNumber").text(goalScore);
        $("#userScoreNumber").text(userScore);
        //display new goal score
        //clear user score
        //update win/loss counter?

        $('#yellow').on('click', function() {
            crystalValue = yellowValue;
            gameCounter(userScore, goalScore, crystalValue);
            console.log("yellow selected");
        });

        $('#blue').on('click', function() {
            crystalValue = blueValue;
            gameCounter(userScore, goalScore, crystalValue);
            console.log("blue selected");
        });

        $('#emerald').on('click', function() {
            crystalValue = emeraldValue;
            gameCounter(userScore, goalScore, crystalValue);
            console.log("emerald selected");
        });
    
        $('#purple').on('click', function() {
            crystalValue = purpleValue;
            gameCounter(userScore, goalScore, crystalValue);
            console.log("purple selected");
        });
    });

    function gameCounter(userNum, goalNum, crystalNum) {
        newScore = crystalNum + userNum;
        if (newScore < goalNum) {
            $('#userScoreNumber').text(newScore);
            userScore = newScore;
            console.log("keep going");
            console.log("userScore: " + userScore);
            console.log("newScore: " + newScore);
        }
        else if (newScore > goalNum) {
            $('#userScoreNumber').text(newScore);
            alert("You lost! Click New Game to try again.");
            $("#lossesNumber").text(losses + 1);
            console.log("lose");
            console.log(newScore);
        }
        else if (newScore === goalNum) {
            $('#userScoreNumber').text(newScore);
            alert("You won!!! Click New Game to play again.");
            $('#winsNumber').text(wins + 1);
            console.log("win");
            console.log(newScore);
        };
    };
});