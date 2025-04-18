let elements = document.querySelectorAll('.element');
let restart = document.querySelector('#restart');
let user_choice = document.querySelector('#user');
let comp_choice = document.querySelector('#comp');
let u_score = document.querySelector('#user_score');
let c_score = document.querySelector('#comp_score');
let win = document.querySelector('.win');

let result = "";
let user_score = 0;
let comp_score = 0;

//handling the click event for each element
elements.forEach((element) => {
    element.addEventListener('click', (event) => {
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

        //checking the result of the game
        if(user == comp){
            result ="It's a tie!";
        }
        else if((user == "Rock" && comp == "Scissor") || (user == "Scissor" && comp == "Paper") || (user == "Paper" && comp == "Rock")){
            result = "You win!";
            user_score++;
            u_score.innerText = user_score;
        }
        else {
            result = "Computer win!";
            comp_score++;       
            c_score.innerText = comp_score;
        }

        //Displaying user and computer choices and the result
        user_choice.innerText = `Your choose ${user}`;
        comp_choice.innerText =  `Computer choose ${comp}`;

        win.classList.remove('hidden');
        win.innerText = result;

    });
});

restart.addEventListener('click', () => {
    user_score = 0;
    comp_score = 0;
    u_score.innerText = user_score; 
    c_score.innerText = comp_score;
    win.classList.add('hidden');
});


