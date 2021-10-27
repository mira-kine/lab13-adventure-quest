import quests from '../data/quest-data.js';
import { getUser, questsCompleted, userStatus } from '../utils.js';

const mapLinks = document.getElementById('map-links');
const user = getUser();

for (let quest of quests){
    // "/quest?id=<questId>"
    // <a href="./quest?id="shibuya">Shibuya</a>
    if (user.completed[quest.id]) {
        displaySpan(quest);
    } else {
        displayLink(quest);
    }
    
}

function displayLink(quest){
    const a = document.createElement('a');
    a.href = `../quests/?id=${quest.id}`;
    a.textContent = quest.title;
    a.classList.add('link');
    a.style.top = quest.map.top;
    a.style.left = quest.map.left;
    mapLinks.appendChild(a);
}

function displaySpan(quest){
    const span = document.createElement('span');
    span.textContent = quest.title;
    span.classList.add('link');
    span.style.top = quest.map.top;
    span.style.left = quest.map.left;
    mapLinks.appendChild(span);
}

if (user.yen <= 0){
    window.location.replace('../lose');
}

if (questsCompleted(user)){
    window.location.replace('../win');
}

userStatus();