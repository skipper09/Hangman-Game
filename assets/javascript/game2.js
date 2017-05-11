var words = ["dessert", "baths", "wine", "friends", "shaveyourhead", "keyhiscar", "burnhishousedown"];
var winElement = document.querySelector("#wins");
var guessesRemainingElement = document.querySelector("#guesses-remaining");
var guessedLettersElement = document.querySelector("#guessed");
var currentWordElement = document.querySelector("#currentword");
var currentWord =[];
var wins = 0;
var lettersGuessed = [];
var uniqueLettersGuessed = [];
var s;
var answerArray = [];
var images = []

// function showImages() {
// 	for (wins=i) {
// 		document.querySelector("#img-holder") = images [i]
// 	}
// }



function guessesLeft() {
    return 12 - uniqueLettersGuessed.length
};

function setUpGame() {
	currentWord = words[wins];
	uniqueLettersGuessed = [];
    lettersGuessed = [];
    answerArray=[];

    for (var i = 0; i < currentWord.length; i++) {
        answerArray[i] = "_";
    }

    s = answerArray.join(" ");
    currentWordElement.innerHTML = s;
}

function guessLetter(letter) {
    if (letter.length > 0) {
        for (var i = 0; i < currentWord.length; i++) {

            if (currentWord[i] == letter) {
                answerArray[i] = letter;
            }
        }
    }

    if (currentWord.indexOf(letter) > -1) {} else {
        lettersGuessed.push(" " + letter);
        lettersGuessed.sort();
    }

    currentWordElement.innerHTML = answerArray.join(" ");

}
// here we will increase wins by 1, display da shit, and show buttons that get another random word.
function finishedWord() {
    var finalWord = answerArray.join("");
    if (currentWord == finalWord) {
        wins++;
        showscore();
        // showImages();
        // setUpGame();
    }
}

function uniqueLetters() {
    $.each(lettersGuessed, function(i, el) {
        if ($.inArray(el, uniqueLettersGuessed) === -1) uniqueLettersGuessed.push(el);
    });
}

document.onkeyup = function(event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    guessLetter(letter);
    uniqueLetters();
    showscore();
    lostGame();
    finishedWord();
}

function showscore() {
    winElement.innerHTML = "<p>Wins: " + wins + "</p>"
    guessesRemainingElement.innerHTML = "Guesses Remaining: " + guessesLeft();
    guessedLettersElement.innerHTML = "Letters Guessed:" + uniqueLettersGuessed;
};

function lostGame() {
    if (uniqueLettersGuessed.length === 12) {
        confirm("Game Over! You ran out of guesses. Click cancel to keep trying, click OK to try a new word!")
            // ADD FUNCTION TO GO TO NEXT WORD HERE!
    }
};

$(".btn").on("click",function () {
	setUpGame();
});

setUpGame();



