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

var answerKey = [[0, 0, 1, 0, 0], [0, 0, 0, 0, 1], [0, 1, 0, 0, 0]];

var timer;
var timeLeft = 40;
var results = false;
var question = 0;
var correct = 0;
var wrong = 0;

//Document read functions
$(document).ready(function() {
    $("#game").on("click", function() {
        game(0);
    });
});
$(document).ready(function() {
    $("#c1").on("click", function() {
        game(1);
    });
});
$(document).ready(function() {
    $("#c2").on("click", function() {
        game(2);
    });
});
$(document).ready(function() {
    $("#c3").on("click", function() {
        game(3);
    });
});
$(document).ready(function() {
    $("#c4").on("click", function() {
        game(4);
    });
});
$(document).ready(function() {
    $("#again").on("click", function() {
        playAgain();
    });
});

/*Updates questions based on user interaction/time
  Calls functions answer and timer within the function.
  Displays the results of quiz at the end of game.
*/
function game(x) {
    if (this.question < 3) {
        printQuestion();
    }
    if (this.question == 3) {
        results = true;
    }
    //update results before checking results
    answer(x);

    if (results) {
        printResults();
    }

    //update question # last
    this.question++;
}

/*Answer function takes in x (user choice) and totals right and wrong answers*/
function answer(x) {
    if (x != 0) {
        //minus one to correct indexing
        if (answerKey[this.question - 1][x] == 1) this.correct++;
        if (answerKey[this.question - 1][x] == 0) this.wrong++;
    }
}

function playAgain() {
    this.question = 0;
    this.correct = 0;
    this.wrong = 0;
    this.results = false;

    $("#correct").hide();
    $("#wrong").hide();
    $("#unanswered").hide();
    $("#playagain").hide();
    $("#again").hide();

    game(0);


}

function printQuestion() {
    //update html
    $("#q").html("<h1 class='mx-auto'>" + quiz[this.question][0] + "</h1>");
    $("#c1").html(
        "<button type='button' class='btn btn-info btn-lg btn-block'>" +
            quiz[this.question][1] +
            "</button>"
    );
    $("#c2").html(
        "<button type='button' class='btn btn-outline-info btn-lg btn-block bg-dark'>" +
            quiz[this.question][2] +
            "</button>"
    );
    $("#c3").html(
        "<button type='button' class='btn btn-info btn-lg btn-block'>" +
            quiz[this.question][3] +
            "</button>"
    );
    $("#c4").html(
        "<button type='button' class='btn btn-outline-info btn-lg btn-block bg-dark'>" +
            quiz[this.question][4] +
            "</button>"
    );
    
    $("#q").show();
    $("#c1").show();
    $("#c2").show();
    $("#c3").show();
    $("#c4").show();
    $("#game").hide();
}

function printResults() {
    $("#q").hide();
    $("#c1").hide();
    $("#c2").hide();
    $("#c3").hide();
    $("#c4").hide();

    $("#correct").html("<h1>Correct: " + this.correct + "</h1>");
    $("#wrong").html("<h1>Wrong: " + this.wrong + "</h1>");
    $("#correct").show();
    $("#wrong").show();
    $("#unanswered").show();
    $("#playagain").show();
    $("#again").show();
}

/*My broken timer

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
*/
