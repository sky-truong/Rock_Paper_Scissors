let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === 'r') return 'Rock';
    if(letter === 'p') return 'Paper';
    return 'Scissors';
}

function win(userChoice, computerChoice){
    userScore++;
    const smallUser = 'user'.fontsize(3).sub();
    const smallComp = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUser} beats 
                          ${convertToWord(computerChoice)}${smallComp}. You win! \u{1F525}`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}



function lose(userChoice, computerChoice){
    computerScore++;
    const smallUser = 'user'.fontsize(3).sub();
    const smallComp = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(computerChoice)}${smallComp} beats 
                          ${convertToWord(userChoice)}${smallUser}. You lose... \u{1F44E}`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice){
    const smallUser = 'user'.fontsize(3).sub();
    const smallComp = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(computerChoice)}${smallComp} equals 
                          ${convertToWord(userChoice)}${smallUser}. It's a draw \u{1F615}`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'ps':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }
}


function main(){
    rock_div.addEventListener('click', () => game('r'));
    
    paper_div.addEventListener('click', () => game('p'));
    
    scissors_div.addEventListener('click', () => game('s'));
}

main();






