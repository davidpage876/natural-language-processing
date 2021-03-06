import { postData } from './request.js';
import { analysePolarity } from './analyseResults.js';

/**
 * Validates user input before it is submitted.
 */
function validateInput(url) {
    if (url == null) {
        return false;
    } else {
        const regex = new RegExp(/^https?:\/\/\S*$/);
        return regex.test(url);
    }
}

/**
 * Handles the submit event on the input form.
 * Performs an API request with the URL provided by user,
 * then displays the results on the page.
 * @param {Event} event Submit event data.
 */
async function handleSubmit(event) {
    event.preventDefault();

    // Hide any previous results.
    const resultsSection = document.getElementById('results-section');
    resultsSection.classList.remove('has-result');

    // Get URL provided by user.
    const urlInput = document.getElementById('url');
    const url = urlInput.value;

    // Validate user input.
    const errorMsg = document.getElementById('error');
    if (validateInput(url)) {
        errorMsg.innerText = '';
        console.log(`Form submitted with url: ${url}`);
    } else {
        errorMsg.innerText = `Invalid url: "${url}"`;
        console.log(`Invalid url submitted: ${url}`);
        return;
    }

    // Disable form buttons.
    const submitInput = document.getElementById('submit');
    urlInput.disabled = true;
    submitInput.disabled = true;

    // Show loading message.
    const inputForm = document.getElementById('input-form');
    inputForm.classList.add('loading');

    // Make API request.
    const result = await postData('http://localhost:8080/nlp', { url });
    console.log(result);

    // Analyse result.
    const polarity = analysePolarity(result.sentimented_concept_list);

    // Display output.
    resultsSection.classList.add('has-result');
    const resultsContainer = document.getElementById('results');
    const agreement = result.agreement;
    const subjectivity = result.subjectivity;
    const irony = result.irony;
    const confidence = result.confidence;
    resultsContainer.innerHTML =
    `<div>Overall polarity: </div><div>${polarity.toUpperCase()}</div>
     <div>Agreement: </div><div>${agreement}</div>
     <div>Subjectivity: </div><div>${subjectivity}</div>
     <div>Irony: </div><div>${irony}</div>
     <div>Confidence: </div><div>${confidence}%</div>`;

    // Re-enable form buttons.
    urlInput.disabled = false;
    submitInput.disabled = false;

    // Hide loading message.
    inputForm.classList.remove('loading');
}

export { handleSubmit, validateInput }