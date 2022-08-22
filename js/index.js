
var randomNumber1;

// generate random numbers from 1 to 6
randomNumber1 = Math.floor ( 6 * Math.random() ) + 1;
randomNumber2 = Math.floor ( 6 * Math.random() ) + 1;

// change dice image 1 based upon the random number
switch (randomNumber1) {
    case 1:
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
        break;

    case 2:
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
        break;

    case 3:
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
        break;

    case 4:
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
        break;

    case 5:
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
        break;

    case 6:
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
        break;

    default:
        break;
}

// change dice image 2 based upon the random number
switch (randomNumber2) {
    case 1:
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
        break;

    case 2:
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
        break;

    case 3:
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
        break;

    case 4:
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
        break;

    case 5:
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
        break;

    case 6:
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
        break;

    default:
        break;
}

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
