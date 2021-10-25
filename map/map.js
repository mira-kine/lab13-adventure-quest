import quests from '../data/quest-data.js';

const mapLinks = document.getElementById('map-links');

for (let quest of quests){
    // "/quest?id=<questId>"
    // <a href="./quest?id="shibuya">Shibuya</a>
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}/`;
    a.textContent = quest.title;

    mapLinks.appendChild(a);
}