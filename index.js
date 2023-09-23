//when button ic clicked the following function gets triggered
function playersDice() {
    var player1DiceNumber = randomNumberGenerator();
    var player2DiceNumber = randomNumberGenerator();
    document.querySelector(".img1").setAttribute("src", "./images/dice"+player1DiceNumber+".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice"+player2DiceNumber+".png");

    if(player1DiceNumber>player2DiceNumber){
       document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
    }

    else if(player2DiceNumber>player1DiceNumber){
        document.querySelector("h1").innerHTML= "Player 2 wins 🚩";
    }

    else{
        document.querySelector("h1").innerHTML= "It's a draw!";
    }
    
}
//creating a random number between 1 an 6
function randomNumberGenerator() {
    var createRandomNum = Math.floor(Math.random() * 6) + 1;
    return createRandomNum;
}
