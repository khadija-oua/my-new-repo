function computerMove (){
    const x = Math.random();
    if ( x <= 1/3){
        return 'rock'
    }
    else if ( x <= 2/3){
        return 'paper'
    }
    else {
        return 'scissor'
    }

}
console.log(computerMove());

score = {wins: 0, losses: 0, ties: 0}


function playGame(playerMove){
    const p = computerMove();
    let result = '';

    if(playerMove === 'rock'){
        switch(p){
            case 'rock':
                score.ties++;
                result = 'Tie';
                break;
            case 'paper':
                score.losses++;
                result ='You lose';
                break;
            case 'scissor':
                score.wins++;
                result ='You win';
                break;
        }

    }
    else if(playerMove === 'paper'){
        switch(p){
            case 'rock':
                score.wins++;
                result ='You win';
                break;
            case 'paper':
                score.ties++;
                result = 'Tie';
                break;
            case 'scissor':
                score.losses++;
                result ='You lose';
                break;
        }
    }
    else{
        switch(p){
            case 'rock':
                score.losses++;
                result ='You lose';
                break;
            case 'paper':
                score.wins++;
                result ='You win';
                break;
            case 'scissor':
                score.ties++;
                result = 'Tie';
                break;
        }
        
    }
    console.log(score);
    document.querySelector('.status').innerHTML=result;
    document.querySelector('.you-computer').innerHTML= 
    `You 
        <img src="${playerMove}-emoji.png" alt="">
        <img src="${p}-emoji.png" alt="">
        Computer
        `;
    document.querySelector('.result').innerHTML=`
     Wins : ${score.wins}, Losses:${score.losses}, Ties:${score.ties}
    `;
}
function resetCount(){
    score.wins = 0;
    score.losses=0;
    score.ties=0;
    document.querySelector('.result').innerHTML=`
    Wins : 0, Losses:0, Ties:0
    `;
}
let auto = false;
let id;
function autoPlay(){
    auto = !auto;
    if(auto){
    id = setInterval(function(){
        playGame(computerMove());
    }, 1000);

    document.querySelector('.result-button2').
    innerHTML='Stop';
} else {
    clearInterval(id);
    document.querySelector('.result-button2').
    innerHTML='Auto Play';
}

}
   


