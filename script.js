let mode = "";



document.addEventListener('DOMContentLoaded', () => {
    if(window.location.pathname.includes("index.html")){
        console.log("index.html loaded");

        let mode_1 = document.querySelector('#OnePlayer');
        let mode_2 = document.querySelector('#TwoPlayer');
        console.log(mode_1);
        console.log(mode_2);
        mode_1.addEventListener('click', () => {
            localStorage.setItem('mode','OnePlayer')
            window.location.href = "Game.html";
        });
        mode_2.addEventListener('click', () => {
            localStorage.setItem('mode','TwoPlayer')
            window.location.href = "Game.html";
        });
        console.log(mode);
    }

else if(window.location.pathname.includes("Game.html")){

let elements = document.querySelectorAll('.element');
let restart = document.querySelector('#restart');
let user1_choice = document.querySelector('#user1_choice');
let user2_choice = document.querySelector('#user2_choice');
let u1_score = document.querySelector('#user1_score');
let u2_score = document.querySelector('#user2_score');
let win = document.querySelector('.win');
let title = document.querySelector(".title");


let result = "";
let user1_score = 0;
let user2_score = 0;
let modes = localStorage.getItem('mode');
console.log(modes);

function GamePlay(choice1,choice2,mode){
    if (mode =="OnePlayer"){
        user1 = "You";
        user2 = "Computer";
    }
    else{
        user1 = "Player1";
        user2 = "Player2";
    }
    user1_choice.innerText = `${user1} choose ${choice1}`;
    user2_choice.innerText =  `${user2} choose ${choice2}`;

    if(choice1 == choice2){
        result ="It's a tie!";
    }
    else if((choice1 == "Rock" && choice2 == "Scissor") || (choice1 == "Scissor" && choice2 == "Paper") || (choice1 == "Paper" && choice2 == "Rock")){
        result = `${user1} win!`;
        user1_score++;
        u1_score.innerText = user1+ ": " + user1_score;
    }
    else {
        result = `${user2} win!`;
        user2_score++;       
        u2_score.innerText = user2 +": "+ user2_score;
    }
    return (result);
}

//handling the click event for each element
if(modes == "OnePlayer"){
    u1_score.innerText = "You: 0";
    u2_score.innerText = "Comp: 0";
elements.forEach((element) => {
    element.addEventListener('click', () => {
        let user = element.getAttribute("id") //getting the id of the clicked element
        let comp = Math.floor(Math.random()*3); //generating random number between 0 and 2

        //assigning the random number to the corresponding string (Rock, Paper, Scissor)
        if (comp == 0) {
            comp = "Rock"
        } else if (comp == 1) {
            comp = "Paper"
        } else if (comp == 2) {
            comp = "Scissor"
        }

        //Displaying the winner
        winner = GamePlay(user,comp,modes)
        win.classList.remove('hidden');
        win.innerText = winner;

    });
});
}

else{
    title.innerText = "Player1's turn!";
    u1_score.innerText = "Player1: 0";
    u2_score.innerText = "Player2: 0";
   let turn = 1;
   let clicks = 0;
   let Player1, Player2;

    function handleClick(choice){
        if(clicks<2){
        if (turn == 1)
        {
            Player1 = choice;
            turn = !turn;
            console.log(turn);
            console.log("Player1: " + Player1);
            clicks++;
            console.log(clicks);
             title.innerText = "Player2's turn!"
        }
       else
        {
            Player2 = choice;
            turn = !turn;
            console.log(turn);
            console.log("Player2: " + Player2);
            clicks++;
            console.log(clicks);
            title.innerText = "Player1's turn!"
        }
    }
    if(clicks==2){
        console.log( "reults:",Player1 , Player2);
         winner = GamePlay(Player1,Player2,modes)
        win.classList.remove('hidden');
        win.innerText = winner;
        clicks=0
        
    } 
}

    }
    

//for restarting the game
restart.addEventListener('click', () => {
    user1_score = 0;
    user2_score = 0;
    console.log(modes)
    if(modes == "OnePlayer"){
    u2_score.innerText = "Comp: 0";
    u1_score.innerText = "You: 0"; 
    }
    else{
    u2_score.innerText = "Player2: 0";
    u1_score.innerText = "Player1: 0"; 
    }
    win.classList.add('hidden');
    user1_choice.innerText = "Pick your weapon - Rock, Paper, or Scissors!";
    user2_choice.innerText = "";
});

    }
});
