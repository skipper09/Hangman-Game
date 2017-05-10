var words = ["Ice Cream", "Hot Baths", "Red Wine", "Friends and Family", "Shave your Head", "Key his Car", "Burn his House Down"];
// var words = {
//     w1: ["Ice Cream"],
//     w2: ["Hot Baths"],
//     w3: ["Red Wine"],
//     w4: ["Friends and Family"],
//     w5: ["Shave your Head"],
//     w6: ["Key his Car"],
//     w7: ["Burn his House Down"]
// };

var wins = 0;
var lettersGuessed = [];
var guessesLeft = (12 - (lettersGuessed.length));

// var wordIndex = 0;
// var wordsArray = [words.w1, words.w2, words.w3, words.w4, words.w5, words.w6, words.w7];

var currentword = words[Math.floor(Math.random() * words.length)];

var s;
var count = 0;
var answerArray = [];

function setUpGame() {
    for (var i = 0; i < currentword.length; i++) {
        answerArray[i] = "_";
        console.log("poop")
    }

    s = answerArray.join(" ");
    document.querySelector("#currentword").innerHTML = s;
}

function getLetter() {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    // console.log(letter);

    lettersGuessed.push(letter);
    lettersGuessed.sort();

    if (letter.length > 0) {
        for (var i = 0; i < currentword.length; i++) {
            if (currentword[i] == letter) {
                answerArray[i] = letter;
                console.log("letter")
            }
        }

    }

    updateScore();
}


function updateScore() {
    document.querySelector("#wins").innerHTML = "<p>Wins: " + wins + "</p>"
    document.querySelector("#guesses-remaining").innerHTML = "Guesses Remaining: " + guessesLeft;
    document.querySelector("#guessed").innerHTML = "Letters Guessed: " + lettersGuessed
};

document.onkeyup = function(event) {

    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(letter);

    lettersGuessed.push(letter);
    lettersGuessed.sort();
    updateScore();
};

document.onkeyup = function(event) {

        var letter = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(letter);

        lettersGuessed.push(letter);
        lettersGuessed.sort();


        document.onkeyup = function(event) {
            var letter = String.fromCharCode(event.keyCode).toLowerCase();
            var letterArray = guessLetter(letter, answerArray);

        }


function guessLetter(letter,currentWordArray) {
    var resultArray = [];

    if (letter.length > 0) {
        for (var i = 0; i < currentWordArray.length; i++) {
            if (currentword[i] == letter) {
                answerArray[i] = letter;
                console.log("letter")
            }
        }

        return resultArray;

    }
}


    // renderWord();
    setUpGame();
    updateScore();



    // var currentword = function () {
    //     if (wordIndex <= (wordsArray.length - 1)) {
    //         wordsArray[wordIndex][0];}}



    // var currentword = function () {
    //     if (wordIndex <= (wordsArray.length - 1)) {
    //         // document.querySelector("#currentword").innerHTML = wordsArray[wordIndex][0];

    // }
    //     document.querySelector("#currentword").style.color = "white";
    //     for (var i = 0; i < currentword.length; i++) {
    //     answerArray[i] = "_";
    // }

    // s = answerArray.join(" ");
    // document.querySelector("#currentword").innerHTML = s;
    // // } else {
    //     alert("game over! thanks for playing")
    // }
    // };}
