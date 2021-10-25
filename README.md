# Choose your Adventure in Tokyo: Make a Plan

## User Page (Home)
*   HTML Elements
    - [x] user name input area
    - [x] radio buttons for user avatar
*   Events
    *   Form: 
        - [x] Generate a user object using form data (generateUser)
        - [ ] Store user data in localStorage (setUser)
        - [ ] Redirect to map page

## Map Page
*   HTML Elements
    - [ ] List of links for each quest (from quest-data)
    - [ ] disable link if user has not completed the quest yet
    - [ ] link should contain URL search parameter containing quest ID
*   Events
    - [ ] Game logic (TBD)

## Quest Page
*   HTML Elements
    - [ ] Title
    - [ ] Image
    - [ ] Description
    - [ ] Quest Choices (radio buttons)
*   Events
    - [ ] On page load, get the quest ID from param, load quest data onto page
    *   After submitting form
        - [ ] update user data (local storage)
        - [ ] redirect back to map page
    

(bolded steps are mandatory, unbolded are for more advanced projects)

1) **Make a drawing of your app. Simple "wireframes"**
2) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
3) **For each HTML element ask: Why do I need this?**
4) Ask which of out HTML elements are hard coded, and which are dynamically generated?
5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
6) Is there some state we need to initialize?
7) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
8) **Think about how to validate each of your steps**
9) Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
10) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
11) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**


## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass