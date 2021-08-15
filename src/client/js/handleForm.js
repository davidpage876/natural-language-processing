import { postData } from './request.js';
import { analysePolarity } from './analyseResults.js';

/**
 * Handles the submit event on the input form.
 * Performs an API request with the URL provided by user,
 * then displays the results on the page.
 * @param {Event} event Submit event data.
 */
async function handleSubmit(event) {
    event.preventDefault();

    // Get URL provided by user.
    const urlInput = document.getElementById('url');
    const url = urlInput.value;
    console.log(`Form submitted with url: ${url}`);

    // Disable form buttons.
    const submitInput = document.getElementById('submit');
    urlInput.disabled = true;
    submitInput.disabled = true;

    // Make API request.
    const result = await postData('/nlp', { url });
    console.log(result);

    // Analyse result.
    const polarity = analysePolarity(result.sentimented_concept_list);

    // Display output.
    const resultsSection = document.getElementById('results-section');
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
}

export { handleSubmit }