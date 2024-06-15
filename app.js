const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')

const player1CurrentScore = document.querySelector('#currentScore1')
const player2CurrentScore = document.querySelector('#currentScore2')

const player1TotalScore = document.querySelector('#totalScore1')
const player2TotalScore = document.querySelector('#totalScore2')

const diceImg = document.querySelector('img')


let activePlayer = true
let score = 0

function rollDiceHandler(){
    const randomNumber =  Math.ceil (Math.random ()  *6);

    console.log(randomNumber);

    diceImg.src = `./asset/${randomNumber}.jpg` ; 
    score += randomNumber

    if(activePlayer){
        if(randomNumber==1){
         activePlayer = false
         player1CurrentScore.innerHTML = 0
         player1.style.backgroundColor = "pink"; 
         player2.style.backgroundColor = "white"; 
         score = 0

        }else{
            player1CurrentScore.innerHTML = score
            
        } 
    }
    else{
        if(randomNumber==1){
            activePlayer = true
            player2CurrentScore.innerHTML = 0
            player2.style.backgroundColor = "pink"; 
         player1.style.backgroundColor = "white"; 
         score = 0

           }else{
               player2CurrentScore.innerHTML = score
           } 
    }
}

function holdhandler() {
if(activePlayer){
    player1TotalScore.innerText = +player1TotalScore.innerText + score
    player1CurrentScore.innerHTML = 0
    activePlayer = false
    player2.style.backgroundColor = "white"; 
    player1.style.backgroundColor = "pink"; 
}else{
    player2TotalScore.innerText = +player2TotalScore.innerText + score
    player2CurrentScore.innerHTML = 0
    activePlayer = true
    player1.style.backgroundColor = "white"; 
         player2.style.backgroundColor = "pink"; 
}
}
