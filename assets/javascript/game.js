var words = {
    w1: ["_ _ _  _ _ _ _ _ ", "Ice Cream", "i", "c", "e", "r", "a", "m"],
    w2: ["Hot Baths"],
    w3: ["Red Wine"],
    w4: ["Friends and Family"],
    w5: ["Shave your Head"],
    w6: ["Key his Car"],
    w7: ["Burn his House Down"]
};

var wins = 0;

var wordIndex = 0;
var wordsArray = [words.w1, words.w2, words.w3, words.w4];

function renderWord() {
    if (wordIndex <= (wordsArray.length - 1)) {
        document.querySelector("#currentword").innerHTML = wordsArray[wordIndex][0];
    } else {
        alert("game over! thanks for playing")
    }
};



// function updateScore() {
//     document.querySelector("wins").innerHTML = "<p>Wins: " + wins + "</p>"
//     document.querySelector("guesses-remaining").innerHTML = "Guesses Remaining: " + guessesLeft;
//     document.querySelector("guessed").innerHTML = "Letters Guessed: " + lettersGuessed
// };

renderWord();
// updateScore();

document.onkeyup = function(event) {

    if (wordIndex === wordsArray.length) {
        return;
    }

    var letter = String.fromCharCode(event.keycode).toLowerCase();

    if (letter === wordsArray[wordIndex][1]) {
        alert("hello");
    }



};
