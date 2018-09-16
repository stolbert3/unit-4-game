$(document).ready(function() {
    var wins = 0
    var losses = 0
    var goalScore = 0
    var userScore = 0
    var yellowValue = 0
    var blueValue = 0
    var emeraldValue = 0
    var purpleValue = 0
    var crystalValue = 0

    $('#newGameButton').on('click', () => {
        var userScore = 0;
        console.log("clicked");
        var goalScore = Math.floor(Math.random()*10);
        console.log(goalScore);
        var yellowValue = Math.floor(Math.random()*10);
        console.log(yellowValue);
        var blueValue = Math.floor(Math.random()*10);
        console.log(blueValue);
        var emeraldValue = Math.floor(Math.random()*10);
        console.log(emeraldValue);
        var purpleValue = Math.floor(Math.random()*10);
        console.log(purpleValue);
        $("#goalScoreNumber").text(goalScore);
        $("#userScoreNumber").text(0);
        //display new goal score
        //clear user score
        //update win/loss counter?

        $('#yellow').on('click', function() {
            crystalValue = yellowValue;
            gameCounter();
        });

        $('#blue').on('click', function(){
            crystalValue = blueValue;
            gameCounter();
        });

        $('#emerald').on('click', function() {
            crystalValue = emeraldValue;
            gameCounter();
        });
    
        $('#purple').on('click', function(){
            crystalValue = emeraldValue;
            gameCounter();
        });
    });

    function gameCounter() {
        while (userScore <= goalScore) {
            userScore = crystalValue + userScore
            if (userScore < goalScore) {
                $('#userScoreNumber').text(userScore);
            }
            else if (userScore > goalScore) {
                $('#userScore').text(userScore);
                alert("You lost! Click New Game to try again.");
                $("#lossesNumber").text(losses + 1);
            }
            else if (userScore === goalScore) {
                $('#userScore').text(userScore);
                alert("You won!!! Click New Game to play again.");
                $('#winsNumber').text(wins + 1);
            };
        };
    };
});