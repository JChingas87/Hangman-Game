// Press any key to start the game    document.onkeyup = function(event) {

// generate hidden word at random - create array

var gamewords = ["football", "creative", "universe", "theory", "karate", "program", "stoic", "meditate", "guitar", "katana", "fitness", "driving", "planning", "finance", "reading", "discipline", "hiking", "forest", "wisdom", "courage"];
var wins = 0;
var remainingguesses = 10;
var lettersguessed = "";
var randomwords = gamewords[Math.floor(Math.random() * gamewords.length)];
console.log(randomwords)


document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


    if ((userGuess) == (randomwords.charAt(0)) || ((userGuess) == (randomwords.charAt(1, 9))) || ((userGuess) == (randomwords.charAt(2))) || ((userGuess) == (randomwords.charAt(3))) || ((userGuess) == (randomwords.charAt(4))) || ((userGuess) == (randomwords.charAt(5))) || ((userGuess) == (randomwords.charAt(6))) || ((userGuess) == (randomwords.charAt(7))) || ((userGuess) == (randomwords.charAt(8))) || ((userGuess) == (randomwords.charAt(9)))) {
        wins++;
        remainingguesses--;
        console.log(userGuess);
        console.log(wins);
        console.log(remainingguesses);
    } else {
        remainingguesses--;
        console.log(userGuess);
        console.log(remainingguesses);
    }

    if ((remainingguesses) == 0) {

        console.log("you lose");
    }

    // for (i = 0; i < randomwords.length; i++) {
    //     if ((userGuess) == (randomwords.charAt(0))) {
    //         wins++;
    //         remainingguesses--;
    //         console.log(userGuess);
    //         console.log(wins);
    //         console.log(remainingguesses);
    //     } else {
    //         remainingguesses--;
    //         console.log(userGuess);
    //         console.log(remainingguesses);
    //     }
    // }

}