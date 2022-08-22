
var randomNumber1;
var randomNumber2;
var randomDiceImg;

// generate random numbers from 1 to 6
randomNumber1 = Math.floor ( 6 * Math.random() ) + 1;
randomNumber2 = Math.floor ( 6 * Math.random() ) + 1;

// change dice images based upon the random number
randomDiceImg = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImg);

randomDiceImg = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImg);

// change title to reflect who won the dice toss
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
else {  // they must be equal
    document.querySelector("h1").textContent = "Draw!";
}
