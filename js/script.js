let user_score = 0;
let comp_score = 0;
const userscore_span = document.getElementById("user-score");
const compscore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");
const result = document.getElementById('action-message');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomnumber = Math.floor(Math.random() * 3);
    return choices[randomnumber];
}


function win(user, comp) {
    user_score++;
    userscore_span.innerHTML = user_score;
    result_p.innerHTML = "You Win";
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function() {
        document.getElementById(user).classList.remove('green-glow')
    }, 1000);
    document.getElementById(comp).classList.add('red-glow');
    setTimeout(function() {
        document.getElementById(comp).classList.remove('red-glow')
    }, 1000);
}

function lose(user, comp) {
    comp_score++;
    compscore_span.innerHTML = comp_score;
    result_p.innerHTML = " You Lose";
    document.getElementById(comp).classList.add('red-glow');
    setTimeout(function() {
        document.getElementById(comp).classList.remove('red-glow')
    }, 1000);
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function() {
        document.getElementById(user).classList.remove('green-glow')
    }, 1000);
}

function draw(user, comp) {
    result_p.innerHTML = " Draw";
    document.getElementById(comp).classList.add('yellow-glow');
    setTimeout(function() {
        document.getElementById(comp).classList.remove('yellow-glow')
    }, 1000);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock.addEventListener('click', function() {
        game("r");
    })

    paper.addEventListener('click', function() {
        game("p");
    })

    scissor.addEventListener('click', function() {
        game("s");
    })
}
main();

alert(`Welcome to Rock, Paper and Scissor\nThere are some instructions for Player.
1. Player Choice will highlight in Green.
2. Computer Choice will Highlight in Red.
3. If its Draw, Choice will Highlight in Yellow.
4. Then Score will get updated and the Result will be Display.`);