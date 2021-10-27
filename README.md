# Choose your Adventure in Tokyo: Make a Plan

## User Page (Home)
*   HTML Elements
    - [x] user name input area
    - [x] radio buttons for user avatar
*   Events
    *   Form: 
        - [x] Generate a user object using form data (generateUser)
        - [x] Store user data in localStorage (setUser)
        - [x] Redirect to map page

## Map Page
*   HTML Elements
    - [x] List of links for each quest (from quest-data) -> use a loop to generate hrefs for each quest using URL parameter
    - [x] link should contain URL search parameter containing quest ID
*   Events (map.js)
    *  On Page Load
    - [x] loop through each quest
        - [x] if user has completed quest (found in completed[quest.id]), display Span. else displayLink. This way, the link is disabled once it has already been completed.
    - [x] generate a link <a> for each quest with href (put in quest id template literal in the URL param)
    - [x] create function for displayLink and displaySpan so you can add into the quest loop
    - [x] if user has completed all quests -- end game page
    - [x] if user has lost all yen -- game over


## Quest Page
*   HTML Elements
    - [x] Title
    - [x] Image
    - [x] Description
    - [x] Quest Choices (radio buttons) form
    - [x] avatar
    - [x] yen span
    - [x] happymeter span
    - [x] audio
    - [x] href back to map
    - [x] result section (hidden until choice is made)
*   Events (quest.js)
    - [x] On page load, get the quest ID from param, load quest data onto page (render Item)
    *   After submitting form (userChoices)
        - [x] prevent default
        - [x] use querySelector on the checked radio button, pass that into findById 
        - [x] get selected choice from choices array using findById
        - [x] update user data (local storage)
            - [x] update completed, yen, happymeter
            - [x] get data from quest.data choices 
        - [x] get userData
        - [x] questScore 
        - [x] set it back to local storage (setUser)
        - [x] display link to get back to map that replaces the whole page with the results page (gets rid of the choices page so you cannot go back to choices page)

## Utils
- [x] generateUser (user form)
- [x] setUser (set into localstorage)
- [x] findById
- [x] getUser (return userobject from ls, using JSON.parse)
- [x] questScore (updates yen and happy meter)
    *   takes userObject and compares it to userChoice (choiceObject)
    *   takes in parameters userChoice, questId, userObject. Calls .yen and .happymeter to update userObject with userChoice. Find it by Id. update completed{}.
- [x] function for completed all quests, takes userObject, checks if all completed are true then go to "you had a wonderful journey!" else, continue on to map page.
    *   do this by looping through quest (of quests). if (!userObject.completed[quest.id]){
        return false;
    }
    return true;
} 
(bolded steps are mandatory, unbolded are for more advanced projects)

## Map positioning
*   absolute position the map on the website, and relatively position the links to follow the map
*    make width: 90vw;
height: calc(90vw * dimension of image), make position relative for the links
*   create class for the links, add it into css
*   set the link styles to what styles it says in your quest data
    *    for ex. a.style.top = quest.map.top (and so on)
- [x] add it for both your links and span

## User Info
- [x] header function 

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