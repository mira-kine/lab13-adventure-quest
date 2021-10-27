// IMPORT MODULES under test here:
// import quests from '../data/quest-data.js';
import { generateUser, setUser, getUser, questScore, questsCompleted } from '../utils.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('generateUser should take form data and return userObject', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        completed: {},
        yen: 20000,
        happymeter: 0,
        name: 'mira',
        avatar: 'ponyo',
    };

    const formData = new FormData();
    formData.set('name', 'mira');
    formData.set('avatar', 'ponyo');
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = generateUser(formData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('setUser should set user info into local storage', (expect) => {
    localStorage.removeItem('USER');
    const userObject = {
        completed: {},
        yen: 20000,
        happymeter: 0,
        name: 'mira',
        avatar: 'ponyo',
    };
    setUser(userObject);
    const actual = JSON.parse(localStorage.getItem('USER'));

    expect.deepEqual(actual, userObject);
});

test('getUser gets info from local storage, returns as object', (expect) => {
    localStorage.removeItem('USER');
    const userObject = {};
    setUser(userObject);
    const actual = getUser(userObject);

    expect.deepEqual(actual, userObject);
});

test('questScore should return correct updated user score', (expect)=> {
    const userObject = {
        completed: {},
        yen: 20000,
        happymeter: 0,
        name: 'mira',
        avatar: 'ponyo',
    };

    const userChoice = {
        id: 'ramen',
        description: 'go eat ramen',
        result: `
            You go eat ramen at a small hole in the wall ramen shop. You put some cash in turn for a ticket, which you give to the nice old lady at the door. You hear the equally kind looking old man go "irashaimase!" as they invite you in the door. You receive a piping hot bowl of ramen in front of you. It only cost 500 yen, and you gained 5 happy points. Simple happiness.
        `,
        yen: -500,
        happymeter: 5,
    };
    const questId = 'shibuya';
    questScore(userChoice, questId, userObject);

    expect.equal(userObject.yen, 19500);
    expect.equal(userObject.happymeter, 5);
    expect.equal(userObject.completed[questId], true);
});

test('questsCompleted returns false if user has not completed quest', (expect)=>{
    const userObject = {
        completed: { shibuya: true, asakusa: true }
    };
    const actual = questsCompleted(userObject);
    expect.equal(actual, false);
});

test('questsCompleted returns true if user has not completed quest', (expect)=>{
    const userObject = {
        completed: { shibuya: true, asakusa: true, tsukiji: true }
    };
    const actual = questsCompleted(userObject);
    expect.equal(actual, false);
});
