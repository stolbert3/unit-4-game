$(document).ready(function() {
    var goalScore = Math.floor(Math.random()*10);
    var userScore
    var yellowValue = Math.floor(Math.random()*10);
    var blueValue = Math.floor(Math.random()*10);
    var emeraldValue = Math.floor(Math.random()*10);
    var purpleValue = Math.floor(Math.random()*10);

    $('#newGameButton').on('click', () => {
        console.log("clicked");
    });

    //$('#yellow').on('click', function());
    //$('#blue').on('click', function());
    //$('#emerald').on('click', function());
    //$('#purple').on('click', function());
});