const flagsElement = document.getElementById('flags');

const textsToChange = document.querySelectorAll('[data-section]'); // Function to change the text content based on the selected language

// Function to read the JSON file
const changeLanguage = async language => {
    const requestJson = await fetch(`./src/languages/${language}.json`)
    const texts = await requestJson.json(); // Convert to object and be able to use it in js
    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section; // Get the section from the data attribute
        const value = textToChange.dataset.value; // Get the value from the data attribute

        textToChange.innerHTML = texts[section][value]; // Change the text content
    }
}

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});