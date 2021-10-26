// import quests from './data/quest-data.js';

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
    userObject.happymeter += userObject.happymeter;
    userObject.completed[questId] = true;
}