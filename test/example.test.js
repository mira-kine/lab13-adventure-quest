// IMPORT MODULES under test here:
import { generateUser, setUser } from '../utils.js';
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

