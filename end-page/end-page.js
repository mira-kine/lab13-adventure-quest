import { userStatus, playAgain, getUser } from '../utils.js';

const playAgainButton = document.getElementById('play-again-button');
const user = getUser();

playAgainButton.addEventListener('click', ()=>{
    playAgain();
});

userStatus();

const endContent = document.getElementById('end-content');

if (user.yen <= 0){
    endContent.textContent = 'You Lost all your money! End Game.';
}
else {
    endContent.textContent = 'Hope you had a good adventure!';
}

