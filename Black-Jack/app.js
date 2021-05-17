let wins = 0;
let losses = 0;
let draws = 0;

let player = 1;

let score1 = 0;
let score2 = 0;

let isPlayer1Bursted = false
let isPlayer2Bursted = false

const cards = [
    './images/2.png',
    './images/3.png',
    './images/4.png',
    './images/5.png',
    './images/6.png',
    './images/7.png',
    './images/8.png',
    './images/9.png',
    './images/J.png',
    './images/Q.png',
    './images/K.png',
    './images/A.png',
]

function selectCard() {
    const n = Math.random();
    return parseInt(n*100%12);
}


function stand() {
    if(player == 1) {
        player = 2;
        botPlay();
    }

    else if (player == 2) {
        player = 0;
        if (isPlayer2Bursted && isPlayer1Bursted) {
            document.getElementById('result_draw').classList.remove('d-none');
            var audio = new Audio('./sounds/swish.m4a');
            audio.play();
            draws++;
            document.getElementById('draw').innerHTML = draws;
        }


        else if (!isPlayer1Bursted && isPlayer2Bursted) {
            document.getElementById('result_success').classList.remove('d-none');
            var audio = new Audio('./sounds/cash.mp3');
            audio.play();
            wins++;
            document.getElementById('win').innerHTML = wins;
        }


        else if (isPlayer1Bursted && !isPlayer2Bursted) {
            document.getElementById('result_fail').classList.remove('d-none');
            var audio = new Audio('./sounds/aww.mp3');
            audio.play();
            losses++;
            document.getElementById('loss').innerHTML = losses;
        }


        else if(score1 > score2) {
            document.getElementById('result_success').classList.remove('d-none');
            var audio = new Audio('./sounds/cash.mp3');
            audio.play();
            wins++;
            document.getElementById('win').innerHTML = wins;
        }


        else if(score2 > score1) {
            document.getElementById('result_fail').classList.remove('d-none');
            var audio = new Audio('./sounds/aww.mp3');
            audio.play();
            losses++;
            document.getElementById('loss').innerHTML = losses;
        }


        else {
            document.getElementById('result_draw').classList.remove('d-none');
            var audio = new Audio('./sounds/swish.m4a');
            audio.play();
            draws++;
            document.getElementById('draw').innerHTML = draws;
        }


    }
}

function hit() {
    var audio = new Audio('./sounds/swish.m4a');
    audio.play();
    const ans = selectCard();

    const cardHolder = document.getElementById(`cards${player}`);
    
    if(player == 1) {
        score1 += (ans + 2);
        
        if(score1 > 21) {
            document.getElementById('result_burst1').classList.remove('d-none')
            isPlayer1Bursted = true
            player = 2;
            score1 -= (ans + 2);
            botPlay();
        }
        else {
            cardHolder.innerHTML += `<img src=${cards[ans]} alt=""></img>`
            document.getElementById('score1').innerHTML = score1;
        }
    }
    else if(player == 2){
        score2 += (ans + 2);
        
        if(score2 > 21) {
            document.getElementById('result_burst2').classList.remove('d-none');
            isPlayer2Bursted = true
            score2 -= (ans + 2);
            stand();
            player=0;
        }
        else {
            console.log(player);
            document.getElementById('score2').innerHTML = score2;
            cardHolder.innerHTML += `<img src=${cards[ans]} alt=""></img>`
        }
    }
}

function botPlay() {
    hit();
    let n = selectCard();
    if(n < 7) {
        stand();
    }
    else{
        hit();
        botPlay();
    }
}



function deal() {

    // removing the results
    if(!document.getElementById('result_success').classList.contains('d-none')) {
        document.getElementById('result_success').classList.add('d-none');
    }

    if(!document.getElementById('result_fail').classList.contains('d-none')) {
        document.getElementById('result_fail').classList.add('d-none');
    }

    if(!document.getElementById('result_draw').classList.contains('d-none')) {
        document.getElementById('result_draw').classList.add('d-none');
    }

    if(!document.getElementById('result_burst1').classList.contains('d-none')) {
        document.getElementById('result_burst1').classList.add('d-none');
    }

    if(!document.getElementById('result_burst2').classList.contains('d-none')) {
        document.getElementById('result_burst2').classList.add('d-none');
    }

    // removing the cards
    let cardStand = document.getElementById(`cards1`);
    cardStand.innerHTML = '';

    cardStand = document.getElementById('cards2');
    cardStand.innerHTML = '';


    // removing the score
    score1 = 0;
    score2 = 0;

    document.getElementById('score1').innerHTML = score1;
    document.getElementById('score2').innerHTML = score2;

    player = 1;
    isPlayer2Bursted = false;
    isPlayer1Bursted = false;
}