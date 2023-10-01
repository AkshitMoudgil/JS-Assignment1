// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const studentIdButton = document.getElementById("studentId"); // Get student ID button
const noun1Button = document.getElementById("noun1"); // Get noun1 button
const verbButton = document.getElementById("verb"); // Get verb button
const adjectiveButton = document.getElementById("adjective"); // Get adjective button
const noun2Button = document.getElementById("noun2"); // Get noun2 button
const settingButton = document.getElementById("setting"); // Get setting button

// Constants for p tag to display query selectors
const myIdDisplay = document.getElementById("myId"); // Get element to display student ID
const choosenNoun1Display = document.getElementById("choosenNoun1"); // Get element to display chosen noun1
const choosenVerbDisplay = document.getElementById("choosenVerb"); // Get element to display chosen verb
const choosenAdjectiveDisplay = document.getElementById("choosenAdjective"); // Get element to display chosen adjective
const choosenNoun2Display = document.getElementById("choosenNoun2"); // Get element to display chosen noun2
const choosenSettingDisplay = document.getElementById("choosenSetting"); // Get element to display chosen setting

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback"); // Get playback button
const randomButton = document.getElementById("random"); // Get random button
const storyDisplay = document.getElementById("story"); // Get element to display the story

// Variables for pre-defined arrays
var nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
var stdId = 200535888; // Student ID
var noun1Count = 0; // Counter for noun1
var verbCount = 0; // Counter for verb
var adjectiveCount = 0; // Counter for adjective
var noun2Count = 0; // Counter for noun2
var settingCount = 0; // Counter for setting

/* Functions
-------------------------------------------------- */

// Function to display student ID
function IdButton_on_click() {
    const showId = stdId; // Get student ID
    myIdDisplay.textContent = showId; // Display student ID
}

// Function for noun1 button click
function noun1_on_click() {
    const currentNoun1 = nouns1[noun1Count]; // Get current noun1
    choosenNoun1Display.textContent = currentNoun1; // Display current noun1
    noun1Count = (noun1Count + 1) % nouns1.length; // Increment noun1 counter
}

// Function for verb button click
function verb_on_click() {
    const currentVerb = verbs[verbCount]; // Get current verb
    choosenVerbDisplay.textContent = currentVerb; // Display current verb
    verbCount = (verbCount + 1) % verbs.length; // Increment verb counter
}

// Function for adjective button click
function adjective_on_click() {
    const currentAdjective = adjectives[adjectiveCount]; // Get current adjective
    choosenAdjectiveDisplay.textContent = currentAdjective; // Display current adjective
    adjectiveCount = (adjectiveCount + 1) % adjectives.length; // Increment adjective counter
}

// Function for noun2 button click
function noun2_on_click() {
    const currentNoun2 = nouns2[noun2Count]; // Get current noun2
    choosenNoun2Display.textContent = currentNoun2; // Display current noun2
    noun2Count = (noun2Count + 1) % nouns2.length; // Increment noun2 counter
}

// Function for setting button click
function setting_on_click() {
    const currentSetting = settings[settingCount]; // Get current setting
    choosenSettingDisplay.textContent = currentSetting; // Display current setting
    settingCount = (settingCount + 1) % settings.length; // Increment setting counter
}

// Function for playback button click
function playback_on_click() {
    const story = `Once upon a time, ${choosenNoun1Display.textContent} ${choosenVerbDisplay.textContent} ${choosenAdjectiveDisplay.textContent} ${choosenNoun2Display.textContent} ${choosenSettingDisplay.textContent}.`; // Construct the story
    storyDisplay.textContent = story; // Display the story
}

// Function for random button click
function random_on_click() {
    const randomNoun1 = nouns1[Math.floor(Math.random() * nouns1.length)]; // Get random noun1
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)]; // Get random verb
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)]; // Get random adjective
    const randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)]; // Get random noun2
    const randomSetting = settings[Math.floor(Math.random() * settings.length)]; // Get random setting

    choosenNoun1Display.textContent = randomNoun1; // Display random noun1
    choosenVerbDisplay.textContent = randomVerb; // Display random verb
    choosenAdjectiveDisplay.textContent = randomAdjective; // Display random adjective
    choosenNoun2Display.textContent = randomNoun2; // Display random noun2
    choosenSettingDisplay.textContent = randomSetting; // Display random setting

    const story = `Once upon a time, ${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}.`; // Construct the story
    storyDisplay.textContent = story; // Display the story
}

/* Event Listeners
-------------------------------------------------- */

studentIdButton.addEventListener("click", IdButton_on_click); // Add event listener for student ID button
noun1Button.addEventListener("click", noun1_on_click); // Add event listener for noun1 button
verbButton.addEventListener("click", verb_on_click); // Add event listener for verb button
adjectiveButton.addEventListener("click", adjective_on_click); // Add event listener for adjective button
noun2Button.addEventListener("click", noun2_on_click); // Add event listener for noun2 button
settingButton.addEventListener("click", setting_on_click); // Add event listener for setting button
playbackButton.addEventListener("click", playback_on_click); // Add event listener for playback button
randomButton.addEventListener("click", random_on_click); // Add event listener for random button
