import quests from '../data/quest-data.js';
import { findById, getUser, setUser, questScore } from '../utils.js';

// grab query parameter from URL
const searchParams = new URLSearchParams(window.location.search);
// use findById to find quest
const questData = findById(searchParams.get('id'), quests);
// if no quest exists, go back to map
// render quest page, call DOM first
const title = document.getElementById('quest-title');
title.textContent = questData.title;
const img = document.getElementById('quest-image');
img.src = `../assets/${questData.image}`;
const description = document.getElementById('quest-description');
description.textContent = questData.description;



// loop through choices, render HTML elements with quest data
const userChoice = document.getElementById('choices-form');
for (let choice of questData.choices){
    const label = document.createElement('label');
    
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.required = true;
    input.value = choice.id;

    const span = document.createElement('span');
    span.textContent = choice.description;
    label.append(input, span);
    userChoice.append(label);
}

// create submit form button
const button = document.createElement('button');
button.textContent = 'Do this';
userChoice.append(button);

userChoice.addEventListener('submit', (e)=>{
    e.preventDefault();
    const selectedChoice = document.querySelector('input[type="radio"]:checked');
    const choice = findById(selectedChoice.value, questData.choices);
    // get user from local storage(getUser)
    const user = getUser();
    // update user (questScore(userChoice, questId, userObject))
    // update yen, happymeter, completed
    questScore(choice, questData.id, user);
    // reset to local storage using setUser
    setUser(user);
    // display result from user data
    const questContent = document.getElementById('quest-content');
    questContent.classList.add('hidden');
    const questResults = document.getElementById('result');
    const resultP = document.createElement('p');
    resultP.textContent = choice.result;
    const mapLink = document.createElement('a');
    mapLink.href = '../map';
    mapLink.textContent = 'Go Back to Map';
    // display link to go back to map
    questResults.append(resultP, mapLink);

    questResults.classList.remove('hidden');
});