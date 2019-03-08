$(document).ready(function () {

    var timeRemaining = 70;
    var correct = 0;
    var incorrect = 0;
    var notAnswered = 0;
    var timer = 0;
    var isRunning;

    $("#trivia").hide();
    $("#timer").hide();
    $("#submitAnswers").hide();
    $("#score").hide();

    function time() {
        if (timeRemaining == 0) {
            updateScore();
        } else {
            $("#countdown").text(timeRemaining);
            timeRemaining--;
            isRunning=true;
        }
    }

    function updateScore() {
        $("#timer").empty();
        
        $("#score").show();
        clearTimeout(timer);

        if ($('input[name=question1]:checked').val()) {
            if ($('input[name=question1]:checked').val() === "a") {
                correct++;
            } else if ($('input[name=question1]:checked').val() === "b" || "c" || "d") {
                incorrect++;
            }
        } else {
            notAnswered++
        }

        if ($('input[name=question2]:checked').val()) {
            if ($('input[name=question2]:checked').val() === "c") {
                correct++;
            } else if ($('input[name=question2]:checked').val() === "a" || "b" || "d") {
                incorrect++;
            }
        } else {
            notAnswered++
        }

        if ($('input[name=question3]:checked').val()) {
            if ($('input[name=question3]:checked').val() === "c") {
                correct++;
            } else if ($('input[name=question3]:checked').val() === "a" || "b" || "d") {
                incorrect++;
            }
        } else {
            notAnswered++
        }

        if ($('input[name=question4]:checked').val()) {
            if ($('input[name=question4]:checked').val() === "c") {
                correct++;
            } else if ($('input[name=question4]:checked').val() === "a" || "b" || "d") {
                incorrect++;
            }
        } else {
            notAnswered++
        }

        if ($('input[name=question5]:checked').val()) {
            if ($('input[name=question5]:checked').val() === "a") {
                correct++;
            } else if ($('input[name=question5]:checked').val() === "c" || "b" || "d") {
                incorrect++;
            }
        } else {
            notAnswered++
        }

        

        $("#correct-text").text(" " + correct)
        $("#incorrect-text").text(" " + incorrect)
        $("#notanswered-text").text(" " + notAnswered)

        $("#trivia").empty();
        $("#submitAnswers").hide();

        isRunning=false;

    }

    $("#submit").click(function() {
        if (isRunning){
            updateScore();
        }else{}

    })

    $("#startGame").click(function () {
        timer = setInterval(time, 1000);

        $("#trivia").show();
        $("#timer").show();
        $("#startGameButton").hide();
        $("#submitAnswers").show();

    })


});