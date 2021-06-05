
//Add Event Listnet to all the button
var gameBtns = document.querySelectorAll(".game-button");
var x = gameBtns.length;

for (var i = 0; i < x; i++) {

    if(i == 0) {
        gameBtns[i].addEventListener("click", rockSeleciotn);
    }else if(i == 1) {
        gameBtns[i].addEventListener("click", paperSeleciotn)
    }else {
        gameBtns[i].addEventListener("click", scissorsSeleciotn)
    }

}

    //play again button
    var finalBtn = document.querySelector(".replay");
    finalBtn.addEventListener("click", refreshPage);

    

    //setting defualt value for the scoreboard
    var playerScore = 0;
    var computerScore = 0;
    var gameround = 1;

    var playerScoreBoard = document.querySelector(".player-score");
    playerScoreBoard.innerHTML = playerScore;

    var computerScoreBoard = document.querySelector(".computer-score");
    computerScoreBoard.innerHTML = computerScore;



//All the Buttone Click Events--------------------------

//change Selection if the player click Rock
function rockSeleciotn() {

    //Change player selection picture
    var playerChoice = "rock";
    var playerSelectionHolder= document.querySelector(".player-selection img");
    playerSelectionHolder.setAttribute("src", "images/"+playerChoice+".svg");
    playerSelectionHolder.classList.add("gameResult");

    //Highlight the Button
    var effectOnBtnClick = document.querySelectorAll(".game-btn button");
    effectOnBtnClick[0].classList.add("btnClick-effect");
    setTimeout(() => {effectOnBtnClick[0].classList.remove("btnClick-effect"); }, 150);
    
    //calling the sound function
    btnClickSound();

    //Change computer selection picture
    var compChoice = computerChoice();
    var computerSelectionHolder = document.querySelector(".computer-selection img");
    computerSelectionHolder.setAttribute("src", "images/"+compChoice+".svg"); //  images/rock.svg
    computerSelectionHolder.classList.add("gameResult");

    //Game Result
    gameResult(playerChoice , compChoice);


}

//change Selection if the player click Paper
function paperSeleciotn() {

    //Change the picture
    var playerChoice = "paper";
    var playerSelectionHolder= document.querySelector(".player-selection img");
    playerSelectionHolder.setAttribute("src", "images/"+playerChoice+".svg");
    playerSelectionHolder.classList.add("gameResult");

    //Highlight the Buttin
    var effectOnBtnClick = document.querySelectorAll(".game-btn button");
    effectOnBtnClick[1].classList.add("btnClick-effect");
    setTimeout(() => {effectOnBtnClick[1].classList.remove("btnClick-effect"); }, 150);

   //calling the sound function
   btnClickSound();

    //Change computer selection picture
    var compChoice = computerChoice();
    var computerSelectionHolder = document.querySelector(".computer-selection img");
    computerSelectionHolder.setAttribute("src", "images/"+compChoice+".svg"); //  images/rock.svg
    computerSelectionHolder.classList.add("gameResult");

    //Game Result
    gameResult(playerChoice , compChoice);

}

//change Selection if the player click Scissors
function scissorsSeleciotn() {

    //Change the picture
    var playerChoice = "scissors";
    var playerSelectionHolder= document.querySelector(".player-selection img");
    playerSelectionHolder.setAttribute("src", "images/"+playerChoice+".svg");
    playerSelectionHolder.classList.add("gameResult");

    //Highlight the Buttin
    var effectOnBtnClick = document.querySelectorAll(".game-btn button");
    effectOnBtnClick[2].classList.add("btnClick-effect");
    setTimeout(() => {effectOnBtnClick[2].classList.remove("btnClick-effect"); }, 150);

    //calling the sound function
    btnClickSound();

    //Change computer selection picture
    var compChoice = computerChoice();
    var computerSelectionHolder = document.querySelector(".computer-selection img");
    computerSelectionHolder.setAttribute("src", "images/"+compChoice+".svg"); //  images/rock.svg
    computerSelectionHolder.classList.add("gameResult");
    
    //Game Result
    gameResult(playerChoice , compChoice);

}





//All the function--------------------------

//Page Refresh Function
function refreshPage(){
    window.location.reload();
} 


//adding sound on button click
function btnClickSound() {
    var audio = new Audio("sounds/btnclick.wav");
    audio.play();
}

//generaing comp choice
function computerChoice() {

    var ranNo = Math.floor(Math.random()*3);
    var comChoice;

    if(ranNo == 0) {

        comChoice = "rock";

    }else if(ranNo == 1) {

        comChoice = "paper";

    }else {

        comChoice = "scissors";
        
    }

    return comChoice;
    
}


//game result function
function gameResult(playerChoice, computerChoice) {

    var roundResult = document.querySelector(".game-result h3");
    var resultHolder = "";

    if(playerChoice == computerChoice) { //if both choices are same

        
        roundResult.innerHTML = "It is a Draw";
        resultHolder = "draw";
        playerScore = playerScore;
        computerScore = computerScore;

        //Updating Scoreboard
        playerScoreBoard.innerHTML = playerScore;
        computerScoreBoard.innerHTML = computerScore;


    }else if(playerChoice == "rock"){ //when player select rock

        if(computerChoice == "paper") {
            
            roundResult.innerHTML = "You Loss...💩";
            resultHolder = "loss";

            computerScore++;

            //Updating Scoreboard
            computerScoreBoard.innerHTML = computerScore;

        }else {

            roundResult.innerHTML = "You Won...🔥"
            resultHolder = "won";
            playerScore++;

            //Updating Scoreboard
            playerScoreBoard.innerHTML = playerScore;
        
        }

    }else if(playerChoice == "paper") { //when player select paper

        if(computerChoice == "scissors") {

            roundResult.innerHTML = "You Loss...💩";
            resultHolder = "loss";

            computerScore++;

            //Updating Scoreboard
            computerScoreBoard.innerHTML = computerScore;

        }else { //when player select scissors

            roundResult.innerHTML = "You Won...🔥";
            resultHolder = "won";

            playerScore++;

            //Updating Scoreboard
            playerScoreBoard.innerHTML = playerScore;

        }

    }else {

        if(computerChoice == "rock") {

            roundResult.innerHTML = "You Loss...💩";
            resultHolder = "loss";

            computerScore++;

            //Updating Scoreboard
            computerScoreBoard.innerHTML = computerScore;

        }else {

            roundResult.innerHTML = "You Won...🔥";
            resultHolder = "won";

            playerScore++;

            //Updating Scoreboard
            playerScoreBoard.innerHTML = playerScore;

        }

    }

    //Each Round Result
    roundResultTextManipulator(gameround, resultHolder, playerChoice, computerChoice);

    if(gameround > 5) {

        var replayBnt = document.querySelector(".replay");
        var btnSection = document.querySelector(".game-btn");
        btnSection.style.display = "none";

        var finalResultSection = document.querySelector(".word p");
        finalResultSection.style.marginTop = "25px";
        
        if(playerScore == computerScore) {

            finalResultSection.innerHTML = "You Fool, You Can't Even Beat an AI. Shame on You🤦‍♀️🤷‍♂️";


        }else if(playerScore > computerScore) {

            finalResultSection.innerHTML = "Yoo Pat Your BUTT.. You Just Beat an AI🏅🏅";

        }else {

            finalResultSection.innerHTML = "Opps You Piece of POOP... You Just Lost to an AI💩💩";

        }

        replayBnt.style.display = "block";

    }

    


}


function roundResultTextManipulator(roundNo , resultHolder, playerChoice, computerChoice) {

    var resultPanel = document.querySelector(".round"+roundNo);
    var resultTxt = document.querySelector(".round"+roundNo+ " h4"); //.round1 h4
    var playerImg = document.querySelector(".round" + roundNo + " .player-choice img");//.round1 .player-choice-image
    var compImg = document.querySelector(".round" + roundNo + " .computer-choice img");

    playerImg.setAttribute("src", "images/"+playerChoice+".svg");
    compImg.setAttribute("src", "images/"+computerChoice+".svg");

        if(resultHolder == "won") {

            resultTxt.style.color = "green";
            resultTxt.style.fontWeight = "600";
            resultTxt.innerHTML =  playerChoice.toUpperCase() + " beat " + computerChoice.toUpperCase();

        }else if(resultHolder == "loss") {

            resultTxt.style.color = "red";
            resultTxt.style.fontWeight = "600";
            resultTxt.innerHTML =  playerChoice.toUpperCase() + " beat to " + computerChoice.toUpperCase();

        }else {

            resultTxt.innerHTML = "Round Draw";

        }

        resultPanel.classList.add("result-visibility");
        gameround++;

}


