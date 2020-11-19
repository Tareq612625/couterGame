const p1ScoreDisplay=document.getElementById('p1Score')
const p2ScoreDisplay=document.getElementById('p2Score')
const wScoreDisplay=document.querySelector('p span')
const inputScore=document.getElementById('inputScore')
const player1Btn=document.getElementById('player1Btn')
const player2Btn=document.getElementById('player2Btn')
const resetBtn=document.getElementById('resetBtn')

let p1Score=0;
let p2Score=0;
function getRandomNumber(){
    x= Math.floor(Math.random()*(10-2+1)+2);
    document.getElementById('wScore').innerHTML=x;
    return x;
}
let winnerScore=getRandomNumber();
let gameOver=false

player1Btn.addEventListener('click',()=>{
    if(!gameOver){
    p1Score++;
    winner(p1Score,winnerScore)
    //show change data
        p1ScoreDisplay.textContent=p1Score;
    }  
})

player2Btn.addEventListener('click',()=>{
    if(!gameOver){
        p2Score++;
        winner(p2Score,winnerScore)
    p2ScoreDisplay.textContent=p2Score;
    }
})

function winner(oldScore,winnerScore){
    if(oldScore===winnerScore){
        gameOver=true;
        console.log('Game Over');
         player1Btn.setAttribute('disabled', 'disabled')
         player2Btn.setAttribute('disabled', 'disabled')
    }
}

/////////////////////////////input score//////////////////////////////

inputScore.addEventListener('change', ()=>{
    console.log(typeof inputScore.value);
    wScoreDisplay.textContent=inputScore.value;
    //winingScore=number(inputScore.value);
    winnerScore=Number(inputScore.value)
    inputScore.value='';
    reset();
})
function reset(){
    
        p1Score=0;
        p2Score=0;
        //winingScore=5;
        gameOver=false
        p1ScoreDisplay.textContent=0;
        p2ScoreDisplay.textContent=0;
        player1Btn.removeAttribute('disabled')
        player2Btn.removeAttribute('disabled')

}
resetBtn.addEventListener('click',reset);

/*
const p1ScoreDisplay=document.getElementById('p1Score');
const p2ScoreDisplay=document.getElementById('p2Score');
const wScoreDisplay=document.querySelector('wScore');
const inputScore=document.getElementById('inputScore');
const player1Btn=document.getElementById('player1Btn');
const player2Btn=document.getElementById("player2Btn");
const resetBtn=document.getElementById("resetBtn");

let p1Score=0;
let p2Score=1;
let gameOver=false;
////////////////Random Number Generate For winning Score////////////
function getRandomNumber(){
    return Math.floor(Math.random()*(10-2+1)+2);
}
let winnerScore=getRandomNumber();

/////////////Button //////////////


function winner(oldScore,winnerScore){
    if(oldScore===winnerScore){
        gameOver=true;
        console.log('Game Over');
         player1Btn.setAttribute('disabled', 'disabled');
         player2Btn.setAttribute('disabled', 'disabled');
    }
}
///////////
player1Btn.addEventListener('change', ()=>{
    if(!gameOver){
        p1Score++;
        winner(p1Score,winnerScore);
        p1ScoreDisplay.textContent=p1Score;
    }
})

player2Btn.addEventListener('change', ()=>{
    if(!gameOver){
        p2Score++;
        p2ScoreDisplay.textContent=p2Score;  
    }
})
//////////////input
inputScore.addEventListener('change', ()=>{
    console.log(typeof inputScore.value);
    wScoreDisplay.textContent=inputScore.value;
    //winingScore=number(inputScore.value);
    winnerScore=Number(inputScore.value)
    inputScore.value='';
    reset();
})
//////////
function reset(){
    p1Score=0;
    p2Score=0;
    //winingScore=5;
    gameOver=false
    p1ScoreDisplay.textContent=0;
    p2ScoreDisplay.textContent=0;
    player1Btn.removeAttribute('disabled')
    player2Btn.removeAttribute('disabled')

}
resetBtn.addEventListener('click',reset);*/