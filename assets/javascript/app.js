/*Javascript Header
Description: In this program we will be using setTimeout() method to make a working 
trivia game. 
*/

//variables
var quiz = [
    [
        "The pre evolution of pikachu is...",
        "Pikachu",
        "Pichu",
        "Raichu",
        "Jigglypuff",
    ],
    [
        "The first legendary Ash saw was...",
        "Mewtwo",
        "Mew",
        "Jigglypuff",
        "Ho oh",
    ],
    [
        "The pokemon rap references how many pokemon...",
        "150+",
        "200+",
        "250+",
        "300+",
    ],
];

var timer;
var timeLeft = 40;
var next = false;

//Document read functions
$(document).ready(function() {
    $("#game").on("click", function() {
        game();
    });
});
$(document).ready(function() {
    $("#c1").on("click", function() {
       
    });
});
$(document).ready(function() {
    $("#c2").on("click", function() {
        this.next = true;
    });
});
$(document).ready(function() {
    $("#c3").on("click", function() {
        this.next = true;
    });
});
$(document).ready(function() {
    $("#c4").on("click", function() {
        this.next = true;
    });
});

function game() {
    var question = 0;

    if (question < 10) {
        $("#q").html("<h1 class='mx-auto'>" + quiz[question][0] + "</h1>");
        $("#c1").html(
            "<button type='button' class='btn btn-info btn-lg btn-block'>" +
                quiz[question][1] +
                "</button>"
        );
        $("#c2").html(
            "<button type='button' class='btn btn-outline-info btn-lg btn-block bg-dark'>" +
                quiz[question][2] +
                "</button>"
        );
        $("#c3").html(
            "<button type='button' class='btn btn-info btn-lg btn-block'>" +
                quiz[question][3] +
                "</button>"
        );
        $("#c4").html(
            "<button type='button' class='btn btn-outline-info btn-lg btn-block bg-dark'>" +
                quiz[question][4] +
                "</button>"
        );
        $("#q").show();
        $("#c1").show();
        $("#c2").show();
        $("#c3").show();
        $("#c4").show();
        $("#game").hide();
        $("#time").show();

        startTimer();

    }
}

function timeLeft() {
    alert("timer");
    $("#time").html("<h1 class='mx-auto'>Time Left:" + timeLeft + "</h1>");
    this.timer = setTimeout(displayTime, 1000);
    this.timeLeft--;
    
}
function startTimer() {
    alert(this.timeLeft);
    if(this.timeLeft != 0) {
        timeLeft();
    }
}
