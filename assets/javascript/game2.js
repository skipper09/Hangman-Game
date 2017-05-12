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
var tips = {
	titles: ["Dessert","Hot Baths","Good Wine","Friends and Family","Shave your Head","Key his Car","Burn his House Down"],
	caption: ["Go ahead, treat yourself to some extra dessert. After a break up, its important to indulge yourself, both physically and emotionally. Allow yourself to cry when you need to. Once you've allowed yourself time to grieve you're able to pick up the pieces faster",
	"A steaming hot bath is the ultimate form of self care. It's easy to let yourself go when you're upset, but self care is one of the best things you can do. Take a hot bath with an expensive Lush bath bomb and soy candles or get a manicure with your best friend","Good wine is sacred. Drink plenty of it, but don't be tempted to drink alone. Make sure you have a friend to vent and share your feelings with.",
	"Reach out to your support group whenever you are feeling down.",
	"If the first few tips didn't work out for you, there's nothing more cathartic than shaving your head. Take a few shots of vodka, and, sobbing, grab the trimmer your boyfriend left over and go to town. With each chunk of hair falls your toxic memories. Get rid of them all!",
	"We are on a roll here, and it feels good, doesn't it? Take a few more swigs of that vodka and lets go find his car at work. You know where he likes to park from that one time you had to drop him off at his car for that one thing. Write out how much you hate him on the hood of his car so he can remember forever!",
	"Did you finish that vodka yet? Lets run over to his house. Not sure what we are doing here yet but we're thinking of making sure he hasn't been seeing anyone new since y'all broke up. Let yourself in with the spare key left under the back doormat. What's that? You see a picture of him and that girl that he always said was just a friend? Lets burn that. Oops, did we light the house on fire? Time to get out of here!"]
}

function showTip () {
	$("#title").html(tips.titles[wins-1]);
	$('#image-caption').html(tips.caption[wins-1]);
};

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
        showTip();
    	playSound();
    }
}

function playSound () {
	document.getElementById('audio').play();
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
        alert("You should have gotten it by now!")
    }
};

$(".btn").on("click",function () {
	setUpGame();
	showscore();
});

setUpGame();



