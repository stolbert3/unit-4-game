$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var goalScore = 0;
    var userScore = 0;
    var yellowValue = 0;
    var blueValue = 0;
    var emeraldValue = 0;
    var purpleValue = 0;
    var crystalValue = 0;
    var newScore = 0;

    $('#newGameButton').on('click', () => {
        userScore = 0;
        newScore = 0;
        goalScore = Math.floor(Math.random()*10);
        console.log(goalScore);
        yellowValue = Math.floor(Math.random()*10);
        console.log(yellowValue);
        blueValue = Math.floor(Math.random()*10);
        console.log(blueValue);
        emeraldValue = Math.floor(Math.random()*10);
        console.log(emeraldValue);
        purpleValue = Math.floor(Math.random()*10);
        console.log(purpleValue);
        $("#goalScoreNumber").text(goalScore);
        $("#userScoreNumber").text(userScore);
        //display new goal score
        //clear user score
        //update win/loss counter?

        $('#yellow').on('click', function() {
            crystalValue = yellowValue;
            gameCounter(userScore, goalScore, crystalValue);
        });

        $('#blue').on('click', function(){
            crystalValue = blueValue;
            gameCounter(userScore, goalScore, crystalValue);
        });

        $('#emerald').on('click', function() {
            crystalValue = emeraldValue;
            gameCounter(userScore, goalScore, crystalValue);
        });
    
        $('#purple').on('click', function(){
            crystalValue = emeraldValue;
            gameCounter(userScore, goalScore, crystalValue);
        });
    });

    function gameCounter(userNum, goalNum, crystalNum) {
        newScore = crystalNum + userNum;
            if (newScore < goalNum) {
                $('#userScoreNumber').text(newScore);
                userScore = newScore
            }
            else if (newScore > goalNum) {
                $('#userScoreNumber').text(newScore);
                alert("You lost! Click New Game to try again.");
                $("#lossesNumber").text(losses + 1);
            }
            else if (newScore === goalNum) {
                $('#userScoreNumber').text(newScore);
                alert("You won!!! Click New Game to play again.");
                $('#winsNumber').text(wins + 1);
            };
    };
});