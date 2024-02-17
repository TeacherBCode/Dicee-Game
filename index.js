
var score1 = 0;
var score2 = 0;   

function rollDice(){
    var player1 = Math.floor(Math.random() * 6) +1;
    var player2 = Math.floor(Math.random() * 6) +1;

    const images = {
        1: "images/dice1.png",
        2: "images/dice2.png",
        3: "images/dice3.png",
        4: "images/dice4.png",
        5: "images/dice5.png",
        6: "images/dice6.png",
    }

    const image1 = document.querySelector(".img1");
    image1.src = images[player1];

    const image2 = document.querySelector(".img2");
    image2.src = images[player2];


    if (player1 > player2){
        document.querySelector("h1").innerText = "🚩Player 1 Wins";
        score1++;
        document.querySelector(".player1_score").innerText = score1;
    }else if (player2 > player1){
        document.querySelector("h1").innerText = "Player 2 Wins🚩";
        score2++;
        document.querySelector(".player2_score").innerText = score2;
    }else{
        document.querySelector("h1").innerText = "Draw Match";
    }

}

function resetScore(){
    const image1 = document.querySelector(".img1");
    image1.src = "images/dice1.png";
    const image2 = document.querySelector(".img2");
    image2.src = "images/dice1.png";

    document.querySelector("h1").innerText = "Roll the Dice";
    score1 = 0;
    document.querySelector(".player1_score").innerText = score1;
    score2 = 0;
    document.querySelector(".player2_score").innerText = score2;


}
