import quests from './data/quest-data.js';

export function generateUser(formData){
    return {
        completed: {},
        yen: 20000,
        happymeter: 0,
        name: formData.get('name'),
        avatar: formData.get('avatar'),
    };
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
}

export function findById(id, items){
    for (let item of items) {
        if (item.id === id) {
            return item;
        }
    }
}

export function getUser(){
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
}

export function questScore(userChoice, questId, userObject) {
    userObject.yen += userChoice.yen;
    userObject.happymeter += userChoice.happymeter;
    userObject.completed[questId] = true;
}

export function questsCompleted(userObject){
    for (let quest of quests){
        if (!userObject.completed[quest.id]){
            return false;
        }
    }
    return true;
}

export function userStatus(){
    const user = getUser();
    const img = document.getElementById('user-img');
    img.src = `../assets/${user.avatar}.jpg`;
        
    const name = document.getElementById('user-name-span');
    name.textContent = user.name;

    const happymeter = document.getElementById('happy-meter-span');
    happymeter.textContent = user.happymeter;

    const yen = document.getElementById('user-yen');
    yen.textContent = user.yen;
}

export function playAgain(){
    localStorage.removeItem('USER');
    window.location.replace('..');
}