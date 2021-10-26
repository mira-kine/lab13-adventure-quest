import quests from '../data/quest-data.js';
import { getUser } from '../utils.js';

const mapLinks = document.getElementById('map-links');
// const user = getUser();

for (let quest of quests){
    // "/quest?id=<questId>"
    // <a href="./quest?id="shibuya">Shibuya</a>
    const a = document.createElement('a');
    a.href = `../quests/?id=${quest.id}`;
    a.textContent = quest.title;

    mapLinks.appendChild(a);
}