const playerEl = document.getElementById("player");
const computerEl = document.getElementById("computer");
const resultEl = document.getElementById("result");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const playerImg = document.getElementById("playerimg");
const drawCount = document.getElementById("draw");
const playerCount = document.getElementById("playerwin");
const computerCount = document.getElementById("computerwin");





let playerChoice = "";
let computerChoice = "";
let result = "";
let draw = 0;
let playerWin = 0;
let computerWin = 0;
let comImg = document.getElementById("comimg");

function playerCss(){
    playerImg.style.backgroundColor = "yellowgreen";
    playerImg.style.borderRadius = "10px";
    playerImg.style.padding ="5px 15px";
   
}



function computerChoose(){
 let randomNum = Math.floor(Math.random()*3)+1;
 computerEl.style.display="none";
 comImg.style.backgroundColor = "yellowgreen";
 comImg.style.borderRadius = "10px";
 comImg.style.padding ="5px 15px";
 


if (randomNum===1) {
    computerChoice = "Rock";
    comImg.src = "img/rock.png";
  

}
else if (randomNum===2) {
    computerChoice = "Paper";
    comImg.src= "img/paper.png"; 
 
}
else if (randomNum===3) {
    computerChoice = "Scissor";
    comImg.src= "img/scissors.png";
   
}


}


function checkResult(){
    if (playerChoice==computerChoice) {
       result = "Draw!";
    }
    else if(playerChoice === "Rock" && computerChoice === "Scissor"){
       result = "Player Win!";
    }
    else if(playerChoice === "Paper" && computerChoice === "Rock"){
       result = "Player Win!";
    }
    else if(playerChoice === "Rock" && computerChoice === "Paper"){
       result = "Computer Win!";
    }
    else if(playerChoice === "Scissor" && computerChoice === "Paper"){
       result = "Player Win!";
    }
    else if(playerChoice === "Paper" && computerChoice === "Scissor"){
       result = "Computer Win!";
    }
    else if(playerChoice === "Scissor" && computerChoice === "Rock"){
       result = "Computer Win!";
    }
    else{
        result = "Error Message!";
    }
   resultEl.innerText = `${result}`;

   if (result === "Draw!") {
    draw++;
}
else if(result === "Player Win!"){
    playerWin++;
}
else if (result === "Computer Win!") {
    computerWin++;
}
else{
    alert("Erro in counting wins")
}

drawCount.innerText = `${draw}`;
playerCount.innerText = `${playerWin}`;
computerCount.innerText = `${computerWin}`;
   
}


let restartBtn = document.getElementById("restart");

restartBtn.addEventListener("click", ()=>{
window.location.reload();
})

rockBtn.addEventListener("click", ()=>{
    playerChoice = "Rock";
    playerEl.style.display = "none";
    playerEl.innerText = `${playerChoice}`; 
    playerImg.src = "img/rock.png"
    computerChoose();
    checkResult();
    playerCss();
})

paperBtn.addEventListener("click", ()=>{
    playerChoice = "Paper";
    playerEl.style.display = "none";
    playerEl.innerText = `${playerChoice}`; 
    playerImg.src = "img/paper.png"
    computerChoose();
    checkResult();
    playerCss();

})

scissorBtn.addEventListener("click", ()=>{
    playerChoice = "Scissor";
    playerEl.style.display = "none";
    playerEl.innerText = `${playerChoice}`; 
    playerImg.src = "img/scissors.png"
    computerChoose();
    checkResult();
    playerCss();

})

