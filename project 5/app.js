let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const cmpScorePara = document.querySelector("#comp-score");

const genComputer=()=>{
    const option =["rock","paper","scissors"];
    const randIndex=Math.floor(Math.random()*3);
    return option[randIndex];
};

const drawGame=()=>{
    msg.innerText ="Game Draw.Play again!";
    msg.style.backgroundColor ="blue";
}
const showWinner =(userWin,userChoice,cmpChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
       
        msg.innerText =`you Win! ${userChoice} beats ${cmpChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++
        cmpScorePara.innerText=compScore;
        msg.innerText =`you loose!  ${cmpChoice} beats ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
};


const playGame =(userChoice)=>{
const cmpChoice=genComputer();

if(userChoice===cmpChoice){
drawGame();
}else{
    let userWin =true;
    if(userChoice==="rock"){
     userWin =   cmpChoice ==="paper"?false:true;
    }else if(userChoice==="paper"){
        userWin =   cmpChoice ==="scissors"?false:true;
    }else{
        userWin =   cmpChoice ==="rock"?false:true;
    }
    showWinner(userWin,userChoice,cmpChoice);
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
});