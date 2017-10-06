//
//
//
var gamewords = ["football", "creative", "universe", "theory", "karate", "program", "stoic", "meditate", "guitar", "katana", "fitness", "driving", "planning", "finance", "reading", "discipline", "hiking", "forest", "wisdom", "courage"];
var wins = 0;
var remainingguesses = 10;
var randomwords = gamewords[Math.floor(Math.random() * gamewords.length)];
console.log(randomwords)
var chosenWord = randomwords;
var correctWord = "";


document.onkeyup = function(event) {


    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    function myFunction() {
        var str = document.getElementById("current-word").innerHTML;
        var res = str.replace("current-word", userGuess);
        document.getElementById("current-word").innerHTML = res;



        if ((userGuess) == (chosenWord.charAt(0)) || ((userGuess) == (chosenWord.charAt(1, 9))) || ((userGuess) == (chosenWord.charAt(2))) || ((userGuess) == (chosenWord.charAt(3))) || ((userGuess) == (chosenWord.charAt(4))) || ((userGuess) == (chosenWord.charAt(5))) || ((userGuess) == (chosenWord.charAt(6))) || ((userGuess) == (chosenWord.charAt(7))) || ((userGuess) == (chosenWord.charAt(8))) || ((userGuess) == (chosenWord.charAt(9)))) {
            wins++;
            remainingguesses--;
            var guesses = userGuess;
            guesses = document.getElementById("guesses");
            guesses.innerHTML = remainingguesses;

            var letters = userGuess;
            letters = document.getElementById("letters");
            letters.innerHTML += userGuess + ", ";;

        } else {
            remainingguesses--;
            var letters = userGuess;
            letters = document.getElementById("letters");
            letters.innerHTML += userGuess + ", ";
            var guesses = userGuess;
            guesses = document.getElementById("guesses");
            guesses.innerHTML = remainingguesses;

        }

        function playerWins() {}
        if (("current-word") === (correctWord)) {
            var userWins = wins;
            userWins = document.getElementById("wins");
            userWins.innerHTML = wins++;
        }
    }
    myFunction();
}

// window.location.reload(false);
function resetgame() {
    return gamewords;
    return randomwords;

    if (remainingguesses === 0) {
        console.log("You lost")

        chosenWord = randomwords;
    }

}

// function get_random_word () {
//     return array_for_randompull[randomizer];
// }
// if (missed_guesses == 0){
//     console.log("You fuckin lost")
//     word_to_evaluate = get_random_word;
// }