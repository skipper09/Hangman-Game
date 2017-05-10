var words = ["icecream", "hotbaths", "redwine", "friendsandfamily", "shaveyourhead", "keyhiscar", "burnhishousedown"];

var winElement = document.querySelector("#wins");
var guessesRemainingElement = document.querySelector("#guesses-remaining");
var guessedLettersElement = document.querySelector("#guessed");
var currentWordElement = document.querySelector("#currentword");

var currentWord = words[Math.floor(Math.random() * words.length)];

var wins = 0;
var lettersGuessed = [];
var uniqueLettersGuessed = [];
function guessesLeft() { 
	return 12 - uniqueLettersGuessed.length
};

var s;
var answerArray = [];

function setUpGame() {
    for (var i = 0; i < currentWord.length; i++) {
        answerArray[i] = "_";
    }

    s = answerArray.join(" ");
    currentWordElement.innerHTML = s;
}

function guessLetter() {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();

    if (letter.length > 0) {
        for (var i = 0; i < currentWord.length; i++) {

            if (currentWord[i] == letter) {
                answerArray[i] = letter;
            }
        }
    } 

    if (currentWord.indexOf(letter)>-1) {}
    else  {
            	lettersGuessed.push(" " + letter);
            	lettersGuessed.sort();
            }

	currentWordElement.innerHTML = answerArray.join(" ");

}

function uniqueLetters () {
	$.each(lettersGuessed, function(i, el) {
    	if($.inArray(el, uniqueLettersGuessed) === -1) uniqueLettersGuessed.push(el);
	});
}

document.onkeyup = function(event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    guessLetter();
    uniqueLetters ();
    showscore();
}

function showscore() {
    winElement.innerHTML = "<p>Wins: " + wins + "</p>"
    guessesRemainingElement.innerHTML = "Guesses Remaining: " + guessesLeft ();
    guessedLettersElement.innerHTML = "Letters Guessed:" + uniqueLettersGuessed;
};

setUpGame();
