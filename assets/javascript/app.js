/*Javascript Header
Description: In this program we will be using setTimeout() method to make a working 
trivia game. */

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
    [
        "What generation was Fairy Type introduced...",
        "4",
        "5",
        "6",
        "7",
    ],
    [
        "Which one isn't a Dragon Type?...",
        "Giratina",
        "Gyarados",
        "Charizard",
        "Altaria",
    ],
    [
        "How many pokeball types are in the core series?...",
        "27",
        "23",
        "26",
        "24",
    ],
    [
        "Shaymin transform from Land Form to?...",
        "Grass Form",
        "Water Form",
        "Flying Form",
        "Sky Form",
    ],
    [
        "Mewtwo is born from?...",
        "The poke gods",
        "Mew embryo",
        "Test Tube",
        "He was found",
    ],
    [
        "Unwon created what legendary pokemon as an illusion in the movie?...",
        "Raikou",
        "Entei",
        "Suicune",
        "Unown",
    ],
    [
        "The last Pokemon GBA game to be released was?...",
        "Pokemon Emerald",
        "Pokemon Ruby & Sapphire",
        "Pokemon Myster Dungeon Red Rescue Team",
        "Pokemon Pinball: Ruby & Sapphire",
    ],
];

var answerKey = [[0, 0, 1, 0, 0], [0, 0, 0, 0, 1], [0, 1, 0, 0, 0], [0, 0, 0, 1, 0],
[0, 0, 1, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 1, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0],
[0, 0, 0, 1, 0]];

var results = false;
var question = 0;
var correct = 0;
var wrong = 0;
var isCorrect = true;
var count = 20;
var interval;
var notAnswered = 0;

//Document read functions
$(document).ready(function () {
    $("#game").on("click", function () {
        game(0);
    });
});
$(document).ready(function () {
    $("#c1").on("click", function () {
        game(1);
    });
});
$(document).ready(function () {
    $("#c2").on("click", function () {
        game(2);
    });
});
$(document).ready(function () {
    $("#c3").on("click", function () {
        game(3);
    });
});
$(document).ready(function () {
    $("#c4").on("click", function () {
        game(4);
    });
});
$(document).ready(function () {
    $("#again").on("click", function () {
        playAgain();
    });
});

/*Updates questions based on user interaction/time
  Calls functions answer and timer within the function.
  Displays the results of quiz at the end of game.
*/
function game(x) {
    if (this.question < 1) {
        printQuestion();
    }
    if (this.question == 10) {
        results = true;
    }
    //update results before checking results
    answer(x);

    if (results) {
        setTimeout(printResults, 1000 * 3);
    }
}





/*Answer function takes in x (user choice) and totals right and wrong answers
Passes a true/false to display gif and then calls printQuestion after 3 seconds.*/
function answer(x) {
    if (x != 0) {
        if (answerKey[this.question - 1][x] == 1) {
            this.correct++;
            this.isCorrect = true;
        }
        if (answerKey[this.question - 1][x] == 0) {
            this.wrong++;
            this.isCorrect = false;
        }
        clearInterval(interval);
        gifDisplay(this.isCorrect);
        setTimeout(hideGif, 1000 * 3);
        setTimeout(printQuestion, 1000 * 3);
    }
}

//starts quiz again
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

//Displays if write or wrong
function gifDisplay(x) {
    if (x) {
        $("#answerRight").show();
        $("#qc" + this.question).show();
    } else {
        $("#answerWrong").show();
        $("#qw" + this.question).show();
    }
    $("#q").hide();
    $("#c1").hide();
    $("#c2").hide();
    $("#c3").hide();
    $("#c4").hide();
}
//hides gif that was displayed
function hideGif() {
    if (this.isCorrect) {
        $("#answerRight").hide();
        $("#qc" + this.question).hide();
    } else {
        $("#answerWrong").hide();
        $("#qw" + this.question).hide();
    }
}

/*Show/hides () all other info and only shows the 
next questions and answers.
*/
function printQuestion() {
    count = 20;
    //update html   
    $("#q").html("<h1 class='mx-auto'>" + quiz[this.question][0] + "</h1>");
    $("#c1").html(
        "<button type='button' class='btn btn-info btn-lg btn-block m-1'>" +
        quiz[this.question][1] +
        "</button>"
    );
    $("#c2").html(
        "<button type='button' class='btn btn-outline-info btn-lg btn-block bg-dark m-1'>" +
        quiz[this.question][2] +
        "</button>"
    );
    $("#c3").html(
        "<button type='button' class='btn btn-info btn-lg btn-block m-1'>" +
        quiz[this.question][3] +
        "</button>"
    );
    $("#c4").html(
        "<button type='button' class='btn btn-outline-info btn-lg btn-block bg-dark m-1'>" +
        quiz[this.question][4] +
        "</button>"
    );

    $("#time").show();
    $("#timeValue").show();
    $("#q").show();
    $("#c1").show();
    $("#c2").show();
    $("#c3").show();
    $("#c4").show();
    $("#game").hide();

    this.question++;

    //Timer for each question set to 20 seconds
    interval = setInterval(function () {
        var display = "Time Left: " + count;
        $('#timeValue').html(display);
        count--;
        console.log(count);
        if (count === 0) {
            clearInterval(interval);
            $('#timeValue').html("Out of Time!");
            notAnswered++;
            //special case for when last question is unanswered
            if (question === 10)
                printResults();
            else
                printQuestion();
        }

    }, 1000);


}

/*Show/hides () all other info and only shows the 
results.
*/
function printResults() {
    $("#timeValue").hide();
    $("#q").hide();
    $("#c1").hide();
    $("#c2").hide();
    $("#c3").hide();
    $("#c4").hide();


    $("#correct").html("<h1 class='mx-auto p-1'>Correct: " + correct + "</h1>");
    $("#wrong").html("<h1 class='mx-auto p-1'>Wrong: " + wrong + "</h1>");
    $("#unanswered").html("<h1 class='mx-auto p-1'>Unanswered: " + notAnswered + "</h1>");
    $("#correct").show();
    $("#wrong").show();
    $("#unanswered").show();
    $("#playagain").show();
    $("#again").show();
}
