var gamewords = ["software", "crate", "basket", "theory", "court", "pirate", "stoic", "mate", "guitar", "chord", "fighter", "drive", "planter", "fourth", "reading", "dare", "hike", "forest", "wisdom", "courage"];
var randomwords = Math.floor(Math.random() * gamewords.length);
var chosenWord = gamewords[randomwords];
var correctWord = [];
var correctGuess = [];
var underLine = [];
var wins = 0;
var remainingguesses = 10;

console.log(chosenWord);

var underLineId = document.getElementsByClassName("underline");
var correctGuessId = document.getElementsByClassName("correctGuess");

var underlineGenerator = () => {
    for (var i = 0; i < chosenWord.length; i++) {
        underLine.push("_");
    }
    return underLine;

};
console.log(underlineGenerator());


document.addEventListener("keypress", (event) => {



    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (chosenWord.includes(userGuess)) {
        correctGuess.push(userGuess);
        underLine[chosenWord.indexOf(userGuess)] = userGuess;

        underLineId[0].innerHTML = underLine.join("");

        remainingguesses--;
        var guesses = userGuess;
        guesses = document.getElementById("guesses");
        guesses.innerHTML = remainingguesses;

        var letters = userGuess;
        letters = document.getElementById("letters");
        letters.innerHTML += userGuess + ", ";;


        if (underLine.join("") === chosenWord) {
            wins++;
        }

    } else {
        remainingguesses--;
        var letters = userGuess;
        letters = document.getElementById("letters");
        letters.innerHTML += userGuess + ", ";
        var guesses = userGuess;
        guesses = document.getElementById("guesses");
        guesses.innerHTML = remainingguesses;

    }
    var htmlWins =

        "<p>Wins: " + wins + "</p>";

    document.querySelector(".wins").innerHTML = htmlWins;

    function resetGame() {
        if (remainingguesses === 0) {
            remainingguesses = 16;
            letters = "";
            return randomwords;
        }
    }
    resetGame();
});